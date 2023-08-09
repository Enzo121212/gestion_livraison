import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Tableau de bord',  icon: 'dashboard', class: 'active' },
  { path: '/admin/article', title: 'Articles',  icon:'article', class: '' },
  { path: '/admin/livraison', title: 'Livraison',  icon:'two_wheeler', class: '' },
  { path: '/admin/ventes', title: 'Ventes',  icon:'shopping_cart', class: '' },
  { path: '/admin/achat', title: 'Achats',  icon:'euro_symbol', class: '' },
  { path: '/admin/livreur', title: 'Livreur',  icon:'people_alt', class: '' },
  { path: '/admin/logout', title: 'Deconnecter',  icon:'logout', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[] = [];


  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);

  }

  isActive(menuItem: any): boolean {
    console.log("ROUTE",this.router.url);
    return this.router.url === menuItem.path;

  }

}
