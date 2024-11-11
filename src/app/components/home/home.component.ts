import { Component } from '@angular/core';
import { DashboardComponent } from '../shared/dashboard/dashboard.component';
import { HistoricComponent } from "../shared/historic/historic.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DashboardComponent, HistoricComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
