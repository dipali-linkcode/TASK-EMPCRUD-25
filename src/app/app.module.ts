import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { IndexedDbService } from './services/storage-.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    HomeComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [IndexedDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
