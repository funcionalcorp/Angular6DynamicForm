import { SessionService } from './services/session.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { AnotherPageComponent } from './another-page/another-page.component';
import { PageHeaderComponent } from './page-header/page-header.component';


@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    AnotherPageComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
