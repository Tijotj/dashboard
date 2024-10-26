import { createReducer, on } from '@ngrx/store';
import { pointsIND, pointsSA, pointsAUS, pointsENG, pointsNZ } from './cricket.actions';

/* export const pointsData = [
    {rank: 1, team: 'IND', points: 22},
    {rank: 2, team: 'SA', points: 20},
    {rank: 3, team: 'NZ', points: 18},
    {rank: 4, team: 'AUS', points: 16}
]; */

export const initialState = 0;

export const pointsReducer = createReducer(
    initialState,
    on(pointsIND, (state) => state +2),
    on(pointsSA, (state) => state + 1),
    on(pointsENG, (state) => state + 4),
    on(pointsNZ,(state) => state + 3),
    on(pointsAUS, (state) => state + 6)
);
