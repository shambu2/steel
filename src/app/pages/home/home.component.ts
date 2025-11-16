import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from "../../components/hero/hero.component";
import { ProductsComponent } from "../../components/products/products.component";
import { WorkingComponent } from "../../components/working/working.component";
import { FeaturesComponent } from "../../components/features/features.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, HeroComponent, ProductsComponent, WorkingComponent, FeaturesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
