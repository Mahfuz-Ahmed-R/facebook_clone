import React, { useState, useEffect } from 'react';
import Slider from '../components/Slider'; // Ensure this is your custom slider/sidebar component
import SharingPost from '../components/SharingPost';
import Posts from '../components/Posts';
import { Layout, Grid } from 'antd';
import Navbar from '../components/NavBar';

const { Header, Sider, Content } = Layout;
const { useBreakpoint } = Grid;

const Home = () => {
  const screens = useBreakpoint(); // Use Ant Design's useBreakpoint hook
  const [collapsed, setCollapsed] = useState(false); // Default to expanded

  // Effect to control the collapsed state based on screen size
  useEffect(() => {
    if (screens.md) {
      setCollapsed(false); // Keep sidebar expanded on md and larger screens
    } else {
      setCollapsed(true); // Collapse on smaller screens
    }
  }, [screens.md]);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
      <Layout style={{ minHeight: "100vh" }}>
        {/* Sider: Sidebar Navigation */}
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={toggleCollapsed}
          className="sidebar"
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" 
              alt="Logo" 
              style={{ width: 40 }} 
            />
          </div>
          <Slider />
        </Sider>

        {/* Main Layout */}
        <Layout style={{ marginLeft: collapsed ? 80 : 200, transition: 'margin-left 0.2s' }}>
          {/* Header: Top Navigation */}
          <Header>
            <Navbar/>
          </Header>

          {/* Content: Scrollable Area */}
          <Content style={{ 
            padding: '16px', 
            backgroundColor: "#18191a", 
            height: 'calc(100vh - 64px)', 
            overflow: 'auto' 
          }}>
            <div className='d-flex flex-column justify-content-center align-items-center' style={{ 
              padding: 24, 
              background: "#18191a", 
              minHeight: '100%', 
              color: '#fff' 
            }}>
              {/* Example Routes */}
              

              {/* Additional Components */}
              <SharingPost />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
            </div>
          </Content>
        </Layout>
      </Layout>
  );
};

export default Home;
