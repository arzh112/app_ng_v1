import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCategoryComponent } from './form-category/form-category.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category/new', component: FormCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
