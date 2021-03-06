import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokyoComponent } from './tokyo/tokyo.component';
import { HogeComponent } from './hoge/hoge.component';
import { BuilderComponent } from './builder/builder.component';

@NgModule({
  declarations: [AppComponent, TokyoComponent, HogeComponent, BuilderComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
