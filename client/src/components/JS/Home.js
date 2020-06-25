import React from 'react';
import { Link } from "react-router-dom";
import cls from '../SCSS/Home.module.scss';
import { Navbar, Nav, Button } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

export default function Home(){
    return(
    <div>
        <div className={cls.header}>
        <Navbar bg="#fff" expand="lg">
                <Navbar.Brand>
                    <img src={process.env.PUBLIC_URL + '/logo.jpg'} className={cls.logo} style={{marginLeft: 30}}></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <div style={{marginLeft:100}}>
                    <Nav className="mr-auto">
                        <Nav.Item className={cls.navItem}>
                            <Link className={cls.link} to='/'>Home</Link>
                        </Nav.Item>
                        <Nav.Item className={cls.navItem}>
                            <Link className={cls.link} to='/rent'>Rent</Link>
                            </Nav.Item>
                        <Nav.Item className={cls.navItem}>Around</Nav.Item>
                        <Nav.Item className={cls.navItem}>Tournaments</Nav.Item>
                        <Nav.Item className={cls.navItem}>Hired</Nav.Item>
                        <Nav.Item className={cls.navButton}>
                            <Link className={cls.link} to='/login'>
                                <span className={cls.button}>Login</span>
                            </Link>
                        </Nav.Item>
                       
                    </Nav>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    </div>
    )
}