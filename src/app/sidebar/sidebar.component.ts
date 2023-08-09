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
  { path: '/admin/article', title: 'Articles',  icon:'person', class: '' },
  { path: '/admin/livraison', title: 'Livraison',  icon:'content_paste', class: '' },
  { path: '/admin/ventes', title: 'Ventes',  icon:'library_books', class: '' },
  { path: '/admin/achat', title: 'Achats',  icon:'bubble_chart', class: '' },
  { path: '/admin/livreur', title: 'Livreur',  icon:'location_on', class: '' },
  { path: '/admin/logout', title: 'Deconnecter',  icon:'notifications', class: '' },
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
