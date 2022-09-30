export const APP_COMPONENT_CONTENT: string = `
<ng-doc-root>
	<ng-doc-navbar [leftContent]="leftContent">
		<ng-template #leftContent>
			<h3>MyAwesomeDoc</h3>
		</ng-template>
	</ng-doc-navbar>
	<ng-doc-sidebar></ng-doc-sidebar>
<router-outlet></router-outlet>
</ng-doc-root>
`.trim();
