import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from '../layout/Navbar';
import cls from '../SCSS/Rent.module.scss';
import { List, Avatar, Input } from 'antd';
const { Search } = Input;

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}
export default class Rent extends Component{
  render(){
    return(
      <div>
        <Navbar colorRent="#ff3e81"/>
        <div className='container'>
        <Search className={cls.searchField}
                        placeholder="Field's name"
                        onKeyUp={this.onSearch} 
                        enterButton
                />
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
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={item => (
      <List.Item
        key={item.title}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />





        </div>
      </div>
    )
  }
}