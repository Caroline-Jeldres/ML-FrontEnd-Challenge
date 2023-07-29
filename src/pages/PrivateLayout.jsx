import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import BreadcrumbPage from './components/Breadcrum';
import Header from './components/Header';

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
      <BreadcrumbPage />
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
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default PrivateLayout;
