import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildGuard } from 'src/app/child.guard';
import { JobpostComponent } from 'src/app/faculty/dashboard/components/jobpost/jobpost.component';
import { AppliedListComponent } from './components/applied-list/applied-list.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';



const routes: Routes = [
  {path:'',component:WrapperComponent,canActivateChild:[ChildGuard],
  children:[
      {path:'dashboard',component:DashboardComponent},
      {path:'jobposting',component:JobpostComponent},
      {path:'editprofile',component:EditprofileComponent},
      {path:'changepassword',component:ChangePasswordComponent},
      {path:'appliedlist',component:AppliedListComponent}
  ]},
  {path:'**',redirectTo:'/dashboard',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule{ }