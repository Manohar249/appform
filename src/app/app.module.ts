import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { ManipulateDirective } from './manipulate.directive';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationFormComponent,
    ManipulateDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
