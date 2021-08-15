import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokyoComponent } from './tokyo/tokyo.component';
import { HogeComponent } from './hoge/hoge.component';

@NgModule({
  declarations: [AppComponent, TokyoComponent, HogeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
