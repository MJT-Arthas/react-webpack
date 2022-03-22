import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Link, matchRoutes, Outlet, useLocation } from "react-router-dom";

import { routers } from "./routers/index";
import React, { useState, useEffect } from "react";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default function AppLayout() {
  const location = useLocation();
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState<string[]>([]);
  const [defaultOpenKeys, setDefaultOpenKeys] = useState<string[]>([]);
  const [isInit, setIsInit] = useState<Boolean>(false);

  useEffect(() => {
    const routes = matchRoutes(routers, location.pathname); // 返回匹配到的路由数组对象，每一个对象都是一个路由对象
    const pathArr: string[] = [];
    let OpenKeys: string[] = [];
    if (routes !== null) {
      console.log("routes", routes[1].pathname.split("/")[1]);
      OpenKeys = [`/${routes[1].pathname.split("/")[1]}`];
      routes.forEach((item) => {
        const path = item.route.path;
        if (path) {
          pathArr.push(path);
        }
      });
    }

    setDefaultSelectedKeys(pathArr);
    setDefaultOpenKeys(OpenKeys);
    console.log("OpenKeys", OpenKeys);

    setIsInit(true);
  }, [location.pathname]);
  if (!isInit) {
    return null;
  }
  return (
    <>
      <Layout>
        <Header className="header">
          <div className="logo" />

          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">Arthas</Menu.Item>
            {/* <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item> */}
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              //   {/* 根据url地址实现选中高亮 */}
              selectedKeys={defaultSelectedKeys}
              openKeys={defaultOpenKeys}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu key="/user" icon={<UserOutlined />} title="用户管理">
                <Menu.Item key="/user/list">
                  <Link to="/user/list">用户列表</Link>
                </Menu.Item>
                <Menu.Item key="/user/detail">用户信息</Menu.Item>
              </SubMenu>
              {/* <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                <Menu.Item key="5">空的</Menu.Item>
      
              </SubMenu> */}
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}
