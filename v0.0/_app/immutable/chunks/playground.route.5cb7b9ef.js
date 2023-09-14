const n=`import {Component, ViewChild, ViewChildren} from '@angular/core';
import type {QueryList} from '@angular/core';
import {AccordionItemComponent, AgnosUIAngularModule} from '@agnos-ui/angular';
import {AccordionDirective} from '@agnos-ui/angular';
import {getUndefinedValues, hashChangeHook, provideHashConfig} from '../../utils';
import {getAccordionDefaultConfig} from '@agnos-ui/core';

const undefinedAccordionConfig = getUndefinedValues(getAccordionDefaultConfig());
@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	providers: [provideHashConfig('accordion')],
	template: \` <div auAccordion>
		<div au-accordion-item>
			<ng-template auAccordionItemHeader>Header 1</ng-template>
			<ng-template auAccordionItemBody>Body 1 </ng-template>
		</div>
		<div au-accordion-item>
			<ng-template auAccordionItemHeader>Header 2</ng-template>
			<ng-template auAccordionItemBody>Body 2</ng-template>
		</div>
	</div>\`,
})
export default class PlaygroundComponent {
	@ViewChild(AccordionDirective) widget: AccordionDirective;
	@ViewChildren(AccordionItemComponent) itemWidgets: QueryList<AccordionItemComponent>;

	constructor() {
		hashChangeHook((props) => {
			this.widget?._widget.patch({...undefinedAccordionConfig, ...props});
			this.itemWidgets?.forEach((widget) => {
				widget._widget.patch({...undefinedAccordionConfig, ...props});
			});
		});
	}
}
`;export{n as default};