-- to create project with routing
1-ng new comps --routing
<!-- ------------------------module----------------- -->
2- ng generate module Module_name --routing
  2-1 ng g m Elements --routing
  2-2 ng g m Collections --routing
  2-3 ng g m Views --routing
  2-3 ng g m Mods --routing
3- ng g c elements/ElementsHome
4- add export at elements.module.ts
@NgModule({
  declarations: [ElementsHomeComponent],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
  exports: [ElementsHomeComponent]

})
4- import ElementsModule at app.module.ts
import {ElementsModule} from './elements/elements.module';
 imports: [
    BrowserModule,
    AppRoutingModule,
    ElementsModule

  ],
<!-- ---------------------------routing----------------------- -->
import { ElementsHomeComponent } from './elements-home/elements-home.component';


const routes: Routes = [
  {path: 'elements' , component: ElementsHomeComponent}
];
<a routerLink="/elements">elements</a>
<a routerLink="/collections">collections</a>
<router-outlet></router-outlet>
<!-- using style  semantic-ui-->
https://semantic-ui.com/
 npm i semantic-ui-css
 @import 'semantic-ui-css/semantic.css';
add menu
<!-- create home component /create not-found component -->
ng g c home
ng g c not-found
at app-routing-modules
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: '**', component: NotFoundComponent}
];
<!-- to fix error not-fount when clcik you can not go any component -->
you must but AppRoutingModule at the last module
imports: [
    BrowserModule,
    ElementsModule,
    CollectionsModule,
    AppRoutingModule

  ],
  <!-- -------------------how implement lazy loading -->
  1- you must detect the module you need to be lazy loading =>elements
  2- you must rmove any import routing for this module 
  at app.module.ts
  import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {ElementsModule} from './elements/elements.module';>lazy loading
import { CollectionsModule } from './collections/collections.module';
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
    CollectionsModule,
    AppRoutingModule

  ],

  3- at app-routing-module
  
const routes: Routes = [
  {
    path: 'elements' , loadChildren: () => import('./elements/elements.module').then((m) => m.ElementsModule)
  },
  {path: '', component: HomeComponent},
  {path: '**', component: NotFoundComponent}
];

4- edit path at module
elements-routing-module
const routes: Routes = [
  {path: '' , component: ElementsHomeComponent}
];
<!-- -----------------create placeholder component -->
ng g c elements/placeholder
-- how can create directive to create this
  <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
they all the same class
-- ng g directive elements/times
-- goal print out some numer of element some number of time
import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor( private viewContainer: ViewContainerRef,
               private templateRef: TemplateRef<any> ) { }
  @Input('appTimes') set render(times: number){
    this.viewContainer.clear();
    // to empty out the current container
    for (let i = 0 ; i < times ; i++){
      this.viewContainer.createEmbeddedView(this.templateRef, {});
    }


  }

}
  <div *appTimes="lines" class="line"></div>
<!---------------------------------widget module-------------------  -->
$ ng g module shared
ng g c shared/Divider
add it export shaed.module.ts
-import at module to use it 
<!-- deploy -->
npm install -g angular-cli-ghpages 
 ng build --prod --base-href https://asmaak.github.io/angular-card/ 
 ngh --dir dist/card
