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
import { CardDashboardComponent } from './card-dashboard/card-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LivraisonComponent,
    LivreurComponent,
    AchatComponent,
    DashboardComponent,
    CardDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
