import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewSectionComponent } from './overview-section/overview-section.component';
import { DataTablesComponent } from './data-tables/data-tables.component';
import { ChartsGraphsComponent } from './charts-graphs/charts-graphs.component';
import { AnimatedModalComponent } from './animated-modal/animated-modal.component';

const routes: Routes = [
  {
    path: '', 
    component: OverviewSectionComponent
  },
  {
    path: 'overview',
    component: OverviewSectionComponent
  },
  {
    path: 'data-tables',
    component: DataTablesComponent
  },
  {
    path: 'charts',
    component: ChartsGraphsComponent
  },
  {
    path: 'animated-modal',
    component: AnimatedModalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
