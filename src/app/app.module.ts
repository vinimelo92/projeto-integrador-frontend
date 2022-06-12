import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { CartComponent } from './cart/cart.component';
import { CadastroComponent } from './register/cadastro.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './login/auth.service';
import { LogoutService } from './logout/logout.service';
import { CadastroService } from './register/cadastro.service';
import { RecoveryService } from './recovery/recovery.service';
import { ChangePassService } from './change-pass/change-pass.service';
import { NewCartService } from './cart/newcart.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { ProductsComponent } from './products/products.component';
import { AddToBagComponent } from './add-to-bag/add-to-bag.component';
import { HttpClientModule } from '@angular/common/http';
import { UserPComponent } from './user-profile/user.component';
import { UserPService } from './user-profile/user.service';
import { ProductService } from './products/product.service';
import { HomeService } from './home/home.service';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactUsService } from './contact-us/contact-us.service';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search/search.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutService } from './checkout/checkout.service';
import { TrackOrderComponent } from './track-order/track-order.component';
import { TrackOrderService } from './track-order/track-order.service';
import { MyOrderComponent } from './my-order/my-order.component';
import { MyOrderService } from './my-order/my-order.service';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { PharmacyService } from './pharmacy/pharmacy.service';
import { RegisterDeliverymanComponent } from './register-deliveryman/register-deliveryman.component';
import { RegisterDeliverymanService } from './register-deliveryman/register-deliveryman.service';
import { LoginDeliverymanComponent } from './login-deliveryman/login-deliveryman.component';
import { LoginDeliverymanService } from './login-deliveryman/login-deliveryman.service';
import { PartnersComponent } from './partners/partners.component';
import { PartnersService } from './partners/partners.service';
import { DeliverymanComponent } from './deliveryman/deliveryman.component';
import { DeliverymanService } from './deliveryman/deliveryman.service';
import { ApiService } from '../services/api.service';

import { MatExpansionModule } from '@angular/material/expansion';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    CadastroComponent,
    PageNotFoundComponent,
    ProductsComponent,
    CartComponent,
    AddToBagComponent,
    ChangePassComponent,
    RecoveryComponent,
    UserPComponent,
    ContactUsComponent,
    SearchComponent,
    CheckoutComponent,
    TrackOrderComponent,
    MyOrderComponent,
    PharmacyComponent,
    RegisterDeliverymanComponent,
    LoginDeliverymanComponent,
    PartnersComponent,
    DeliverymanComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatExpansionModule
  ],
  providers: [
    AuthService,
    CadastroService,
    LogoutService,
    AuthGuard,
    NewCartService,
    ChangePassService,
    RecoveryService,
    UserPService,
    ProductService,
    HomeService,
    ContactUsService,
    SearchService,
    CheckoutService,
    TrackOrderService,
    MyOrderService,
    ApiService,
    PharmacyService,
    RegisterDeliverymanService,
    LoginDeliverymanService,
    PartnersService,
    DeliverymanService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
