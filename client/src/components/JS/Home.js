import React, { Component } from 'react';
import { Carousel, Button } from 'antd';
import '../CSS/Home.css';

export default function Home(){
    return(
    <div>
        <Carousel autoplay>
            <div className="car-1">
                <h4>.</h4>
            </div>
            
            <div className="car-2">
                <h4>.</h4>
            </div>
            <div className="car-3">
                <h4>.</h4>
            </div>
            <div className="car-4">
                <h4>.</h4>
            </div>
        </Carousel>
        <div className="last-car">
            <Button type="primary" danger >For Rent</Button>
            <Button type="primary" style={{marginLeft: 50}}>Rent</Button>
        </div>
  </div>
    )
}