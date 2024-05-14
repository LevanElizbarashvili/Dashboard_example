import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-chart',
  standalone: true,
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('myChart') private chartRef!: ElementRef;
  private myChart: Chart | undefined;

  constructor() {
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    this.myChart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: '#007bff',
            tension: 0,
            backgroundColor: 'transparent',
            borderWidth: 4,
            pointBackgroundColor: '#007bff',
          },
        ],
      },
    });
  }
}
