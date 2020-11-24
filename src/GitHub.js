import React, { Component } from 'react';
import axios from 'axios';

class GitHub extends Component {

    constructor() {
        super();
        this.getGitHubData('tatenda')
    }
}