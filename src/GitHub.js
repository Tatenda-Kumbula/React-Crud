import React, { Component } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import { Media, Form, Button } from 'react-bootstrap';

class GitHub extends Component {

    constructor(){
        super();  
        this.state = {
            data: [],
            searchTerm:'',
            isLoading : false            

        }; 

        this.handleChange = this.handleChange.bind(this);  
        this.handleSubmit = this.handleSubmit.bind(this);  

    }

    componentDidMount(){
        //this.getGitHubData('greg');
    }	


    getGitHubData(_searchTerm){                
        axios.get("https://api.github.com/search/users?q="+_searchTerm)
            .then(res => {   
                this.setState({
                    isLoading : false, 
                    data: res.data.items                                  
                })  
                             
                console.log(res.data.items); 
            });             
    }   
