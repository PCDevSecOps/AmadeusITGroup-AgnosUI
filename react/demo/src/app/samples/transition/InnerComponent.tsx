import {writable} from '@amadeus-it-group/tansu';
import type {TransitionFn} from '@agnos-ui/react/services/transitions/baseTransitions';
import {collapseHorizontalTransition, collapseVerticalTransition, fadeTransition} from '@agnos-ui/react/services/transitions/bootstrap';
import {createTransition} from '@agnos-ui/react/services/transitions/baseTransitions';
import {useDirective} from '@agnos-ui/react/utils/directive';
import {useObservable} from '@agnos-ui/react/utils/stores';
import {useWidget} from '@agnos-ui/react/utils/widget';

const paramTransition$ = writable(collapseVerticalTransition);
const paramAnimation$ = writable(true);
const paramAnimationOnInit$ = writable(false);
const paramVisible$ = writable(true);
const paramRemoveFromDom$ = writable(true);

const InnerComponent = () => {
	const paramTransition = useObservable(paramTransition$);
	const paramAnimation = useObservable(paramAnimation$);
	const paramAnimationOnInit = useObservable(paramAnimationOnInit$);
	const paramRemoveFromDom = useObservable(paramRemoveFromDom$);
	const [transitionState, transitionWidget] = useWidget(
		createTransition,
		{},
		{
			props: {
				transition: paramTransition$,
				animation: paramAnimation$,
				animationOnInit: paramAnimationOnInit$,
				visible: paramVisible$,
			},
		},
	);
	const transitionRef = useDirective(transitionWidget.directives.directive);

	const changeTransition = (newTransition: TransitionFn) => {
		// Make sure the element is removed from the DOM
		// so that it does not keep state from the previous transition
		void transitionWidget.api.toggle(false, false);
		paramRemoveFromDom$.set(true);
		paramTransition$.set(newTransition);
	};

	return (
		<>
			<div className="transition-inner">
				<div className="h6 mt-2">Transition:</div>
				<div>
					<button
						type="button"
						className={`ms-2 btn btn-sm btn-outline-secondary ${paramTransition === collapseVerticalTransition ? 'active' : ''}`}
						onClick={() => changeTransition(collapseVerticalTransition)}
					>
						Vertical collapse
					</button>
					<button
						type="button"
						className={`ms-2 btn btn-sm btn-outline-secondary ${paramTransition === collapseHorizontalTransition ? 'active' : ''}`}
						onClick={() => changeTransition(collapseHorizontalTransition)}
					>
						Horizontal collapse
					</button>
					<button
						type="button"
						className={`ms-2 btn btn-sm btn-outline-secondary ${paramTransition === fadeTransition ? 'active' : ''}`}
						onClick={() => changeTransition(fadeTransition)}
					>
						Fade
					</button>
				</div>
				<div className="h6 mt-2">Other properties:</div>
				<label className="form-check">
					<input type="checkbox" className="form-check-input" checked={paramAnimation} onChange={() => paramAnimation$.set(!paramAnimation)} />
					Animation
				</label>
				<label className="form-check">
					<input
						type="checkbox"
						className="form-check-input"
						checked={paramAnimationOnInit}
						onChange={() => paramAnimationOnInit$.set(!paramAnimationOnInit)}
					/>
					Animation on init
				</label>
				<label className="form-check">
					<input
						type="checkbox"
						className="form-check-input"
						checked={paramRemoveFromDom}
						onChange={() => paramRemoveFromDom$.set(!paramRemoveFromDom)}
					/>
					Remove from DOM
				</label>
				<label className="form-check mb-2">
					<input
						type="checkbox"
						className="form-check-input"
						checked={transitionState.visible}
						onChange={() => transitionWidget.patch({visible: !transitionState.visible})}
					/>
					Visible
				</label>

				<div className="d-flex flex-wrap gap-2">
					<button type="button" className="btn btn-outline-primary" onClick={() => transitionWidget.api.toggle()}>
						Toggle
					</button>
					<button type="button" className="btn btn-outline-primary" onClick={() => transitionWidget.api.toggle(undefined, true)}>
						Toggle with animation
					</button>
					<button type="button" className="btn btn-outline-primary" onClick={() => transitionWidget.api.toggle(undefined, false)}>
						Toggle without animation
					</button>
				</div>
				<ul className="mt-2">
					<li>visible = {transitionState.visible + ''}</li>
					<li>transitioning = {transitionState.transitioning + ''}</li>
					<li>shown = {transitionState.shown + ''}</li>
					<li>hidden = {transitionState.hidden + ''}</li>
				</ul>

				{paramRemoveFromDom && transitionState.hidden ? null : (
					<div ref={transitionRef} style={{maxWidth: '300px'}}>
						<div className="card" style={{width: '300px'}}>
							<div className="card-body">You can collapse this card by clicking Toggle</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
};
export default InnerComponent;
