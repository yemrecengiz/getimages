import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import "./App.css";
import axios from "axios";
import ImageList from "./images/ImageList";

class App extends Component{
  state ={
    appsearch:' ',
    images:[]
  }

  onSearchImage = async (search) =>{
    
    const result = await axios.get('https://api.unsplash.com/search/photos',{
      params:{
        query: search
      },
      headers:{
        Authorization:'Client-ID kut_4vHziUNcq_S0gu16dgqkHA7SDBWqgerEzJYrbxM'
      }
    });
    this.setState({
      // appsearch:search,
      images:result.data.results
    });
  }

  render(){
    return(
      <div className="app-container">
        <SearchBar onSearchImage={this.onSearchImage}/>
        <ImageList images={this.state.images}/>
        {/* <h3>{this.state.appsearch}</h3> */}
      </div>
    )
  };
};

export default App;
