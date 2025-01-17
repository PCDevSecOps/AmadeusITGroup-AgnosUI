import {SlotDirective, UseDirective} from '@agnos-ui/angular-headless';
import {NgModule} from '@angular/core';
import {
	ModalBodyDirective,
	ModalComponent,
	ModalFooterDirective,
	ModalHeaderDirective,
	ModalStructureDirective,
	ModalTitleDirective,
} from './components/modal/modal.component';
import {
	PaginationComponent,
	PaginationEllipsisDirective,
	PaginationFirstDirective,
	PaginationLastDirective,
	PaginationNextDirective,
	PaginationNumberDirective,
	PaginationPagesDirective,
	PaginationStructureDirective,
	PaginationPreviousDirective,
} from './components/pagination/pagination.component';
import {RatingComponent, RatingStarDirective} from './components/rating/rating.component';
import {SelectBadgeLabelDirective, SelectComponent, SelectItemDirective} from './components/select/select.component';
import {AlertBodyDirective, AlertComponent, AlertStructureDirective} from './components/alert/alert.component';
import {
	AccordionDirective,
	AccordionItemComponent,
	AccordionHeaderDirective,
	AccordionBodyDirective,
	AccordionItemStructureDirective,
} from './components/accordion/accordion.component';
import {SliderComponent, SliderHandleDirective, SliderLabelDirective, SliderStructureDirective} from './components/slider/slider.component';
import {ProgressbarComponent, ProgressbarStructureDirective} from './components/progressbar/progressbar.component';
import {ToastBodyDirective, ToastComponent, ToastStructureDirective} from './components/toast/toast.component';
/* istanbul ignore next */
const components = [
	SlotDirective,
	SelectComponent,
	SelectBadgeLabelDirective,
	SelectItemDirective,
	UseDirective,
	RatingComponent,
	RatingStarDirective,
	PaginationComponent,
	PaginationEllipsisDirective,
	PaginationFirstDirective,
	PaginationLastDirective,
	PaginationNextDirective,
	PaginationNumberDirective,
	PaginationPreviousDirective,
	PaginationPagesDirective,
	PaginationStructureDirective,
	ModalComponent,
	ModalStructureDirective,
	ModalHeaderDirective,
	ModalTitleDirective,
	ModalBodyDirective,
	ModalFooterDirective,
	AlertComponent,
	AlertStructureDirective,
	AlertBodyDirective,
	AccordionDirective,
	AccordionItemComponent,
	AccordionHeaderDirective,
	AccordionBodyDirective,
	AccordionItemStructureDirective,
	SliderComponent,
	SliderHandleDirective,
	SliderLabelDirective,
	SliderStructureDirective,
	ProgressbarComponent,
	ProgressbarStructureDirective,
	ToastComponent,
	ToastStructureDirective,
	ToastBodyDirective,
];

@NgModule({
	declarations: [],
	imports: components,
	exports: components,
})
export class AgnosUIAngularModule {}
