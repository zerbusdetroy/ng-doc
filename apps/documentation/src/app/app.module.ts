import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {NgDocModule} from '@ng-doc/app';
import {NG_DOC_ROUTING, NgDocGeneratedModule} from '@ng-doc/builder/generated';
import {NgDocUiKitRootModule} from '@ng-doc/ui-kit';

import {AppComponent} from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		NgDocModule.forRoot(),
		NgDocUiKitRootModule.forRoot(),
		NgDocGeneratedModule.forRoot(),
		RouterModule.forRoot(NG_DOC_ROUTING),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
