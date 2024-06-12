import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddComponent } from './admin/add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ClientComponent } from './layout/client/client.component';
import { HomesComponent } from './layout/homes/homes.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { CartsComponent } from './components/carts/carts.component';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './admin/edit/edit.component';
import { DasboardComponent } from './admin/dasboard/dasboard.component';
import { HpComponent } from './admin/hp/hp.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { EditcateComponent } from './admin/editcate/editcate.component';
import { SearchComponent } from './components/search/search.component';
import { CategoryComponent } from './components/category/category.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from './filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddComponent,
    HomeComponent,
    ProductsComponent,
    ClientComponent,
    HomesComponent,
    ProductsDetailComponent,
    CartsComponent,
    EditComponent,
    DasboardComponent,
    HpComponent,
    RegisterComponent,
    LoginComponent,
    CategoriesComponent,
    EditcateComponent,
    SearchComponent,
    CategoryComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
