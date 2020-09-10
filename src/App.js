import React,{useState} from 'react';
import logo from './logo.svg';
import moment from 'moment';
import './App.css';
import { Button } from 'antd';
import { DatePicker, Space } from 'antd';
import { Breadcrumb } from 'antd';
import { Input } from 'antd';
import TwitterIcon from "@material-ui/icons/Twitter";
import { HomeOutlined,CheckOutlined,TwitterOutlined,BellOutlined,ContactsOutlined,SettingOutlined   } from '@ant-design/icons';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
// import { Button } from 'antd';
import { Layout } from 'antd';
// import { Menu } from '@material-ui/core';
import { AppstoreOutlined, MailOutlined,LoginOutlined,LogoutOutlined  } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import ReactDOM from 'react-dom';


const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
;
const { RangePicker } = DatePicker;

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
}

function disabledDateTime() {
  return {
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  };
}

function disabledRangeTime(_, type) {
  if (type === 'start') {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
}


function App(){
  function sayHello() {
    alert('POSTED SUCCESSFULLY!!!');
  }
  return (
     <div className="App">
     
      {/* <Side /> */}
     {/* <Button type="primary">Button</Button> */}
    <Layout>
      <Header  style={{color:'lightblue', padding:'10px'}} >
        TWITTER
      <TwitterIcon  className="sidebar__twitterIcon" />
     <Avatar style={{float:'right'}} src='./twitter.png' /> 
    
  
  
       </Header>
      <Layout>
      {/* making the side portion now */}
      <Sider style={{background:'lightblue'}}> 
      <Menu 
      defaultSelectedKeys={['lets tweet']}
      mode="inline">
     
      <Menu.Item key="home">
      <HomeOutlined style={{ fontSize: '16px', color: '#08c' }} />
        HOME
        </Menu.Item>
        <Menu.Item key="lets tweet">
        
        <TwitterOutlined style={{ fontSize: '16px', color: '#08c' }}/>
        <Button type="primary" >
          POST A TWEET</Button>
        </Menu.Item>
        <Menu.Item key="Feed">
        <CheckOutlined style={{ fontSize: '16px', color: '#08c' }} />
          SEE WHATS HAPPENING
        </Menu.Item>
       
        <Menu.Item key="notifications">
        <BellOutlined style={{ fontSize: '16px', color: '#08c' }} />
        NOTIFICATIONS
        </Menu.Item>
       
        {/* <Menu.Item key="lets tweet">
          LETS TWEET
        </Menu.Item> */}
        <Menu.Item key="contact">
        <MailOutlined  style={{ fontSize: '16px', color: '#08c' }} />
        CONTACT US
        </Menu.Item>
        <SubMenu
        
         title={
          <span>
            {/* <MailOutlined /> */}
            <span>
            <SettingOutlined  style={{ fontSize: '16px', color: '#08c' }}/>
              SETTINGS</span>
          </span>
        } >
            <Menu.Item key="1">
            <LoginOutlined style={{ fontSize: '16px', color: '#08c' }}/>
              SWITCH ACCOUNT</Menu.Item>
            <Menu.Item key="2">
            <LogoutOutlined style={{ fontSize: '16px', color: '#08c' }}/>
              LOGOUT</Menu.Item>
          </SubMenu>
        </Menu> 
      
      </Sider>
      <Layout>
      <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
       
        <Breadcrumb.Item>MY POSTS</Breadcrumb.Item>
      </Breadcrumb>
     
      <div style={{backgroundColor:'#add8e6', padding:'10px', minHeight:'400px'}}>
      <Input style={{marginTop:'50px',minWidth:'10px',minHeight:'100px'}} placeholder="POST SOMETHING"/>
    
          <Button type="primary" >
          CHOOSE DATE </Button>
         
{/* 
    <Space direction="vertical" size={12}>
    <RangePicker />
    {/* <RangePicker showTime /> */}
   
  {/* </Space> */} 


  <Space direction="vertical" size={12}>
    {/* <DatePicker
      format="YYYY-MM-DD HH:mm:ss"
      disabledDate={disabledDate}
      disabledTime={disabledDateTime}
      showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
    /> */}
    {/* <DatePicker picker="month" disabledDate={disabledDate} /> */}
    {/* <RangePicker disabledDate={disabledDate} /> */}
    <RangePicker
      disabledDate={disabledDate}
      disabledTime={disabledRangeTime}
      showTime={{
        hideDisabledOptions: true,
        defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
      }}
      format="YYYY-MM-DD HH:mm:ss"
    />
  </Space>



      </div>
      {/* clicking on the post button will give a message of posted successfully */}
      <Button type="primary" style={{marginRight:'10px'}} onClick={sayHello} >
          POST </Button>
    </Content>
    <Footer style={{ textAlign: 'right' }}>Created by Tanusri Saha</Footer>
      </Layout>
      </Layout>
    </Layout>
    </div>
  );
}

export default App;
