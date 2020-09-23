import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Nav from './Nav';
import Game from './Game';
import SelectedComment from './SelectedComment';
import {StoreContext, store} from './StoreContext';
import {ThemeContext, Theme} from './ThemeContext';


  class App extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggleTheme = () => {
        this.setState(state => ({
          theme:
            state.theme === Theme.dark
              ? Theme.light
              : Theme.dark,
        }));
      };
      // L’état local contient aussi la fonction de mise à jour donc elle va
      // être passée au fournisseur de contexte
      this.state = {
        GamesList : [],
        GamesListFilter : [],
        theme: Theme.light,
        toggleTheme: this.toggleTheme,
      };
    }
    
    render() {
        return (
          <Router>
          <ThemeContext.Provider value={this.state}>
              <Nav />
              <Switch>
              <StoreContext.Provider>
                <Route exact path="/">
                <Redirect to="/home" />
                </Route>
                <Route path="/home" exact component={Home}/>
                <Route path="/about" component={About} />
                <Route path="/game/:gameId"  component={Game} />
                <Route path="/comment/:commentId"  component={SelectedComment} />
                </StoreContext.Provider>
              </Switch>
              </ThemeContext.Provider>
          </Router>
        );
      }

}
export default App;
