import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-dashboard',
  imports: [MatToolbarModule, MatTabsModule, RouterOutlet],
  templateUrl: './main-dashboard.html',
  styleUrl: './main-dashboard.scss'
})
export class MainDashboard {

  constructor(private router: Router) {}

  onTabChange(event: any) {
    // Navigate to the selected tab's route
    this.router.navigate([event.tab.textLabel]);
  }
}
