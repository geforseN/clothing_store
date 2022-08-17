import React, {useEffect, useState} from 'react';
import '../../App.css';
import file from '../../data/categories.json'
import CategoryList from "../../components/category_list/category_list.component";
import {ICategory} from "../../ICategory";

const Home = () => {
  const [categories, setCategories] = useState<Array<ICategory>>([])

  useEffect(() => setCategories(file), [])

  return (
    <div className="App">
      <CategoryList categories={categories} />
    </div>
  );
}

export default Home;
