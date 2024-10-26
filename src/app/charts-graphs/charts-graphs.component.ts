import { Component } from '@angular/core';

@Component({
  selector: 'app-charts-graphs',
  templateUrl: './charts-graphs.component.html',
  styleUrl: './charts-graphs.component.css'
})
export class ChartsGraphsComponent {
  public chartData = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81],
        fill: false,
        borderColor: 'blue',
        tension: 0.1,
      },
    ],
  };
  public chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };
}
