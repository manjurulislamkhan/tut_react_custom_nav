import MainMenuVertical from "../components/MainMenuVertical";
import SearchBar from "../components/SearchBar";
import { MenuItem } from "../data/menuItems";
import MainScreen from "../screens/MainScreen"


import { ReactNode } from 'react';

export enum ComponentKeys {
  None,
  MainScreen,
  MainMenuVertical,
  SearchBar
 
}

type ComponentProps = {
  [key in ComponentKeys]: (...args: any[]) => ReactNode;
};



export const ComponentMap: ComponentProps = {
  [ComponentKeys.None]: () => null,
  [ComponentKeys.MainScreen]: () => <MainScreen />,
  [ComponentKeys.MainMenuVertical]: ({menuItems}) => <MainMenuVertical menuItems={menuItems}/>,
  [ComponentKeys.SearchBar]: ({getSearchResults, placeholder}) => <SearchBar getSearchResults={getSearchResults} placeholder={placeholder}/>,

};
