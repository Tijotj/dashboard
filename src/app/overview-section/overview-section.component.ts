import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { pointsIND, pointsSA, pointsAUS, pointsENG, pointsNZ } from './store/cricket.actions';


@Component({
  selector: 'app-overview-section',
  templateUrl: './overview-section.component.html',
  styleUrl: './overview-section.component.css'
})
export class OverviewSectionComponent {
  points$: Observable<number>;
  constructor(private store: Store<{points: number}>) {
    this.points$ = store.select('points');
  }

  pointsIND() {
    this.store.dispatch(pointsIND());
  }
  pointsSA() {
    this.store.dispatch(pointsSA());
  }
  pointsAUS() {
    this.store.dispatch(pointsAUS());
  }
  pointsENG() {
    this.store.dispatch(pointsENG());
  }
  pointsNZ() {
    this.store.dispatch(pointsNZ());
  }
}
