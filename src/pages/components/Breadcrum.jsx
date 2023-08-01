import { RightOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';

const BreadcrumbPage = () => {
    return (
        <Breadcrumb
        separator={<RightOutlined />}
        style={{
        margin: '16px 0',
        }}
        >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default BreadcrumbPage