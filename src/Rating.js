import React, { Component } from 'react';
import { lolosStar, loloStarOutline } from 'react-icons/io'

class Rating extends Component {
    
   constructor(props){ 
    super(props);
    this.state = {rating: this.props.rating};
}

handleClick(ratingValue){
    this.setState({rating:ratingValue})
}