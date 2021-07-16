import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Card, Input, Space, Rate, Select, DatePicker, Pagination } from 'antd';
import cls from '../SCSS/Rent.module.scss';
import '../SCSS/Rent.scss';
import ScrollToTop from 'react-scroll-up';
import { Row, Col } from 'antd';
import { CaretUpOutlined } from '@ant-design/icons';
import data from '../../city.json';

const { Option } = Select; 
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const city = Object.keys(data);
const district = Object.values(data);


let listData = []; //data get from database

export default class Rent extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      dataSearch: [],
      dataRender: [], //pagination
      district: [],
      districtSelect: '',
      citySelect: '',
      fieldName: '',
      rs: false
    }
    this.onSearch = this.onSearch.bind(this);
    this.pagination = this.pagination.bind(this);
    this.selectCity = this.selectCity.bind(this);
    this.selectDistrict = this.selectDistrict.bind(this);
    this.click = this.click.bind(this);
  }
  
  onSearch(e) {
    const text = e.target.value;
    this.setState({fieldName: text});
  }

  async componentDidMount() {
    const data = await (await axios.get('https://30ywk.sse.codesandbox.io/field')).data;
    const dataRender = data.slice(0,12);
    this.setState({data: data, dataRender: dataRender});
  }

  selectCity(e){
    this.setState({district: district[e], citySelect: city[e]})
  }

  selectDistrict(e){
    this.setState({districtSelect: e});
  }

  click(){
      const citySelect = this.state.citySelect;
      const disSelect = this.state.districtSelect;
      const name = this.state.fieldName;
      let newData = this.state.data.filter(function(x){
        return x.title.toLowerCase().indexOf(name.toLowerCase()) !== -1;
      })
      newData = newData.filter(function(x){
        return x.city.indexOf(citySelect) !== -1;
      })
      newData = newData.filter(function(x){
        return x.district.indexOf(disSelect) !== -1;
      })
      if(!newData.length){
        this.setState({rs: true});
      }else{
        this.setState({rs: false});
      }
      this.setState({dataRender:newData});
      
  }



  pagination(page,pagesize){
    const start = (page - 1) * 12;
    const end = page * 12;
    const data = this.state.dataSearch.slice(start,end);
    this.setState({dataRender: data});
  }
  
 
 
  render() {
    
    return (
        <div className='container'>
          <div className={cls.filter}>
            <Input placeholder="Field's name" className={cls.input} onKeyUp={this.onSearch}/> 
            <DatePicker style={{marginRight: 20, marginBottom: 20}}/>
            <div className={cls.hometown}>
              <Select defaultValue="City" className={cls.city} onChange={this.selectCity}>
                {
                  city.map((item, index) => 
                    
                      <Option key={index} value={index} className={cls.option}>{item}</Option>
 
                  )
                }
              </Select>
              <Select defaultValue="District" className={cls.city} onChange={this.selectDistrict}>
                {
                  this.state.district.map((item, index) => 

                    <Option value={item} className={cls.option}>{item}</Option>
                  
                  )
                }
              </Select>
            </div>
            <button className={cls.buttonSearch} onClick={this.click}>Search</button>
          </div>

            
          
          <ScrollToTop showUnder={160}>
            <CaretUpOutlined style={{ fontSize: '40px', color: '#ff3e81' }} />
          </ScrollToTop>
                {
                  this.state.rs && 
                  <p style={{marginLeft:30, fontSize:20}}>Found 0 result</p>
                }
              <Row>
                {this.state.dataRender.map((item, index) =>
                
                  <Col style={{ padding: '2rem' }} className={cls.col}>
                    <Card
                      key={index}
                      style={{ width: '100%' }}
                      cover={<img alt="example" src="https://static.vecteezy.com/system/resources/previews/000/182/533/non_2x/jumbotron-at-soccer-stadium-vector.jpg" />}
                    >
                      <h5>
                        {item.name}
                      </h5>
                      <Rate disabled defaultValue={2} style={{fontSize: '0.75rem'}} />
                      <p>
                       {item.timeStart} - {item.timeEnd}
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
              
              <Pagination className={cls.page} total={listData.length} pageSize={12} onChange={this.pagination} />
        </div>
    )
  }
}