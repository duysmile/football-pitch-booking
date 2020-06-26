import React from 'react';
import { Link } from "react-router-dom";
import cls from '../SCSS/Head.module.scss';
import clsB from '../SCSS/Body.module.scss';
import { Navbar, Nav } from 'react-bootstrap';
import '../SCSS/Home.scss'

export default function Home(){
    return(
    <div>
        <div className={cls.header}>
        <Navbar bg="#fff" expand="lg">
                <Navbar.Brand>
                    <img src={process.env.PUBLIC_URL + '/logo.jpg'} className={cls.logo} alt=""></img>
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
        <div className="container d-lg-flex">
            <div className="col-lg-6 header-img-section d-lg-flex align-items-lg-center mb-5">
                <img className={cls.img1} src={process.env.PUBLIC_URL + '/Calendar.svg'} alt=""></img>
            </div>
            <div className="col-lg-5 header-title-section text-center text-lg-left mx-lg-auto align-items-lg-start">
                <p className={cls.headerSubtitle}>Booking football pitch</p>
                <h1 className={cls.headerTitle}>Simple Operation, Quickly.</h1>
                <p className={cls.headerTitleTest}>Booking in the easiest way, it is very convenient and accordant for everyone with a few simple steps</p>
            </div>
        </div>
        <div className='container-fluid strategy-section-container'>
            <div className='container strategy-section d-md-flex flex-wrap'>
                <div className='stragegy-card-section my-5 col-md-6 col-lg-3'>
                    <div className={clsB.strategyCard}>
                        <div className='strategy-card-icon'>
                            <img src={process.env.PUBLIC_URL + '/calendar.png'} className={clsB.imgBody} width={95}></img>
                        </div>
                        <h2 className={clsB.titleStrategy + ' my-3'}>
                            Booking
                        </h2>
                        <p className={clsB.subTitleStrategy}>
                            You only need find your field and book one time.
                        </p>
                    </div>
                </div>
                <div className='stragegy-card-section my-5 col-md-6 col-lg-3'>
                    <div className={clsB.strategyCard}>
                        <div className='strategy-card-icon'>
                            <img src={process.env.PUBLIC_URL + '/correct.png'} className={clsB.imgBody} width={95}></img>
                        </div>
                        <h2 className={clsB.titleStrategy + ' my-3'}>
                            Verified
                        </h2>
                        <p className={clsB.subTitleStrategy}>
                            You have to verify your account by email you registed
                        </p>
                    </div>
                </div>
                <div className='stragegy-card-section my-5 col-md-6 col-lg-3'>
                    <div className={clsB.strategyCard}>
                        <div className='strategy-card-icon'>
                            <img src={process.env.PUBLIC_URL + '/money.png'} className={clsB.imgBody} width={95}></img>
                        </div>
                        <h2 className={clsB.titleStrategy + ' my-3'}>
                            Deposit
                        </h2>
                        <p className={clsB.subTitleStrategy}>
                            You must deposit 50% of your price and this is the last step
                        </p>
                    </div>
                </div>
                <div className='stragegy-card-section my-5 col-md-6 col-lg-3'>
                    <div className={clsB.strategyCard}>
                        <div className='strategy-card-icon'>
                            <img src={process.env.PUBLIC_URL + '/reminder.png'} className={clsB.imgBody} width={95}></img>
                        </div>
                        <h2 className={clsB.titleStrategy + ' my-3'}>
                            Remind
                        </h2>
                        <p className={clsB.subTitleStrategy}>
                            We will remind two hours before taking your fields
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}