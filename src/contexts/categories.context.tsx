import {createContext, useEffect, useState} from "react";

import {getCategoriesAndDocuments} from "../utils/firebase/firebase.utils";
import {ICategory} from "../ICategory";

export const CategoriesContext = createContext({
  categoriesMap: [],
})

export const CategoriesProvider = ({children}: any)  => {
  const [categoriesMap, setCategoriesMap] = useState<ICategory | {}>({});
  const value = {categoriesMap};

  useEffect(() => {
    const getCategoriesMap = async () => {
      const map = await getCategoriesAndDocuments()
      console.log(map)

      /* {
      *  hats: [
      *         {
      *           id: Number,
      *           imageUrl: String,
      *           name: String,
      *           price: Number,
      *         },
      *         {...},
      *          ... ,
      *         {...}
      *        ],
      *  jackets: [{...}, ..., {...}],
      *
      *  }
      * */
      setCategoriesMap(map);
    }
    getCategoriesMap();
  }, [])
  return (
    // @ts-ignore value
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};


export interface product {
  id: number
  name: string
  imageUrl: string
  price: number
}

export interface cartItem extends product {
  quantity : number
}