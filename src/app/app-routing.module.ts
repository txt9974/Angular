import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomesComponent } from './layout/homes/homes.component';
import { ClientComponent } from './layout/client/client.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { CartsComponent } from './components/carts/carts.component';
import { AddComponent } from './admin/add/add.component';
import { EditComponent } from './admin/edit/edit.component';
import { HomeComponent } from './components/home/home.component';
import { DasboardComponent } from './admin/dasboard/dasboard.component';
import { HpComponent } from './admin/hp/hp.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { guardGuard } from './Guard/guard.guard';
import { CategoriesComponent } from './admin/categories/categories.component';
import { EditcateComponent } from './admin/editcate/editcate.component';
import { SearchComponent } from './components/search/search.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  {
    path: '',
    component: HomesComponent,
  },
  {
    path: 'products',
    component: ClientComponent,
  },
  {
    path: 'carts',
    component: CartsComponent,
  },
  {
    path: 'detail/:id',
    component: ProductsDetailComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'category/:id',
    component: CategoryComponent,
  },
  {
    path: 'admin',
    component: DasboardComponent,
    canActivate: [guardGuard],
    children: [
      {
        path: 'add',
        component: AddComponent,
      },
      {
        path: 'edit/:id',
        component: EditComponent,
      },
      {
        path: 'categories',
        component: CategoriesComponent,
      },
      {
        path: 'categories/:id',
        component: EditcateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
