import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from './layout/layout.modelu';
import { ModuleModule } from './layout/model/model.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    LayoutModule,
    ModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
