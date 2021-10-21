import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from '@progress/kendo-angular-grid';
import { AngularConceptComponent } from './angular-concept/angular-concept.component';
import { AngularRxjsComponent } from './angular-rxjs/angular-rxjs.component';
import { AsyncawaitComponent } from './asyncawait/asyncawait.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { MypipesComponent } from './customepipes/mypipes/mypipes.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmployeeDashbordComponent } from './employee-dashbord/employee-dashbord.component';
import { FilterComponent } from './filter/filter.component';
import { HomeComponent } from './home/home.component';
import { ChildCompComponent } from './inputoutputparameter/child-comp/child-comp.component';
import { ParentXCompComponent } from './inputoutputparameter/parent-xcomp/parent-xcomp.component';
import { MapComponent } from './map/map.component';
import { MergemapComponent } from './mergemap/mergemap.component';
import { ObserableComponent } from './obserable/obserable.component';
import { OfFromComponent } from './of-from/of-from.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PromisesComponent } from './promises/promises.component';
import { TakeComponent } from './take/take.component';
import { TapComponent } from './tap/tap.component';
import { Comp1Component } from './viewchild/comp1/comp1.component';

const routes: Routes = [
  //lazy loading path
  {
    path: 'admin',
    loadChildren: () =>
      import('./lazyloading/admin/admin.module').then((mod) => mod.AdminModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./lazyloading/user/user.module').then((mod) => mod.UserModule),
  },
  { path: '', redirectTo:'auth',pathMatch:'full' },
  { path: 'auth', component: AuthComponent },
  // { path: ' employeedashbord',redirectTo:'employeedashbord',pathMatch:'full'},
  { path: 'employeedashbord',canActivate:[AuthGuard], component: EmployeeDashbordComponent,},
  {path:"home",component:HomeComponent},

     {path:'angularconcept',component:AngularConceptComponent,
      children:[
      { path: 'emplist', component: EmpListComponent },
      { path: 'parent', component: ParentXCompComponent },
      { path: 'obserable', component: ObserableComponent },
      { path: 'viewchild', component: Comp1Component },
      {path:'loading',component:LoadingComponent},
      ]
    },
      {path: 'angularrxjs',component: AngularRxjsComponent,
        children: [
          { path: 'map', component: MapComponent },
          { path: 'mergemap', component: MergemapComponent },
          { path: 'promise', component: PromisesComponent },
          { path: 'pipes', component: MypipesComponent },
          { path: 'of-from', component: OfFromComponent },
          { path: 'filter', component: FilterComponent },
          { path: 'tap', component: TapComponent },
          { path: 'asyncawait', component: AsyncawaitComponent },
          { path: 'take', component: TakeComponent },
        ],     
  },
  {path:'**',component:PageNotFoundComponent}
  // { path: "map", component: MapComponent },
  // { path: "mergemap", component: MergemapComponent },
  // { path: 'emplist', component: EmpListComponent },
  // {path:  "promise",component:PromisesComponent},
  // { path: 'parent', component: ParentXCompComponent },
  // { path: 'child', component: ChildCompComponent },

  // {
  //   path: 'angularrxjs',
  //   component: AngularRxjsComponent,
  //   children: [
  //     { path: 'map', component: MapComponent },
  //     { path: 'mergemap', component: MergemapComponent },
  //     { path: 'promise', component: PromisesComponent },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
