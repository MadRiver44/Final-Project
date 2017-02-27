import { createAction } from 'redux-actions';
import * as types from './types';

export const setExerciseModalVisbility = (visible) => (
  createAction(types.SET_EXERCISE_VISIBILITY)(visible);
);
