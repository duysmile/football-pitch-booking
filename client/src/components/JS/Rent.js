import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from '../layout/Navbar';
import cls from '../SCSS/Rent.module.scss';
import '../SCSS/Rent.scss';
import ScrollToTop from 'react-scroll-up';
import { List, Avatar, Input, Space, Select} from 'antd';
import { CaretUpOutlined, StarOutlined } from '@ant-design/icons';
const { Search } = Input;
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
export default class Rent extends Component{
  constructor(){
    super();
    this.onSearch = this.onSearch.bind(this);
  }
  onSearch(e){
    let text = e.target.value;
    console.log(text);
  }
  render(){
    return(
      <div>
        <div className='container'>
          <div className={cls.filter}>
            <Search className={cls.searchField}
                            placeholder="Field's name"
                            onKeyUp={this.onSearch} 
                            enterButton
                    />
            
          </div>
        <ScrollToTop showUnder={160}>
            <CaretUpOutlined style={{ fontSize: '40px', color: '#ff3e81' }}/>
        </ScrollToTop>
        <List
    className={cls.pagina}
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={listData}
    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[
          <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <List.Item.Meta
          // avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {
          <Link className={cls.link} to= {`/rent/` + `${item.id}`}>
            <span className={cls.button}>Hire</span>
          </Link>
        }
        
      </List.Item>
    )}
  />





        </div>
      </div>
    )
  }
}