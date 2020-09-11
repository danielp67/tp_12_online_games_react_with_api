import React, {Component} from 'react';



class Filter extends Component {
  constructor(props) {
    super(props);
      this.state = {
        gamesData : this.props.gamesData
    }
}

  filterByIndexDesc = () =>{
    const byIndex = (a,b) => b.rank - a.rank

    let mapped = [...this.state.gamesData];
    mapped = mapped.sort(byIndex);
  
    this.props.newSetState(mapped);
  }


  filterByIndexAsc = () =>{
    const byIndex = (a,b) => a.rank - b.rank

    let mapped = [...this.state.gamesData];
    mapped = mapped.sort(byIndex);

    this.props.newSetState(mapped);
  }


  
  filterByRateAsc = () =>{
    const byRate = (a,b) => a.rate - b.rate
    let mapped = [...this.state.gamesData];
    mapped = mapped.sort(byRate);

    this.props.newSetState(mapped);
      
  }

  filterByRateDesc = () =>{
    const byRate = (a,b) => b.rate - a.rate
    let mapped = [...this.state.gamesData];
    mapped = mapped.sort(byRate);

    this.props.newSetState(mapped);
      
  }

  filterByNameAsc = () =>{
    const byName = (a,b) => {
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
  }
  let mapped = [...this.state.gamesData];
  mapped = mapped.sort(byName);

  this.props.newSetState(mapped);
      
  }

  filterByNameDesc = () =>{
    const byName = (a,b) => {
      if(a.name > b.name) { return -1; }
      if(a.name < b.name) { return 1; }
      return 0;
  }
  let mapped = [...this.state.gamesData];
  mapped = mapped.sort(byName);

  this.props.newSetState(mapped);
      
  }

  filterByDateAsc = () =>{
    const byDate = (a,b) => a.releaseDate - b.releaseDate
    let mapped = [...this.state.gamesData];
    mapped = mapped.sort(byDate);

    this.props.newSetState(mapped);
  }

  filterByDateDesc = () =>{
    const byDate = (a,b) => b.releaseDate - a.releaseDate
    let mapped = [...this.state.gamesData];
    mapped = mapped.sort(byDate);

    this.props.newSetState(mapped);
      
  }


  render() {
  
    return (
       <div className="form row mx-5 my-5">
        <form>
          <div className="form-group">Trier par Popularité
          <button className="btn btn-success mx-2  my-2" type="button" onClick={this.filterByIndexAsc}>↓</button>
          <button className="btn btn-danger mx-2 my-2" type="button" onClick={this.filterByIndexDesc} >↑</button>
          </div>  
          <div className="form-group">Trier par Nom 
          <button className="btn btn-success mx-2  my-2" type="button" onClick={this.filterByNameAsc}>↓</button>
          <button className="btn btn-danger mx-2 my-2" type="button" onClick={this.filterByNameDesc} >↑</button>
          </div>  
          <div className="form-group">Trier par Date 
          <button  className="btn btn-success mx-2 my-2" type="button"  onClick={this.filterByDateAsc} >↓</button>
          <button  className="btn btn-danger mx-2 my-2" type="button"  onClick={this.filterByDateDesc} >↑</button>
          </div>  
          <div className="form-group">Trier par Note 
          <button  className="btn btn-success mx-2 my-2" type="button" onClick={this.filterByRateAsc} >↓</button>
          <button  type="button" className="btn btn-danger mx-2 my-2" onClick={this.filterByRateDesc} >↑</button>
          </div>  
          <button  className="btn btn-info mx-2 my-2" type="button" onClick={this.filterByIndexAsc} >Trier par Défaut</button>
          <div className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Rechercher un jeu" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
          </div>  
        </form>
      </div>  
    );
  }

}

export default Filter;
