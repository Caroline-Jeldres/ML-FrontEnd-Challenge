/* eslint-disable no-unused-vars */
import { Anchor, Badge, Col, Input, Menu, Row } from "antd";
import { DownOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import locationSvg from "../../images/location.svg";
import Header_api from "../../api/Header_api";

const Header = () => {
  const [message, setMessage] = useState("");
  const { Search } = Input;
  const navigate = useNavigate();
  const onSearch = async (value) => {
    navigate(`/listado.mercadolibre.cl/${value}`);
  };
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  console.log("message", message);

  return (
    <Row className="row-header">
      <Col span={4}>
        <div className="div-location-logo">
          <a className="nav-logo" href="https://www.mercadolibre.cl" />
          <div className="nav-menu-item">
            <img src={locationSvg} />
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
        </div>
      </Col>
      <Col span={12}>
        <div className="div_first">
          <Search
            className="input_search"
            placeholder="Buscar productos, marcas y más..."
            style={{
              width: "100%",
            }}
            onSearch={onSearch}
            onChange={handleChange}
            defaultValue={message}
          />
        </div>
        <div className="div_second">
          {/* <Menu className="menu_top" mode="horizontal" items={items} />; */}
          <ul className="nav_center_area">
            <li>
              <a href="">
                Categorías <DownOutlined />
              </a>
            </li>
            <li>
              <a href="" target="_blank" rel="noopener noreferrer">
                Ofertas
              </a>
            </li>
            <li>
              <a href="" target="_blank" rel="noopener noreferrer">
                Historial
              </a>
            </li>
            <li>
              <Badge
                count="Nuevo"
              >
                <a href="" target="_blank" rel="noopener noreferrer">
                  Supermercado
                </a>
              </Badge>
            </li>
            <li>
              <a href="" target="_blank" rel="noopener noreferrer">
                Moda
              </a>
            </li>
            <li>
              <a href="" target="_blank" rel="noopener noreferrer">
                Vender
              </a>
            </li>
            <li>
              <a href="" target="_blank" rel="noopener noreferrer">
                Ayuda
              </a>
            </li>
          </ul>
        </div>
      </Col>
      <Col span={8}>
        <div className="content-disney">
          <div className="div_first">
            <a href="https://www.mercadolibre.cl/suscripciones/nivel-6#origin=banner-menu&me.flow=-1&me.bu=3&me.audience=all&me.content_id=MLC_BM_LOYALTY50__L1-5&me.component_id=banner_menu_web_ml&me.logic=user_journey&me.position=0&me.bu_line=26">
              <img src="https://http2.mlstatic.com/D_NQ_757831-MLA69342170755_052023-OO.webp" />
            </a>
          </div>
          <div className="div_second">
            <div className="div_rigth">
              <nav className="nav_rigth_area">
                <a href="">Crea tu cuenta</a>
                <a href="">Ingresa</a>
                <a href="">Mis compras</a>
                <a href="">
                  <ShoppingCartOutlined style={{ fontSize: "20px" }} />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default Header;
