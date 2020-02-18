import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactDetailComponent } from './pages/contact-detail/contact-detail.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactResolver } from './services/resolvers/contact.resolver';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuardGuard } from './services/auth-guard.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'contacts', canActivate: [AuthGuardGuard], component: HomeComponent, children: [
      { path: '', pathMatch: 'full', component: ContactComponent },
      { path: 'new', component: ContactEditComponent },
      { path: 'edit/:id', component: ContactEditComponent, resolve: { contact: ContactResolver } },
      { path: ':id', component: ContactDetailComponent, resolve: { contact: ContactResolver } },
    ]
  },
  { path: "**", redirectTo: 'login' }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
