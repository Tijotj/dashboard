import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesComponent } from './data-tables/data-tables.component';
import { ChartsGraphsComponent } from './charts-graphs/charts-graphs.component';
import { OverviewSectionComponent } from './overview-section/overview-section.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MatSortModule } from '@angular/material/sort';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StoreModule } from '@ngrx/store';
import { MatPaginatorModule } from '@angular/material/paginator';
import { pointsReducer } from './overview-section/store/cricket.reducer';
import { RouterModule } from '@angular/router';
import { AnimatedModalComponent } from './animated-modal/animated-modal.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    DataTablesComponent,
    ChartsGraphsComponent,
    OverviewSectionComponent,
    SidebarComponent,
    HeaderComponent,
    AnimatedModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSortModule,
    MatPaginatorModule,
    StoreModule.forRoot({points: pointsReducer}),
    RouterModule,
    FormsModule,
    CommonModule,
    ChartsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
