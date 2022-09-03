import React, {FC} from 'react';

import DirectoryItem from "../directory_item/directory_item.component";

import {directoriesData as directories} from "../../data/categories";

import {CategoriesContainer} from "./directory_list.styles";


const DirectoryList: FC = () => (
  <CategoriesContainer>
    {directories.map(directory =>
      <DirectoryItem key={directory.id} directory={directory} />
    )}
  </CategoriesContainer>
);


export default DirectoryList;