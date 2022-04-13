import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { CadastroComponent } from './register/cadastro.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './guards/auth.guard';
import { ProductsComponent } from './products/products.component';
import { AddToBagComponent } from './add-to-bag/add-to-bag.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { UserPComponent } from './user-profile/user.component';

const appRoutes: Routes = [
    { path: 'produtos', component: ProductsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'adicionar', component: AddToBagComponent },
    { path: 'carrinho', component: CartComponent },
    { path: 'redefinir', component: ChangePassComponent },
    { path: 'recuperacao', component: RecoveryComponent },
    { path: 'usuario', component: UserPComponent },
    { path: '', component: HomeComponent },
    //     canActivate: [AuthGuard] 
    // },
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}