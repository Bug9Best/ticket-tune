import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  searchText: string = '';
  listConsert: any[] = [1, 2, 3, 4, 5, 6, 7]

  constructor() { }
  getConsert() { }
  search() { }
}
