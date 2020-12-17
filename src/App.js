// Libs
import React, { Component } from 'react';
import './App.css';
import './index.css';
import axios from 'axios'



class NetFlix extends Component {

  state = {
    movies: [],
    shows:[],

  }

async componentDidMount() {

const responseMovies = await axios.get( `${process.env.REACT_APP_API}/movies` ); 
 console.log(responseMovies.data);

 this.setState({
  movies: responseMovies.data
});

const movies = responseMovies.data.map((item) => {
  return {
    ...item,
    poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
  };
});
  
this.setState({
  movies: movies
});


 const responseShows = await axios.get(`${process.env.REACT_APP_API}/shows`);
 console.log(responseShows.data);
 
 this.setState({
   shows: responseShows.data

 })


const shows = responseShows.data.map((item) =>  {
  return {
    ...item,
    poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
  };
});

  this.setState({
  shows: shows
});

}
  render() {
    return (

      <div  className= "box-todo">
        <header>
          <div class="central">
            <div class="header-left">
            <a href=""><img src="https://tse1.mm.bing.net/th?id=OIP.0KsE19Qn10LqzoRiyMF7KAHaDb&pid=Api&P=0&w=406&h=189" /></a>
            <div class="menu-header">
              <ul>
                <li><a href="">lnicio</a></li>
                <li><a href="">Filmes</a></li>
                <li><a href="">Séries</a></li>
                <li><a href="">Favoritos</a></li>
                <li><a href="">Sugestões</a></li>
              </ul>
              </div>
            </div>

            <div class="header-right"> 
            <div>  
            <a href=""><img class="fot" src="https://cdn.iconscout.com/icon/free/png-256/google-search-555271.png" /></a>
            </div>
            </div>
            
            
            <div class="clear"></div>
          </div>  
        </header>

      <div className="conteiner">
       {this.state.movies.map((item,index) => (
        <div className="box_ content" key= {index}>
          <p className="netflixTitles">{item.title}</p>
          <img className="netflixImages" src={item.poster_path} />
          <p  className="let">{item.overview}</p>
       </div>
       ))}
      </div>
      <div className="conteiner">
      {this.state.shows.map((item,index) => (
        <div  className="box_ content" key= {index}>
          <p  className="netflixName">{item.name}</p>
          <img  className="netflixImages" src={item.poster_path} />
          <p  className="let">{item.overview}</p>
       </div>
       ))}
      </div>
      </div>
    );
  }
       } 
  
export default NetFlix;
