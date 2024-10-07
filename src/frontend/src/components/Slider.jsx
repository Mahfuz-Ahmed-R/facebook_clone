import React from 'react'
import {
    HomeOutlined,
    InfoCircleOutlined,
    PhoneOutlined,
    PlusCircleOutlined,
  } from '@ant-design/icons';
  import { Menu } from 'antd';
  import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <div>
    <Menu theme='dark' mode='inline' defaultSelectedKeys={['home']}>
      <Menu.Item key='home' icon={<HomeOutlined />}>
        <Link to='/'>Mahfuz Ahmed</Link>
      </Menu.Item>
      <Menu.Item key='add-post' icon={<PlusCircleOutlined />}>
        <Link to='/add-post'>Memories</Link>
      </Menu.Item>
      <Menu.Item key='about' icon={<InfoCircleOutlined />}>
        <Link to='/about'>About</Link>
      </Menu.Item>
      <Menu.Item key='contact' icon={<PhoneOutlined />}>
        <Link to='/contact'>Contact</Link>
      </Menu.Item>
    </Menu>
    </div>
  )
}

export default Slider
