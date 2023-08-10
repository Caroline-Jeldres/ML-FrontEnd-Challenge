import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const PrivateLayout = () => {
  const { Content, Footer } = Layout;

  return (
    <Layout className="layout">
      <Layout.Header
        className='header'
      >
        <Header />
      </Layout.Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <div
          className="site-layout-content"
        >
          <Outlet/>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        ML Chanllenge ©2023 Created by Caroline Jeldres
      </Footer>
    </Layout>
  );
};
export default PrivateLayout;
