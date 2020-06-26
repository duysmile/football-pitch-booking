import React, { Component } from 'react';
import { Link } from "react-router-dom";
import home from '../SCSS/Head.module.scss';
import { Navbar, Nav } from 'react-bootstrap';
export default class Rent extends Component{
  render(){
    return(
      <div className={home.header + " container"}>
            <Navbar bg="#fff" expand="lg">
                <Navbar.Brand>
                    <img src={process.env.PUBLIC_URL + '/logo.jpg'} className={home.logo} alt=""></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className={home.navBar}>
                        <Nav className="mr-auto">
                            <Nav.Item className={home.navItem}>
                                <Link className={home.link} to='/'>Home</Link>
                            </Nav.Item>
                            <Nav.Item className={home.navItem}>
                                <Link className={home.link} to='/rent' style={{color:this.props.colorRent}}>Rent</Link>
                            </Nav.Item>
                            <Nav.Item className={home.navItem}>Around</Nav.Item>
                            <Nav.Item className={home.navItem}>Tournaments</Nav.Item>
                            <Nav.Item className={home.navItem}>Hired</Nav.Item>
                            <Nav.Item className={home.navButton}>
                                <Link className={home.link} to='/login' >
                                    <span className={home.button}>Login</span>
                                </Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
  }
}