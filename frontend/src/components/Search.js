import React, { Component } from 'react';
import axios from 'axios';
import Dropdown from './dropDown';

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            author: "",
            source: "",
            date: "",
            doi: "",
            practice: "",
            claimed: "",
            evidence: "",
            state: "not moderated",
        };
    }
    Search(Searchinput){
        let postdate = {
            "title": Searchinput
        }
        axios
        // .post('//heroku link', postdate)
        // .then(res => {
        //   this.setState({
        //     articles: res.data
        //   })
        // })
        // .catch(err =>{
        //   console.log('Error from ShowArticlesList');
        // })
    };

    render(){
        //

        return (
            <div>
              //
            </div>
        );
    }
}