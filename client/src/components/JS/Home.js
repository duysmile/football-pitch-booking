import React from 'react';
import { Link } from "react-router-dom";
import cls from '../SCSS/Home.module.scss';
import { Navbar, Nav } from 'react-bootstrap';
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
                <div className={cls.navBar}>
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
                            <Link className={cls.link} to='/login' >
                                <span className={cls.button}>Login</span>
                            </Link>
                        </Nav.Item>
                       
                    </Nav>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
        <div className={cls.body1}>
            <div className="col-lg-6">
                <img className={cls.img1} src={process.env.PUBLIC_URL + '/Calendar.svg'}></img>
            </div>
            <div className="col-lg-5 header-title-section text-center text-lg-left mx-lg-auto align-items-lg-start">
                <p className={cls.headerSubtitle}>Pitching calendar</p>
                <h1 className={cls.headerTitle}>Quickly activities, convinent</h1>
                <p className={cls.headerTitleTest}>Description</p>
            </div>
            
        </div>
    </div>
    )
}