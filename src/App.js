import React from 'react';
import logo from './logo.svg';
import './App.css';
import LocalizedStrings from 'react-localization';

function App() {
  let strings = new LocalizedStrings({
 en:{
   how:"How do you want your egg today?",
   boiledEgg:"Boiled egg",
   softBoiledEgg:"Soft-boiled egg",
   choice:"How to choose the egg"
 },
 it: {
   how:"Come vuoi il tuo uovo oggi?",
   boiledEgg:"Uovo sodo",
   softBoiledEgg:"Uovo alla coque",
   choice:"Come scegliere l'uovo"
 }


  });


  return (
    <div className="App">
      <p>{strings.how}</p>
    </div>
  );
}

export default App;
