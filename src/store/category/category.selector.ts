import {createSelector} from "reselect";
import {CategoriesState} from "./category.reducer";
import {CategoryMap} from "./category.types";
import {RootState} from "../store";


const selectCategoryReducer = (state: RootState): CategoriesState => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

// Cant use ES6 Map here
// because Map.entries return iterator, which is not what I needed
// Object.entries returns array of keys and values, which is what I needed
// title.toLowerCase() is important! for routes
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap => categories.reduce(
    (records, {title, items}) => {
      records[title.toLowerCase()] = items;
      return records;
    }, {} as CategoryMap)
  );

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);

// export const selectCategoriesMap = createSelector(
//   [selectCategories],
//   (categories): Map<string, Array<CategoryItem>> => categories.reduce(
//     (records, {title, items}) =>
//       records.set(title, items)
//     , new Map)
// );
