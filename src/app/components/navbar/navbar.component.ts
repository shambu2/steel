import { Component } from '@angular/core';

import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isOpen = false;
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
