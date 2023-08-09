import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { VentesComponent } from './ventes/ventes.component';
import { AchatComponent } from './achat/achat.component';
import { LivreurComponent } from './livreur/livreur.component';
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'admin/article', component: ArticlesComponent },
  { path: 'admin/livraison', component: LivraisonComponent },
  { path: 'admin/ventes', component: VentesComponent },
  { path: 'admin/achat', component: AchatComponent },
  { path: 'admin/livreur', component: LivreurComponent }
  // Autres routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
