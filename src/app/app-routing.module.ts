import { AuthGuard } from './core/auth.guard';
import { LoginComponent } from './login/login.component';
import { HomeModule } from './modules/home/home.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "home",
    canLoad: [AuthGuard],
    loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule),
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
