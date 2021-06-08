import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  @Input() graphList: any[];
  private expectedGoal: any[] = [];
  private achievedGoal: any[] = [];
  private label: any[] = [];

  public lineChartData: ChartDataSets[] = [
    { data: this.expectedGoal, label: 'Meta esperada' },
    { data: this.achievedGoal, label: 'Atividades feitas' },
  ];
  public lineChartLabels: Label[] = this.label;

  public lineChartOptions: ChartOptions = {
    responsive: true,
    elements: {
      line: {
        tension: 0,
      },
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
          },
        },
      ],
    },
  };

  public lineChartColors: Color[] = [
    {
      borderColor: '#FFC42E',
      backgroundColor: 'transparent',
    },
    {
      borderColor: '#48DBDB',
      backgroundColor: 'transparent',
    },
  ];
  public lineChartLegend = false;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor() {}

  ngOnInit() {
    // console.log(this.graphList)
    this.graphList.map((o) => {
      this.expectedGoal.push(o.quantity);
      this.achievedGoal.push(o.completedQuantity);
      this.label.push(o.date);
    });
  }
}
