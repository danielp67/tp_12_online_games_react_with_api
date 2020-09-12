import GamesList from './gameslist.json';


class Store{
  constructor(){
    this.state = {
      GamesList : GamesList,
      gameId : '',
      characters: [],
      permittedValues : [],
      searchGame :[]
    }
    this.componentDidMount()
    this.filterByName()
   
    
   console.log(this.state)
  }

  
  saveStateToLocalStorage = () => {
    localStorage.setItem('stateComment', JSON.stringify(this.state))
  }

  filterByName(){
    for (let i = 0; i < this.state.GamesList.length; i++){
      this.state.permittedValues[i] = this.state.GamesList[i]["name"];
   }
    }


    setName(value){
     
        this.state.searchGame = value;
    }

    filterName(){
      let filterName=[]
      this.state.GamesList = GamesList
      console.log(this.state.searchGame)
      if(this.state.searchGame){
        for (let i = 0; i < this.state.GamesList.length; i++){
          if(this.state.GamesList[i]["name"] == this.state.searchGame){

            filterName.push(this.state.GamesList[i])
          }
         
        }
      console.log(filterName)
      this.state.GamesList = filterName
    }
        return this.state.GamesList
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


