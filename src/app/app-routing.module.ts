import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomComponent } from './custom/custom.component';
import { HomeComponent } from './home/home.component';
import { PreDesignedComponent } from './pre-designed/pre-designed.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'custom', component: CustomComponent },
  { path: 'pre-designed', component: PreDesignedComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
