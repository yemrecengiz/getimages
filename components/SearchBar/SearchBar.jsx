import React, { Component } from 'react';
import "./SearchBar.css";

class SearchBar extends Component{
    state = {
        search:'',
    };
    constructor(){
        super();
        this.inputChanged = this.inputChanged.bind(this);

    }
    
    inputChanged = event => {
        //this.props.onSearchImage(event.target.value)
        this.setState({
            search:event.target.value
        });

    }
    searchImage = (e) => {

        this.props.onSearchImage(this.state.search);
    }
    render(){

        return (
            <div className="ui input search-bar-container">
                <input onKeyPress={(e) => {
                    if(e.key === 'Enter'){
                        this.searchImage();
                    }
                }} onChange={this.inputChanged} type="text" placeholder="Ara..."/>
                <button onClick={this.searchImage} className="ui icon button">
                    <i className="search icon"></i>
                </button>
            </div>
        )
    }  
}

export default SearchBar;