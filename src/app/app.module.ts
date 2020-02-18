import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactDetailComponent } from './pages/contact-detail/contact-detail.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { FilterComponent } from './cmps/filter/filter.component';
import { NavBarComponent } from './cmps/nav-bar/nav-bar.component';
import { ActionNavComponent } from './cmps/action-nav/action-nav.component';
import { LoginComponent } from './pages/login/login.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ContactEditComponent,
    ContactDetailComponent,
    ContactListComponent,
    ContactPreviewComponent,
    FilterComponent,
    NavBarComponent,
    ActionNavComponent,
    LoginComponent,
    TransferFundComponent,
    MoveListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
