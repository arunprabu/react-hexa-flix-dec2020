import React, { Component } from 'react'

class TrendingShows extends Component {

  constructor(props){ // receiving props in class comp
    super(props); // must call super to get 'this' keyword
    console.log(this.props);
    this.state = {
      showsList: [
        { id: 1, name: 'Planet Earth', host: 'David Attenborough', isInWatchList: false },
        { id: 2, name: 'India Vs Aus Cricket', host: 'Ganguly', isInWatchList: false },
        { id: 3, name: 'Man Vs Wild', host: 'Bear Grylls', isInWatchList: false },
        { id: 4, name: 'Planet Earth 2', host: 'David Attenborough', isInWatchList: false }
      ]
    }
  }

  addToWatchlistHandler(index){
    console.log(index);

    // todo: using index find the exact item in showsList and change isInWatchlist
    this.setState({
      showsList: [
        { id: 1, name: 'Planet Earth', host: 'David Attenborough', isInWatchList: true },
        { id: 2, name: 'India Vs Aus Cricket', host: 'Ganguly', isInWatchList: false },
        { id: 3, name: 'Man Vs Wild', host: 'Bear Grylls', isInWatchList: false },
        { id: 4, name: 'Planet Earth 2', host: 'David Attenborough', isInWatchList: false }
      ]
    });
  }

  render() {

    // ideal place for you to write js -- looping 
    // ideal place for comp specific transformation in JSX

    let shows = null; 

    if(this.state.showsList && this.state.showsList.length > 0 ){
      shows = this.state.showsList.map( (show, index) => {
        return(
          <li className="list-group-item" key={index}>
            #{ show.id }  {show.name} - Hosted by: {show.host}
            <button type="button" className='btn btn-success float-right' 
              onClick={this.addToWatchlistHandler.bind(this, index)}>
              { show.isInWatchList? 'In Watchlist': 'Add to Watchlist '}
            </button>
          </li>
        )
      });
    }
    
    return (
      <div>
        <h2>Trending Shows | Lists and Keys Demo</h2>
        <ul className="list-group text-left">

         { /*  will do conditionals & looping */ }

         { this.state.showsList && this.state.showsList.length > 0 ?
            shows
          : 
            <div className='alert alert-danger'>No Trending Shows</div>
         }
        </ul>
      </div>
    )
  }
}

export default TrendingShows;
