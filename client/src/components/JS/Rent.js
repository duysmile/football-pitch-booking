import React, { Component } from 'react';
import { Link } from "react-router-dom";
import home from '../SCSS/Head.module.scss';
import Navbar from '../layout/Navbar';
export default class Rent extends Component{
  render(){
    return(
      <Navbar colorRent="#ff3e81"/>
    )
  }
}