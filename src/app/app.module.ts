import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { LivraisonComponent } from './livraison/livraison.component';
import { LivreurComponent } from './livreur/livreur.component';
import { AchatComponent } from './achat/achat.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LivraisonComponent,
    LivreurComponent,
    AchatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
