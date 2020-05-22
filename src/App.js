import React, {Component} from 'react';
import LocalizedStrings from 'react-localization';
// import { data } from './langaugeData';

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
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'en'
    }

    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  handleLanguageChange(e) {
    e.preventDefault();
    let lang = e.target.value;
    console.log(lang)
    this.setState(prevState => ({
      language: lang
    }))
  }

  render() {
    strings.setLanguage(this.state.language);
    return (
      <div>
        Change Language: <select onChange={this.handleLanguageChange}>
          <option value="en">En- English</option>
          <option value="it">It- Italian</option>
        </select>
        <br /><br />
        <p>{strings.boiledEgg}</p>
      </div>
    )
  }
}


export default App;
