
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { GridModule, PDFModule,ExcelModule, } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { PopupModule } from '@progress/kendo-angular-popup';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { EmployeeDashbordComponent } from './employee-dashbord/employee-dashbord.component';
import { MapComponent } from './map/map.component';
import { MergemapComponent } from './mergemap/mergemap.component';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { AuthComponent } from './auth/auth.component';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { RouterModule } from '@angular/router';
import { IconsModule } from '@progress/kendo-angular-icons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { MenuModule } from '@progress/kendo-angular-menu';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {GoogleLoginProvider,  FacebookLoginProvider} from 'angularx-social-login';
import { EmpListComponent } from './emp-list/emp-list.component';
import { ParentXCompComponent } from './inputoutputparameter/parent-xcomp/parent-xcomp.component';
import { ChildCompComponent } from './inputoutputparameter/child-comp/child-comp.component';
import { PromisesComponent } from './promises/promises.component';
import { AngularRxjsComponent } from './angular-rxjs/angular-rxjs.component';
import { MypipesComponent } from './customepipes/mypipes/mypipes.component';
import { CustpipePipe } from './customepipes/custpipe.pipe';
import { OfFromComponent } from './of-from/of-from.component';
import { FilterComponent } from './filter/filter.component';
import { TapComponent } from './tap/tap.component';
import { AsyncawaitComponent } from './asyncawait/asyncawait.component';
import { ObserableComponent } from './obserable/obserable.component';
import { TakeComponent } from './take/take.component';
import { Comp1Component } from './viewchild/comp1/comp1.component';
import { Comp2Component } from './viewchild/comp2/comp2.component';
import { AngularConceptComponent } from './angular-concept/angular-concept.component';
import { LoadingComponent } from './lazyloading/loading/loading.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';






@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashbordComponent,
    MapComponent,
    MergemapComponent,
    AuthComponent,
    EmpListComponent,
    ParentXCompComponent,
    ChildCompComponent,
    PromisesComponent,
    AngularRxjsComponent,
    MypipesComponent,
    CustpipePipe,
    OfFromComponent,
    FilterComponent,
    TapComponent,
    AsyncawaitComponent,
    ObserableComponent,
    TakeComponent,
    Comp1Component,
    Comp2Component,
    AngularConceptComponent,
    LoadingComponent,
    PageNotFoundComponent,
    HomeComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    GridModule,
    BrowserAnimationsModule,
    DropDownsModule,
    PopupModule,
    ButtonsModule,
    InputsModule,
    LabelModule,
    TreeViewModule,
    FormsModule,
    CommonModule,
    DateInputsModule,
    NavigationModule,
    PDFModule,
    ExcelModule,
    InputsModule,
    DialogsModule,
    NotificationModule,
    RouterModule,
    IconsModule,
    LayoutModule,
    IndicatorsModule,
    MenuModule,
    SocialLoginModule,
  
    
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              'clientId'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }
