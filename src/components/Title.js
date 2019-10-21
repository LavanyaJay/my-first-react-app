import React , { Component } from "react";
/* class Title extends Component {
    render(){
        return <h1>Hi there!</h1> 
       }
} */
export default class Title extends Component{
    render(){
        return <h1>{this.props.content}</h1>
    }
};