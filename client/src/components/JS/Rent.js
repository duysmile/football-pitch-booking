import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card, Input, Space, Rate, Select, DatePicker, Button } from 'antd';
import axios from 'axios';
import cls from '../SCSS/Rent.module.scss';
import '../SCSS/Rent.scss';
import ScrollToTop from 'react-scroll-up';
import { Row, Col } from 'antd';
import { CaretUpOutlined } from '@ant-design/icons';

const { Option } = Select; 
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    id: '1',
    href: 'https://ant.design',
    title: `Thanh Long Field`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      '7:00AM - 10:00PM',
    content:
      '',
  });
}
let city = [];
export default class Rent extends Component {
  constructor() {
    super();
    this.onSearch = this.onSearch.bind(this);
  }
  onSearch(e) {
    let text = e.target.value;
    console.log(text);
  }
   componentDidMount(){

    axios.get('https://iszbz.sse.codesandbox.io/city')
    .then(function (res) {
      // handle success
      city = Object.keys(res.data);
    console.log(city);
    })
    
  }
  render() {
    return (
      <div>
        <div className='container'>
          <div className={cls.filter}>
            <Input placeholder="Field's name" className={cls.input}/>
            <DatePicker style={{marginRight: 20, marginBottom: 20}}/>
            <div className={cls.hometown}>
              <Select defaultValue="City" className={cls.city}>
                {
                  city.map((item, index) =>
                  <Option value={item} className={cls.option}>{item}</Option>
                 
                )}
              </Select>
              <Select defaultValue="District" className={cls.city}>
                <Option value="Zhejiang" className={cls.option}>Binh Thanh</Option>
                <Option value="Jiangsu" className={cls.option}>Thu Duc</Option>
              </Select>
            </div>
            <button className={cls.buttonSearch}>Search</button>
          </div>

            
          
          <ScrollToTop showUnder={160}>
            <CaretUpOutlined style={{ fontSize: '40px', color: '#ff3e81' }} />
          </ScrollToTop>
          
              <Row>
                {listData.map((item, index) =>
                
                  <Col style={{ padding: '2rem' }} className={cls.col}>
                    <Card
                      key={index}
                      style={{ width: '100%' }}
                      cover={<img alt="example" src="https://static.vecteezy.com/system/resources/previews/000/182/533/non_2x/jumbotron-at-soccer-stadium-vector.jpg" />}
                    >
                      <h5>
                        {item.title}
                      </h5>
                      <Rate disabled defaultValue={2} style={{fontSize: '0.75rem'}} />
                      <p>
                        {item.description}
                      </p>
                      <div style={{ width: '100%' }}>
                        <Link className={cls.button} to={`/rent/` + `${item.id}`}>
                          Hire
                        </Link>
                      </div>
                    </Card>
                  </Col>
           
                )}
              </Row>
              
        </div>
      </div>
    )
  }
}