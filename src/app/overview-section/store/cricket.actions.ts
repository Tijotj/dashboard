import { createAction } from '@ngrx/store';

export const pointsIND = createAction(
    '[Counter Component1] Increment'
);
export const pointsSA = createAction(
    '[Counter Component2] Increment'
);
export const pointsAUS = createAction(
    '[Counter Component3] Increment'
);
export const pointsNZ = createAction(
    '[Counter Component4] Increment'
);
export const pointsENG = createAction(
    '[Counter Component5] Increment'
);

/* export const team = createAction('[Counter Component] Decrement');
export const points = createAction('[Counter Component] Reset'); */