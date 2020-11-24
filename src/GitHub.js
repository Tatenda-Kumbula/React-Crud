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
