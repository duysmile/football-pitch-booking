import React from 'react';
import { Carousel, Button } from 'antd';
import { Link } from "react-router-dom";
import cls from '../SCSS/Home.module.scss';

export default function Home(){
    return(
    <div>
        <Carousel autoplay>
            <div className={cls.car1}>
                <h4>.</h4>
            </div>
            
            <div className={cls.car2}>
                <h4>.</h4>
            </div>
            <div className={cls.car3}>
                <h4>.</h4>
            </div>
            <div className={cls.car4}>
                <h4>.</h4>
            </div>
        </Carousel>
        <div className={cls.lastCar}>
            <Button type="primary" danger>
                <Link to='/login' >For Rent</Link>
            </Button>
            <Button type="primary" style={{marginLeft: 50}}>
                <Link to='/rent'>Rent</Link>
                </Button>
        </div>
  </div>
    )
}