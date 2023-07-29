/* eslint-disable no-unused-vars */
import { Anchor, Col, Input, Menu, Row } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const { Search } = Input;
  const items = [
    {
      label: "Navigation One",
      key: "mail",
    },
    {
      label: "Navigation Two",
      key: "app",
      disabled: true,
    },
    {
      label: "Navigation Three - Submenu",
      key: "SubMenu",
      children: [
        {
          type: "group",
          label: "Item 1",
          children: [
            {
              label: "Option 1",
              key: "setting:1",
            },
            {
              label: "Option 2",
              key: "setting:2",
            },
          ],
        },
        {
          type: "group",
          label: "Item 2",
          children: [
            {
              label: "Option 3",
              key: "setting:3",
            },
            {
              label: "Option 4",
              key: "setting:4",
            },
          ],
        },
      ],
    },
    {
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      ),
      key: "alipay",
    },
  ];

  const itemUser = [
    {
      label: "Crea tu cuenta",
      key: "new_account",
    },
    {
      label: "Ingresa",
      key: "login",
    },
    {
      label: "Mis compras",
      key: "my_shopping",
    },
    {
      icon: <ShoppingCartOutlined />,
      key: "new_account",
    },
  ];
  return (
    <Row>
      <Col span={2}>
        <a className="nav-logo" href="https://www.mercadolibre.cl" />
        <div className="nav-menu-item">
          <a
            href="https://www.mercadolibre.cl/navigation/addresses-hub?go=https%3A%2F%2Fwww.mercadolibre.cl%2F"
            className="nav-menu-cp"
            data-js="cp"
            data-modal-action="true"
            aria-expanded="false"
            aria-haspopup="true"
          >
            <span className="nav-menu-cp-send">Ingresa tu</span>
            <span className="nav-menu-link-cp"> ubicación</span>
          </a>
        </div>
      </Col>
      <Col span={6}>
        <div className="div_first">
          <Search
            className="input_search"
            placeholder="Buscar productos, marcas y más..."
            // onSearch={onSearch}
            style={{
              width: "100%",
            }}
          />
        </div>
        <div className="div_second">
          <Anchor className="menu_top" direction="horizontal" items={items} />;
        </div>
      </Col>
      <Col>
        <div className="div_first">
          <a href="https://www.mercadolibre.cl/suscripciones/nivel-6#origin=banner-menu&me.flow=-1&me.bu=3&me.audience=all&me.content_id=MLC_BM_LOYALTY50__L1-5&me.component_id=banner_menu_web_ml&me.logic=user_journey&me.position=0&me.bu_line=26">
            <img src="https://http2.mlstatic.com/D_NQ_757831-MLA69342170755_052023-OO.webp" />
          </a>
        </div>
        <div className="div_second">
          <Menu className="menu_top" mode="horizontal" items={itemUser} />;
        </div>
      </Col>
    </Row>
  );
};
export default Header;
