import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-angular-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public salesData: any;

  constructor() {}

  ngOnInit(): void {
    this.initialSalesData();
  }

  private initialSalesData(): void {
    this.salesData = {
      labels: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
      ],
      datasets: [
        {
          label: 'Valor Total',
          backgroundColor: '#42A5F5',
          borderColor: '#7CB342',
          data: [
            120000,
            180000,
            87000,
            63500,
            285000,
            430000,
            120000,
            720000,
            250000,
            375000,
            405000,
            789000,
          ],
        },
      ],
    };
  }
}
