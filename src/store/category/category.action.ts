import {CategoryActionTypes, Category} from "./category.types";
import {Action, ActionWithPayload, withMatcher} from "../../utils/reducer/reducer.utils";

import {createAction} from "../../utils/reducer/reducer.utils";


export type FetchCategoriesStart = Action<CategoryActionTypes.FETCH_CATEGORIES_START>

export type FetchCategoriesSuccess = ActionWithPayload<CategoryActionTypes.FETCH_CATEGORIES_SUCCESS, Array<Category>>

export type FetchCategoriesFailed = ActionWithPayload<CategoryActionTypes.FETCH_CATEGORIES_FAILED, Error>


export const fetchCategoriesStart = withMatcher(() : FetchCategoriesStart =>
  createAction(CategoryActionTypes.FETCH_CATEGORIES_START)
);

export const fetchCategoriesSuccess = withMatcher((categories: Array<Category>): FetchCategoriesSuccess =>
  createAction(CategoryActionTypes.FETCH_CATEGORIES_SUCCESS, categories)
);

export const fetchCategoriesFailed = withMatcher((error: Error): FetchCategoriesFailed =>
  createAction(CategoryActionTypes.FETCH_CATEGORIES_FAILED, error)
);

