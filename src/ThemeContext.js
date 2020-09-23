import React, {createContext, useState, Component} from 'react';


export const Theme = {
  dark : {
    background : '#000',
    color : '#FFF',
    divBackground : '#858585',
    divColor : '#acdeff'
  },

  light : {
    background :'#FFF',
    color : '#000',
    divBackground : '#FFF',
    divColor : '#0400ff'
  }
}

export const ThemeContext = React.createContext({
  theme: Theme.dark,
  toggleTheme: () => {},
});

