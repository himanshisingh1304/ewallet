import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerifyComponent } from './verify/verify.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { TransferfundComponent } from './transferfund/transferfund.component';
import { TransactionlistComponent } from './transactionlist/transactionlist.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { ShowbalanceComponent } from './showbalance/showbalance.component';
import { AddmoneyComponent } from './addmoney/addmoney.component';


const routes: Routes = [
   {path:"",redirectTo:"/login",pathMatch:"full"},
  {path:"verify",component: VerifyComponent},
  {path:"welcomepage",component: WelcomepageComponent},
  {path:"transferfund",component: TransferfundComponent},
  {path:"transactionlist",component:TransactionlistComponent},
  {path:"form",component: FormComponent},
  {path:"login",component: LoginComponent}, 
  {path:"showbalance",component: ShowbalanceComponent},
  {path:"addmoney",component: AddmoneyComponent},
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
