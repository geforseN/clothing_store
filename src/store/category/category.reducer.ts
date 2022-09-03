import {AnyAction} from "redux";

import {Category} from "./category.types";
import {fetchCategoriesFailed, fetchCategoriesStart, fetchCategoriesSuccess} from "./category.action";


export type CategoriesState = {
  readonly categories: Array<Category>
  readonly isLoading: boolean
  readonly error: Error | null
}

export const categoriesInitialState: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
}

export const categoriesReducer = (
  state: CategoriesState = categoriesInitialState,
  action = {} as AnyAction
): CategoriesState => {
  if (fetchCategoriesStart.match(action)) {
    return {...state, isLoading: true};
  }
  if (fetchCategoriesSuccess.match(action)) {
    return {...state, isLoading: false, categories: action.payload};
  }
  if (fetchCategoriesFailed.match(action)) {
    return {...state, isLoading: false, error: action.payload};
  }

  return state;
};
