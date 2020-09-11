import GamesList from './gameslist.json';


class Store{
  constructor(){
    this.state = {
      GamesList : GamesList,
      gameId : '',
      characters: [],
    }
    this.componentDidMount()
  }

  
  saveStateToLocalStorage = () => {
    localStorage.setItem('stateComment', JSON.stringify(this.state))
  }

  componentDidMount(){
    console.log(this.state)
    const state = localStorage.getItem('stateComment')
    if (state) {
      this.state.characters = JSON.parse(state)
    }

    console.log(this.state)
  }

 getState = () =>{
  return this.state
}


 setCurrentGame = (game) =>{
      this.CurrentGame = game
 }
}

let storage = new Store()
     

export default storage;


