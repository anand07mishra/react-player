import { AppstoreAddOutlined, HomeOutlined, LayoutOutlined, PlaySquareOutlined, SubnodeOutlined, VideoCameraOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Input, Layout, Menu, Switch } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import {
    BrowserRouter, NavLink, Route
} from 'react-router-dom';
import Home from './Home';
import './index.css';
import LiveChannels from './LiveChannels';
import Movies from './Movies';
import NewContent from './NewContent';
import WatchList from './WatchList';

const { Search } = Input;

const { Header, Content, Sider } = Layout;


class SiteLayout extends React.Component {
    state = {
        theme: 'dark',
        current: '1',
        collapsed: true,
    };

    changeTheme = value => {
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <BrowserRouter>
                    <Header className="header" style={{ padding: '0 0' }}>
                        <Menu theme={this.state.theme} mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item key="7">{React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: this.toggle,
                            })}</Menu.Item>
                            <Menu.Item key="1"><NavLink to="/">Home</NavLink></Menu.Item>
                            <Menu.Item key="2"><NavLink to="/NewContent">New Content</NavLink></Menu.Item>
                            <Menu.Item key="3"><NavLink to="/Movies">Movies</NavLink></Menu.Item>
                            <Menu.Item key="4"><NavLink to="/LiveChannels">Live Channels</NavLink></Menu.Item>
                            <Menu.Item key="5"><NavLink to="/WatchList">Watchlist</NavLink></Menu.Item>
                            <Menu.Item key="6"><Search
                                placeholder="Search"
                                style={{ paddingTop: '12px' }}
                                allowClear
                                enterButton
                                size="large"
                                onSearch={(value) => { console.log(value) }}
                            /></Menu.Item>
                        </Menu>
                    </Header>
                    <Layout>
                        <Sider width={200} className="site-layout-background" collapsedWidth={0} trigger={null} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                            <Menu
                                theme={this.state.theme}
                                onClick={this.handleClick}
                                style={{ height: '100%', borderRight: 0 }}
                                defaultOpenKeys={['sub1']}
                                selectedKeys={[this.state.current]}
                                mode="inline"
                                defaultSelectedKeys={['1']}
                            >
                                <Menu.Item key="sub1" icon={<HomeOutlined />} ><NavLink to="/">Home</NavLink></Menu.Item>
                                <Menu.Item key="sub2" icon={<AppstoreAddOutlined />}><NavLink to="/NewContent">New Content</NavLink></Menu.Item>
                                <Menu.Item key="sub3" icon={<PlaySquareOutlined />} ><NavLink to="/Movies">Movies</NavLink></Menu.Item>
                                <Menu.Item key="sub4" icon={<VideoCameraOutlined />}><NavLink to="/LiveChannels">Live Channels</NavLink></Menu.Item>
                                <Menu.Item key="sub6" icon={<SubnodeOutlined />}><NavLink to="/WatchList">Watchlist</NavLink></Menu.Item>
                                <Menu.Item key="sub7" icon={<LayoutOutlined />}><Switch
                                    checked={this.state.theme === 'dark'}
                                    onChange={this.changeTheme}
                                    checkedChildren="Dark"
                                    unCheckedChildren="Light"
                                /></Menu.Item>
                            </Menu>

                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Content
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                <Route exact path="/" component={Home} />
                                <Route exact path="/NewContent" component={NewContent} />
                                <Route exact path="/Movies" component={Movies} />
                                <Route exact path="/WatchList" component={WatchList} />
                                <Route exact path="/LiveChannels" component={LiveChannels} />
                            </Content>
                        </Layout>
                    </Layout>
                </BrowserRouter>
            </Layout>
        );
    }

}

export default SiteLayout;