import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'ng-doc-inline-demo',
	template: ` <p style="color: red">inline-demo works HAHAHHAHAHA!</p> `,
	styles: [],
})
export class InlineDemoComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
