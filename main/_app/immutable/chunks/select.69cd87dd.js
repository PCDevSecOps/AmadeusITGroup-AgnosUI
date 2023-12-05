const e=`import { asReadable, computed, writable } from '@amadeus-it-group/tansu';
import { createHasFocus } from './services/focustrack';
import { bindableDerived, stateStores, writablesForProps } from './services/stores';
import { noop } from './utils';
const defaultItemId = (item) => '' + item;
const defaultConfig = {
    id: undefined,
    ariaLabel: 'Select',
    open: false,
    disabled: false,
    items: [],
    filterText: '',
    loading: false,
    selected: [],
    itemIdFn: defaultItemId,
    onOpenChange: noop,
    onFilterTextChange: noop,
    onSelectedChange: noop,
    className: '',
    menuClassName: '',
    menuItemClassName: '',
    badgeClassName: '',
    slotBadgeLabel: ({ itemContext }) => itemContext.item,
    slotItem: ({ itemContext }) => itemContext.item,
};
/**
 * Returns a shallow copy of the default select config.
 * @returns a copy of the default config
 */
export function getSelectDefaultConfig() {
    return { ...defaultConfig };
}
/**
 * Create a SelectWidget with given config props
 * @param config - an optional alert config
 * @returns a SelectWidget
 */
export function createSelect(config) {
    // Props
    const [{ open$: _dirtyOpen$, filterText$: _dirtyFilterText$, items$, itemIdFn$, onOpenChange$, onFilterTextChange$, onSelectedChange$, ...stateProps }, patch,] = writablesForProps(defaultConfig, config);
    const { selected$ } = stateProps;
    const filterText$ = bindableDerived(onFilterTextChange$, [_dirtyFilterText$]);
    const { hasFocus$, directive: hasFocusDirective } = createHasFocus();
    const open$ = bindableDerived(onOpenChange$, [_dirtyOpen$, hasFocus$], ([_dirtyOpen, hasFocus]) => _dirtyOpen && hasFocus);
    const selectedContextsMap$ = computed(() => {
        const selectedItemsContext = new Map();
        const itemIdFn = itemIdFn$();
        for (const item of selected$()) {
            const id = itemIdFn(item);
            selectedItemsContext.set(id, {
                item,
                id: itemIdFn(item),
                selected: true,
            });
        }
        return selectedItemsContext;
    });
    const selectedContexts$ = computed(() => [...selectedContextsMap$().values()]);
    const highlightedIndex$ = (function () {
        const store = writable(0);
        const newStore = asReadable(store, {
            set(index) {
                const { length } = visibleItems$();
                if (index != undefined) {
                    if (!length) {
                        index = undefined;
                    }
                    else if (index < 0) {
                        index = length - 1;
                    }
                    else if (index >= length) {
                        index = 0;
                    }
                }
                store.set(index);
            },
            update(fn) {
                newStore.set(fn(store()));
            },
        });
        return newStore;
    })();
    const itemContexts$ = computed(() => {
        const itemContexts = new Map();
        if (open$()) {
            const selectedContextsMap = selectedContextsMap$();
            const itemIdFn = itemIdFn$();
            for (const item of items$()) {
                const id = itemIdFn(item);
                itemContexts.set(id, {
                    item,
                    id,
                    selected: selectedContextsMap.has(id),
                });
            }
        }
        return itemContexts;
    });
    const visibleItems$ = computed(() => (open$() ? [...itemContexts$().values()] : []));
    const highlighted$ = computed(() => {
        const visibleItems = visibleItems$();
        const highlightedIndex = highlightedIndex$();
        return visibleItems.length && highlightedIndex != undefined ? visibleItems[highlightedIndex] : undefined;
    });
    const widget = {
        ...stateStores({
            visibleItems$,
            highlighted$,
            open$,
            selectedContexts$,
            filterText$,
            ...stateProps,
        }),
        patch,
        api: {
            clear() {
                selected$.set([]);
            },
            select(item) {
                widget.api.toggleItem(item, true);
            },
            unselect(item) {
                widget.api.toggleItem(item, false);
            },
            toggleItem(item, selected) {
                const itemIdFn = itemIdFn$();
                const itemId = itemIdFn(item);
                const selectedContextsMap = selectedContextsMap$();
                const isInSelected = selectedContextsMap.has(itemId);
                if (selected == null) {
                    selected = !isInSelected;
                }
                if ((selected && !itemContexts$().has(itemId)) || (!selected && !isInSelected)) {
                    // Nothing to do in this case
                    return;
                }
                selected$.update((selectedItems) => {
                    selectedItems = [...selectedItems]; // Mutate the array
                    if (selected && !isInSelected) {
                        selectedItems.push(item);
                    }
                    else if (!selected && isInSelected) {
                        const index = selectedItems.findIndex((item) => itemIdFn(item) === itemId);
                        selectedItems.splice(index, 1);
                    }
                    onSelectedChange$()?.(selectedItems);
                    return selectedItems;
                });
            },
            clearText() {
                // FIXME: not implemented yet!
            },
            highlight(item) {
                const index = visibleItems$().findIndex((itemCtx) => itemCtx.item === item);
                highlightedIndex$.set(index === -1 ? undefined : index);
            },
            highlightFirst() {
                highlightedIndex$.set(0);
            },
            highlightPrevious() {
                highlightedIndex$.update((highlightedIndex) => {
                    return highlightedIndex != null ? highlightedIndex - 1 : -1;
                });
            },
            highlightNext() {
                highlightedIndex$.update((highlightedIndex) => {
                    return highlightedIndex != null ? highlightedIndex + 1 : Infinity;
                });
            },
            highlightLast() {
                highlightedIndex$.set(-1);
            },
            focus(item) {
                // FIXME: not implemented yet!
            },
            focusFirst() {
                // FIXME: not implemented yet!
            },
            focusPrevious() {
                // FIXME: not implemented yet!
            },
            focusNext() {
                // FIXME: not implemented yet!
            },
            focusLast() {
                // FIXME: not implemented yet!
            },
            open: () => widget.api.toggle(true),
            close: () => widget.api.toggle(false),
            toggle(isOpen) {
                _dirtyOpen$.update((value) => (isOpen != null ? isOpen : !value));
            },
        },
        directives: {
            hasFocusDirective,
        },
        actions: {
            onInput({ target }) {
                const value = target.value;
                patch({
                    open: value != null && value !== '',
                    filterText: value,
                });
            },
            onInputKeydown(e) {
                const { ctrlKey, key } = e;
                let keyManaged = true;
                switch (key) {
                    case 'ArrowDown': {
                        const isOpen = open$();
                        if (isOpen) {
                            if (ctrlKey) {
                                widget.api.highlightLast();
                            }
                            else {
                                widget.api.highlightNext();
                            }
                        }
                        else {
                            widget.api.open();
                            widget.api.highlightFirst();
                        }
                        break;
                    }
                    case 'ArrowUp':
                        if (ctrlKey) {
                            widget.api.highlightFirst();
                        }
                        else {
                            widget.api.highlightPrevious();
                        }
                        break;
                    case 'Enter': {
                        const itemCtx = highlighted$();
                        if (itemCtx) {
                            widget.api.toggleItem(itemCtx.item);
                        }
                        break;
                    }
                    case 'Escape':
                        _dirtyOpen$.set(false);
                        break;
                    default:
                        keyManaged = false;
                }
                if (keyManaged) {
                    e.preventDefault();
                }
            },
        },
    };
    return widget;
}
`;export{e as default};