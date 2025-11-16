import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {
  stats = [
    {
      icon: '<lucide-icon name="building-2"></lucide-icon>',
      number: '2,500+',
      title: 'Registered Companies',
      subtitle: 'Verified businesses'
    },
    {
      icon: '👥',
      number: '15,000+',
      title: 'Active Users',
      subtitle: 'Industry professionals'
    },
    {
      icon: '📦',
      number: '50,000+',
      title: 'Products Listed',
      subtitle: 'Steel products available'
    },
    {
      icon: '📍',
      number: '150+',
      title: 'Cities Covered',
      subtitle: 'Across India'
    }
  ];
}
