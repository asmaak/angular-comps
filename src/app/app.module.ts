import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {ElementsModule} from './elements/elements.module';>lazy loading
// import { CollectionsModule } from './collections/collections.module';>for lazy loading
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    // ElementsModule,=>lazy loading
    // CollectionsModule,=>for lazy loading
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
