import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';


@Component({
  selector: 'app-data-tables',
  templateUrl: './data-tables.component.html',
  styleUrl: './data-tables.component.css'
})
export class DataTablesComponent {
  totalItems = 2;
  pageSize = 2;
  currentPage = 0;
  pageItems = this.getData(this.currentPage);
  performersFlag = true;
  titleWinnersFlag = false;
  performers = [
    {team: 'IND', player: 'Virat', scores: 650, wickets: 0, catches: 15},
    {team: 'AUS', player: 'Cummins', scores: 300, wickets: 24, catches: 19},
    {team: 'SA', player: 'Aiden', scores: 460, wickets: 17, catches: 16},
    {team: 'PAK', player: 'Afridi', scores: 100, wickets: 29, catches: 19},
    {team: 'BAN', player: 'Shakeeb', scores: 400, wickets: 16, catches: 22}
  ];
  titleWinners = [
    {year: 2024, winner: 'IND', runnerUp: 'SA', mom: 'Bumrah'},
    {year: 2022, winner: 'ENG', runnerUp: 'PAK',mom: 'Butler'},
    {year: 2021,winner: 'AUS', runnerUp: 'NZ',mom: 'Mitchel'},
    {year: 2016, winner: 'WI', runnerUp: 'ENG', mom: 'Nocholas'},
    {year: 2014, winner: 'SL', runnerUp: 'IND', mom: 'Angelo'}
  ];
  sortedData = this.performers.slice();
  sortedData2 = this.titleWinners.slice();

  sortData(sort: Sort) {
    const data = this.performers.slice();

    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
    } else {
      this.sortedData = data.sort((a, b) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
  sortData2(sort: Sort) {
    const data = this.titleWinners.slice();

    if (!sort.active || sort.direction === '') {
      this.sortedData2 = data;
    } else {
      this.sortedData2 = data.sort((a, b) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
  getData(pageNum: number) {
    switch(pageNum) {
      case 0:
        this.performersFlag = true;
        this.titleWinnersFlag = false;
        break;
      case 1:
        this.performersFlag = false;
        this.titleWinnersFlag = true;
        break;
      default:
        this.performersFlag = true;
        this.titleWinnersFlag = false;
    }
    
  }
  pageChanged(event: any) {
    this.currentPage = event.pageIndex;
    this.getData(this.currentPage);
  }
}
