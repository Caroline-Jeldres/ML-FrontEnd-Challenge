/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useCallback, useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import {
  DownOutlined,
  HeartOutlined,
  LeftOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Button,
  Carousel,
  Col,
  Divider,
  Dropdown,
  Input,
  Layout,
  Rate,
  Row,
  Space,
  Statistic,
  Tag,
} from "antd";
import { Content } from "antd/es/layout/layout";
import useDetailItem from "../Utils/useDetailItem";
import { useEffect } from "react";
import useResult from "../Utils/useResult";
import Header_api from "../api/Header_api";
import Return from "../images/return.svg";
import Shield from "../images/shield.svg";
import Medal from "../images/medal.svg";

const DetailsItems = () => {
  const { dataDetail, description } = useDetailItem();
  const [dataResult, setDataResult] = useState();
  const [memory, setMemory] = useState();
  const [selectImg, setSelectImg] = useState("");
  const [soldQuantity, setSoldQuantity] = useState("");
  const [selectedMemory, setSelectedMemory] = useState();
  const [color, setColor] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const [quantitySelected, setQuantitySelected] = useState({
    label: "1 Unidad",
    key: 1,
  });
  const [valueThermometer, setValueThermometer] = useState();
  const [anotherOption, setAnotherOption] = useState();
  const [marca, setMarca] = useState();
  const [model, setModel] = useState();
  const [medidas, setMedidas] = useState();

  const getData = useCallback(async () => {
    await Header_api.search(dataDetail?.title, {
      limit: 40,
      offset: 0,
    })
      .then((response) => {
        const { data } = response;
        const filterDataResult = data?.results.filter(
          (item) => item.id === dataDetail?.id
        );
        setDataResult(filterDataResult[0]);
        setAnotherOption(data?.results[0]);
      })
      .catch((error) => console.log("error", error));
  }, [dataDetail]);

  useEffect(() => {
    getData();
  }, [getData]);

  const initialData = useCallback(async () => {
    const url = dataDetail?.pictures[0]?.url;
    const ram = dataDetail?.attributes.filter(
      (item) => item.id === "INTERNAL_MEMORY"
    );
    const color = dataDetail?.attributes.filter((item) => item.id === "COLOR");
    const filterMarca = dataDetail?.attributes.filter(
      (item) => item.id === "BRAND"
    );
    const filterModel = dataDetail?.attributes.filter(
      (item) => item.id === "MODEL"
    );

    dataDetail?.attributes.map((item) => {
      if (item.id === "DEPTH") {
        dataDetail?.attributes.map((elem) => {
          if (elem.id === "HEIGHT") {
            dataDetail?.attributes.map((element) => {
              if (element.id === "HEIGHT") {
                setMedidas({
                  depth: item.value_name,
                  height: elem.value_name,
                  width: element.value_name,
                });
              }
            });
          }
        });
      }
    });

    setSelectImg(url);
    setMemory(ram[0]);
    setColor(color[0]);
    setSelectedMemory(memory?.value_name);
    setSelectedColor(color?.value_name);
    setMarca(filterMarca[0]);
    setModel(filterModel[0]);
  }, [dataDetail, memory]);

  useEffect(() => {
    initialData();
  }, [initialData]);

  const rangoVendido = useCallback(() => {
    switch (dataDetail?.sold_quantity) {
      case 5:
        setSoldQuantity("+ 5 ");
        break;
      case 25:
        setSoldQuantity("+ 25 ");
        break;
      case 50:
        setSoldQuantity("+ 50 ");
        break;
      case 100:
        setSoldQuantity("+ 100 ");
        break;
      case 150:
        setSoldQuantity("+ 150 ");
        break;
      case 200:
        setSoldQuantity("+ 200 ");
        break;
      case 250:
        setSoldQuantity("+ 250 ");
        break;
      case 500:
        setSoldQuantity("+ 500 ");
        break;
      case 5000:
        setSoldQuantity("+ 5000 ");
        break;
      case 50000:
        setSoldQuantity("+ 50000 ");
        break;
      default:
        break;
    }
  }, [dataDetail?.sold_quantity]);

  const termometro = useCallback(() => {
    switch (dataResult?.seller.seller_reputation.level_id) {
      case "5_green":
        setValueThermometer(5);
        break;
      case "4_green":
        setValueThermometer(4);
        break;
      case "3_green":
        setValueThermometer(3);
        break;
      case "2_green":
        setValueThermometer(2);
        break;
      case "1_green":
        setValueThermometer(1);
        break;

      default:
        break;
    }
  }, [dataResult?.seller.seller_reputation.level_id]);

  useEffect(() => {
    rangoVendido();
  }, [rangoVendido]);

  useEffect(() => {
    termometro();
  }, [termometro]);

  let discount = null;
  if (dataDetail?.original_price) {
    const percentaje =
      ((Number(dataDetail?.price) / Number(dataDetail?.original_price)) * 100 -
        100) *
      -1;
    if (Math.round(percentaje) !== 0) {
      discount = Math.round(percentaje);
    }
  }

  let discountAnother = null;
  if (anotherOption?.original_price) {
    const percentaje =
      ((Number(anotherOption?.price) / Number(anotherOption?.original_price)) *
        100 -
        100) *
      -1;
    if (Math.round(percentaje) !== 0) {
      discountAnother = Math.round(percentaje);
    }
  }

  console.log("dataDetail", dataDetail);
  console.log("dataResult", dataResult);
  const items = [
    { label: "1 Unidad", key: 1 },
    { label: "2 unidades", key: 2 },
    { label: "3 unidades", key: 3 },
    { label: "4 unidades", key: 4 },
    { label: "5 unidades", key: 5 },
    { label: "6 unidades", key: 6 },
  ];

  const onClickIconSort = () => {
    const upClass = "toggle-up";
    const downClass = "toggle-down";
    var square = document.querySelector(".icon_sort");

    if (~square.className.indexOf(downClass)) {
      square.className = square.className.replace(downClass, upClass);
    } else {
      square.className = square.className.replace(upClass, downClass);
    }
  };

  const onclickSort = ({ key }) => {
    const filter = items.filter((item) => item.key === Number(key));
    setQuantitySelected(filter[0]);
  };

  return (
    <div className="body_result_search">
      <Row>
        <Col span={24} id="section-1">
          <ul>
            <li>
              <span>Búsquedas relacionadas:</span>
            </li>
          </ul>
        </Col>
      </Row>
      <Layout>
        <Layout>
          <Row className="row_sorted">
            <Col className="col_sorted">
              <span className="span">Ordenar por</span>
            </Col>
          </Row>
          <Content style={{ background: "#fff" }}>
            <Row className="content_list_products">
              <Col flex="859px">
                <Row>
                  <Col span={14} className="col_img_products">
                    <Row>
                      <Col span={3}>
                        <div
                          direction="vertical"
                          size="middle"
                          className="space_img_product"
                        >
                          {dataDetail?.pictures.map((item) => {
                            return (
                              <div
                                key={item.id}
                                className={`ant-space-item ${
                                  item.url === selectImg ? "active" : ""
                                }`}
                              >
                                <div
                                  className="div_img_product "
                                  onMouseOver={() => {
                                    setSelectImg(item.url);
                                  }}
                                >
                                  <img
                                    key={item.id}
                                    src={item.url}
                                    alt={item.id}
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </Col>
                      <Col span={21}>
                        <div className="col_img_central">
                          <div className="div_img">
                            <ReactImageMagnify
                              {...{
                                smallImage: {
                                  alt: "product",
                                  isFluidWidth: true,
                                  src: selectImg,
                                },
                                largeImage: {
                                  src: selectImg,
                                  width: 1000,
                                  height: 1000,
                                },
                                className: "img_products",
                                imageClassName: "small_img",
                                enlargedImageContainerClassName: "big_img",
                                lensStyle: {
                                  width: "70%",
                                },
                              }}
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={8}>
                    <Row justify="space-between" align="middle">
                      <Col>
                        <Breadcrumb
                          separator="|"
                          style={{
                            margin: "16px 0",
                          }}
                        >
                          <Breadcrumb.Item>
                            {dataDetail?.condition === "new"
                              ? "Nuevo"
                              : "Usado"}
                          </Breadcrumb.Item>
                          <Breadcrumb.Item>
                            {soldQuantity} vendidos
                          </Breadcrumb.Item>
                        </Breadcrumb>
                      </Col>
                      <Col className="like_product">
                        <HeartOutlined />
                      </Col>
                    </Row>
                    <Row>
                      <Col className="title_item">
                        <h2>{dataDetail?.title}</h2>
                      </Col>
                      <Col className="col_rate">
                        <Rate disabled defaultValue={2} />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Statistic
                          className="origin_price"
                          style={{
                            visibility: discount ? "visible" : "hidden",
                          }}
                          value={dataDetail?.original_price}
                          prefix="$"
                          groupSeparator="."
                        />
                      </Col>
                    </Row>
                    <Row className="row_price">
                      <Col>
                        <Statistic
                          className="price_details"
                          value={dataDetail?.price}
                          prefix="$"
                          groupSeparator="."
                        />
                      </Col>
                      {discount && (
                        <Col>
                          <Statistic
                            className="discount_details"
                            value={discount}
                            suffix="% OFF"
                            groupSeparator="."
                          />
                        </Col>
                      )}
                    </Row>
                    <Row className="row_installments">
                      <Col>
                        <p className="p_detail">en</p>
                      </Col>
                      <Col>
                        <Statistic
                          className="installments"
                          value={dataResult?.installments?.amount}
                          prefix={`${dataResult?.installments?.quantity} x $`}
                          groupSeparator="."
                          precision={0}
                        />
                      </Col>
                      <Col>
                        <p className="interes_detail">sin interés</p>
                      </Col>
                    </Row>
                    <Row>
                      <span className="medios_pago">
                        Ver los medios de pago
                      </span>
                    </Row>
                    <Row>
                      <Col>
                        <span className="memory_label">{memory?.name} :</span>
                      </Col>
                      <Col>
                        <span className="memory">{memory?.value_name}</span>
                      </Col>
                    </Row>
                    <div className="space_memory">
                      {memory?.values.map((item) => {
                        return (
                          <div
                            key={item.id}
                            className={`ant-space-item ${
                              item.name === selectedMemory ? "active" : ""
                            }`}
                          >
                            <div
                              className="div_memory "
                              onMouseOver={() => {
                                setSelectedMemory(item.name);
                              }}
                            >
                              <p>{item.name}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <Row>
                      <Col>
                        <span className="memory_label">{color?.name} :</span>
                      </Col>
                      <Col>
                        <span className="memory">{color?.value_name}</span>
                      </Col>
                    </Row>
                    <div className="space_memory">
                      {color?.values.map((item) => {
                        return (
                          <div
                            key={item.id}
                            className={`ant-space-item ${
                              item.name === selectedColor ? "active" : ""
                            }`}
                          >
                            <div
                              className="div_memory "
                              onMouseOver={() => {
                                setSelectedColor(item.name);
                              }}
                            >
                              <p>{item.name}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <a href="#caracteristicas"> Ver características</a>
                  </Col>
                </Row>

                {/* <Row>
                  <Col>
                    <span hidden>recomendación</span>
                  </Col>
                </Row>
                <Divider /> */}
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Row id="caracteristicas">
                  <Col className="contenedor_section">
                    <Divider />
                    <h2>
                      Características de {marca?.value_name} {model?.value_name}
                    </h2>
                    <Row>
                      <Col>
                        <div className="content_img_component">
                          <img
                            decoding="async"
                            src="https://http2.mlstatic.com/storage/catalog-technical-specs/images/assets/vectorial/cellphone_size_v3.svg"
                            className="ui-pdp-image ui-vpp-image-component"
                          />
                        </div>
                      </Col>
                      <Col className="col_caract">
                        <div className="content_div_detail">
                          {dataDetail?.attributes.map((item) => {
                            if (item.id === "DISPLAY_SIZE") {
                              return (
                                <span key={item.id}>
                                  Tamaño de la pantalla:{" "}
                                  <strong>{item.value_name}</strong>
                                </span>
                              );
                            }
                            return null;
                          })}

                          <span>
                            ({medidas?.height} xx {medidas?.width} xx{" "}
                            {medidas?.depth})
                          </span>
                        </div>
                        <div className="ui-vpp-discrete-bar ui-vpp-highlighted-specs__discrete-bar__discrete">
                          <div className="ui-vpp-discrete-bar__bar ui-vpp-discrete-bar__bar--base">
                            <span className="ui-vpp-discrete-bar__bar__interval"></span>
                            <span className="ui-vpp-discrete-bar__bar__interval"></span>
                            <span className="ui-vpp-discrete-bar__bar__interval"></span>
                            <span className="ui-vpp-discrete-bar__bar__interval ui-vpp-discrete-bar__bar__interval--highlighted"></span>
                            <span className="ui-vpp-discrete-bar__bar__interval"></span>
                          </div>
                          <div className="ui-vpp-discrete-bar__description">
                            <span className="ui-vpp-discrete-bar__description__label">
                              <p className="ui-pdp-color--BLACK ui-pdp-size--XXSMALL ui-pdp-family--REGULAR">
                                PEQUEÑO
                              </p>
                            </span>
                            <span className="ui-vpp-discrete-bar__description__label">
                              <p className="ui-pdp-color--BLACK ui-pdp-size--XXSMALL ui-pdp-family--REGULAR">
                                GRANDE
                              </p>
                            </span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col>
                        <div className="content_img_component">
                          <img
                            decoding="async"
                            src="https://http2.mlstatic.com/storage/catalog-technical-specs/images/assets/vectorial/cellphone_size_v3.svg"
                            className="ui-pdp-image ui-vpp-image-component"
                          />
                        </div>
                      </Col>
                      <Col className="col_caract">
                        <div className="content_div_detail">
                          <span style={{ marginTop: "5px" }}>
                            Memoria interna: <strong>{selectedMemory}</strong>
                          </span>
                        </div>
                      </Col>
                      <Col>
                        <div className="content_img_component">
                          <img
                            decoding="async"
                            src="https://http2.mlstatic.com/storage/catalog-technical-specs/images/assets/vectorial/fingerprint.svg"
                            className="ui-pdp-image ui-vpp-image-component"
                          />
                        </div>
                      </Col>
                      <Col className="col_caract">
                        <div className="content_div_detail">
                          {dataDetail?.attributes.map((item) => {
                            if (
                              item.id === "WITH_FACIAL_RECOGNITION" &&
                              item.value_name === "Sí"
                            ) {
                              return (
                                <span key={item.id}>
                                  Desbloqueo:{" "}
                                  <strong>Reconocimiento facial</strong>
                                </span>
                              );
                            }
                            return null;
                          })}
                        </div>
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col>
                        <div className="content_img_component">
                          <img
                            decoding="async"
                            src="https://http2.mlstatic.com/storage/catalog-technical-specs/images/assets/vectorial/nfc.svg"
                            className="ui-pdp-image ui-vpp-image-component"
                          />
                        </div>
                      </Col>
                      <Col className="col_caract">
                        <div className="content_div_detail">
                          {dataDetail?.attributes.map((item) => {
                            if (item.id === "WITH_NFC") {
                              return (
                                <span key={item.id}>
                                  Con NFC: <strong>{item.value_name}</strong>
                                </span>
                              );
                            }
                            return null;
                          })}
                        </div>
                      </Col>
                    </Row>
                    <br />
                    <div className="more_caract">
                      <span>
                        Más características <DownOutlined />
                      </span>
                    </div>
                    <Divider />
                  </Col>
                </Row>
                {description && (
                  <Row>
                    <Col className="contenedor_section">
                      <Divider />
                      <h2>Descripción</h2>
                      <div className="div_description">
                        <span>{description}</span>
                      </div>
                    </Col>
                  </Row>
                )}
              </Col>
              <Col flex="309px" className="col_compra">
                <div className="contenedor_compra">
                  <span className="title">Envío gratis a todo el país</span>
                  <p className="subtitle">
                    Conoce los tiempos y las formas de envío.
                  </p>
                  <div className="location">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#3483fa"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                          stroke="#3483fa"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                        <path
                          d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                          stroke="#3483fa"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                    <p>Calcular cuándo llega</p>
                  </div>
                  <div className="contenedor_tienda_oficial">
                    <p className="oficial_store">
                      {dataResult?.official_store_name
                        ? "Tienda oficial"
                        : "Vendido por"}{" "}
                      <a>
                        {dataResult?.official_store_name ||
                          dataResult?.seller.nickname}
                      </a>{" "}
                    </p>
                    <p className="total_ventas">+5mil ventas</p>
                  </div>
                  <span className="stock">Stock disponible</span>
                  <Row className="row_sorted">
                    <Col className="col_sorted">
                      <span className="span">Cantidad: </span>
                      <Dropdown
                        trigger="click"
                        overlayClassName="quamtity_dropdown"
                        menu={{
                          items,
                          selectable: true,
                          defaultSelectedKeys: [quantitySelected?.key],
                          onClick: onclickSort,
                        }}
                      >
                        <Button
                          className="btn_dropdown"
                          type="link"
                          onClick={onClickIconSort}
                        >
                          {/* <Space> */}
                          <span className="span">
                            {quantitySelected?.label}
                          </span>
                          <DownOutlined className="icon_sort toggle-down" />
                          {/* </Space> */}
                        </Button>
                      </Dropdown>
                    </Col>
                    <Col className="unidad_disponible">
                      <p>(10 disponible)</p>
                    </Col>
                  </Row>
                  <Button className="btn_compra">Comprar ahora</Button>
                  <Button className="btn_carrito">Agregar al carrito</Button>
                  <Row className="media__title">
                    <Col>
                      <img
                        className="img_media__title"
                        src={Return}
                        alt="return"
                      />
                    </Col>
                    <Col>
                      <p className="p_media__title">
                        <a
                          data-testid="action-modal-link"
                          className="ui-pdp-action-modal__link"
                          href="https://articulo.mercadolibre.cl/noindex/freeReturn/fashion?itemId=MLC1408674049&amp;quantity=1&amp;new_version=true&amp;modal=false&amp;controlled=true"
                        >
                          Devolución gratis.
                        </a>
                        Tienes 30 días desde que lo recibes.
                      </p>
                    </Col>
                  </Row>
                  <Row className="media__title">
                    <Col>
                      <img
                        className="img_media__title"
                        src={Shield}
                        alt="return"
                      />
                    </Col>
                    <Col>
                      <p className="p_media__title">
                        <a
                          target="_blank"
                          href="https://www.mercadolibre.cl/compra-protegida"
                          rel="noreferrer"
                        >
                          Compra Protegida
                        </a>
                        , recibe el producto que esperabas o te devolvemos tu
                        dinero.
                      </p>
                    </Col>
                  </Row>
                  <Row className="media__title">
                    <Col>
                      <TrophyOutlined
                        style={{
                          color: "rgba(0, 0, 0, 0.55)",
                          fontSize: "15px",
                          marginRight: "10px",
                        }}
                      />
                    </Col>
                    <Col>
                      <p className="p_media__title">
                        <a
                          data-testid="action"
                          target="_blank"
                          href="https://www.mercadolibre.cl/mercado-puntos"
                          rel="noreferrer"
                        >
                          Mercado Puntos
                        </a>
                        . Sumas 200 puntos.
                      </p>
                    </Col>
                  </Row>
                </div>

                <div className="contenedor_seller">
                  <h2 className="component__title">
                    Información sobre el vendedor
                  </h2>
                  {dataResult?.seller.seller_reputation.power_seller_status && (
                    <div className="title">
                      <img src={Medal} />
                      <div className="contenedor_p">
                        <p className="p_1">
                          MercadoLider{" "}
                          {
                            dataResult?.seller.seller_reputation
                              .power_seller_status
                          }
                        </p>
                        <p className="p_2">¡Es uno de los mejores del sitio!</p>
                      </div>
                    </div>
                  )}
                  <ul
                    aria-hidden="true"
                    className="ui-thermometer"
                    value={valueThermometer}
                  >
                    <li className="ui-thermometer__level ui-thermometer__level--1"></li>
                    <li className="ui-thermometer__level ui-thermometer__level--2"></li>
                    <li className="ui-thermometer__level ui-thermometer__level--3"></li>
                    <li className="ui-thermometer__level ui-thermometer__level--4"></li>
                    <li className="ui-thermometer__level ui-thermometer__level--5"></li>
                  </ul>
                  <Row className="description_seller">
                    <Col className="col_seller">
                      <h2>+ 1000</h2>
                      <p>Ventas en los últimos 60 días</p>
                    </Col>
                    <Col className="col_seller border">
                      <img
                        decoding="async"
                        src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/message-positive.svg"
                        alt=""
                      />
                      <p>Brinda buena atención</p>
                    </Col>
                    <Col className="col_seller">
                      <img
                        decoding="async"
                        src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/time-positive.svg"
                      />
                      <p>Entrega sus productos a tiempo</p>
                    </Col>
                  </Row>
                  <a
                    href="https://perfil.mercadolibre.cl/USER+07"
                    target="_blank"
                    className="ui-pdp-media__action ui-box-component__action"
                    rel="noreferrer"
                  >
                    Ver más datos de este vendedor
                  </a>
                </div>
                <div className="contenedor_another_option">
                  <div className="component__title">
                    <h2>Otras opciones de compra</h2>
                  </div>
                  <Divider style={{ margin: "14px 0 10px 0" }} />
                  <Row className="tag_row">
                    <Col>
                      <Tag>Llega mañana</Tag>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Statistic
                        className="origin_price_another"
                        style={{
                          visibility: discountAnother ? "visible" : "hidden",
                        }}
                        value={anotherOption?.original_price}
                        prefix="$"
                        groupSeparator="."
                      />
                    </Col>
                  </Row>
                  <Row className="row_price_another">
                    <Col>
                      <Statistic
                        className="price_another"
                        value={anotherOption?.price}
                        prefix="$"
                        groupSeparator="."
                      />
                    </Col>
                    {discountAnother && (
                      <Col>
                        <Statistic
                          className="discount_another"
                          value={discountAnother}
                          suffix="% OFF"
                          groupSeparator="."
                        />
                      </Col>
                    )}
                  </Row>
                  <ul className="ul_another">
                    <li>
                      <div>
                        {anotherOption?.installments?.quantity} cuotas de{" "}
                        <Statistic
                          className="installments"
                          value={anotherOption?.installments?.amount}
                          prefix="$"
                          groupSeparator="."
                          precision={0}
                        />{" "}
                        sin interés
                      </div>
                    </li>
                    <li>Llega gratis mañana</li>
                  </ul>
                  <div className="contenedor_tienda_oficial_another">
                    <p className="oficial_store">
                      {dataResult?.official_store_name
                        ? "Tienda oficial"
                        : "Vendido por"}{" "}
                      <a>
                        {anotherOption?.official_store_name ||
                          anotherOption?.seller.nickname}
                      </a>{" "}
                    </p>
                    <p className="total_ventas">+5mil ventas</p>
                  </div>
                  <Row justify="space-between">
                    <Col span={11}>
                      <Button className="btn_compra">Comprar ahora</Button>
                    </Col>
                    <Col span={11}>
                      <Button className="btn_carrito">
                        Agregar al carrito
                      </Button>
                    </Col>
                  </Row>
                  <Divider />
                  <a
                    href="https://www.mercadolibre.cl/motorola-moto-g53-5g-6128/p/MLC22944194/s?pdp_filters=category:MLC1055"
                    className="more_options"
                  >
                    {" "}
                    Ver más opciones desde{" "}
                    <Statistic
                      className="price_from"
                      value={dataDetail?.price}
                      prefix="$"
                      groupSeparator="."
                    />
                  </a>
                </div>
                <div className="contenedor_medios_pago">
                  <h2 className="component__title">Medios de pago</h2>
                  <span className="subtitle">Tarjetas de crédito</span>
                  <p className="subtitle_p">¡Paga en hasta 6 cuotas!</p>
                  <div className="div_credito">
                    <img
                      decoding="async"
                      src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg"
                      className="ui-pdp-image ui-pdp-payment-icon"
                      alt="Visa"
                    />
                    <img
                      decoding="async"
                      src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg"
                      className="ui-pdp-image ui-pdp-payment-icon"
                      alt="Mastercard"
                    />
                    <img
                      decoding="async"
                      src="https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg"
                      className="ui-pdp-image ui-pdp-payment-icon"
                      alt="American Express"
                    />
                    <img
                      decoding="async"
                      src="https://http2.mlstatic.com/storage/logos-api-admin/751ea930-571a-11e8-9a2d-4b2bd7b1bf77-m.svg"
                      className="ui-pdp-image ui-pdp-payment-icon"
                      alt="Diners"
                    />
                  </div>
                  <span className="subtitle">Tarjetas de débito</span>
                  <div className="div_debito">
                    <img
                      decoding="async"
                      src="https://http2.mlstatic.com/storage/logos-api-admin/312238e0-571b-11e8-823a-758d95db88db-m.svg"
                      className="ui-pdp-image ui-pdp-payment-icon"
                      alt="Visa Débito"
                    />
                    <img
                      decoding="async"
                      src="https://http2.mlstatic.com/storage/logos-api-admin/157dce60-571b-11e8-95d8-631c1a9a92a9-m.svg"
                      className="ui-pdp-image ui-pdp-payment-icon"
                      alt="Mastercard Débito"
                    />
                    <img
                      decoding="async"
                      src="https://http2.mlstatic.com/storage/logos-api-admin/3ba729e0-f3a0-11eb-9984-b7076edb0bb7-m.svg"
                      className="ui-pdp-image ui-pdp-payment-icon"
                      alt="Redcompra"
                    />
                  </div>
                  <Divider />
                  <a
                    href="https://articulo.mercadolibre.cl/noindex/services/MLC1408674049/payments?new_version=true&modal=false&newIndex=true"
                    className="more_options"
                  >
                    Conoce otros medios de pago
                  </a>
                </div>
              </Col>
            </Row>
            <Divider />
            <Row>
              <Col flex="859px">
                <Row>
                  <Col span={24} className="row_others">
                    <div className="contenedor_preguntas">
                      <h2 className="content_title">Preguntas</h2>
                      <h3 className="content_subtitle">¿Qué quieres saber?</h3>
                      <div className="content_ul">
                        <ul>
                          <li>
                            <div>
                              <a
                                className="ui-pdp-action-modal__link andes-button andes-button--quiet andes-button--medium ui-pdp-questions__link"
                                href="https://www.mercadolibre.cl/gz/shipping-calculator?noIndex=true&amp;item_id=MLC1408674049&amp;new_version=true&amp;modal=false&amp;informative=true&amp;can_go_cart_checkout=true&amp;quantity=1&amp;pdp_filters=category%3AMLC1055&amp;controlled=true&amp;quick_access=true"
                              >
                                Costo y tiempo de envío
                              </a>
                            </div>
                          </li>
                          <li>
                            <div>
                              <a
                                className="ui-pdp-action-modal__link andes-button andes-button--quiet andes-button--medium ui-pdp-questions__link"
                                href="https://articulo.mercadolibre.cl/noindex/freeReturn/fashion?itemId=MLC1408674049&amp;quantity=1&amp;new_version=true&amp;modal=false&amp;controlled=true"
                              >
                                Devoluciones gratis
                              </a>
                            </div>
                          </li>
                          <li>
                            <div>
                              <a
                                className="ui-pdp-action-modal__link andes-button andes-button--quiet andes-button--medium ui-pdp-questions__link"
                                href="https://articulo.mercadolibre.cl/noindex/services/MLC1408674049/payments?new_version=true&amp;modal=false&amp;newIndex=true&amp;controlled=true"
                              >
                                Medios de pago
                              </a>
                            </div>
                          </li>
                          <li>
                            <div>
                              <a
                                className="ui-pdp-action-modal__link andes-button andes-button--quiet andes-button--medium ui-pdp-questions__link"
                                href="https://articulo.mercadolibre.cl/noindex/warranty/MLC1408674049?new_version=true&amp;modal=false&amp;newIndex=true&amp;controlled=true"
                              >
                                Garantía
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <h3 className="content_subtitle">
                        Pregúntale al vendedor
                      </h3>
                      <Row className="row_questions">
                        <Col span={20}>
                          <Input placeholder="Escribe tu pregunta..." />
                        </Col>
                        <Col span={4}>
                          <Button>Preguntar</Button>
                        </Col>
                      </Row>
                    </div>
                    <Divider />
                  </Col>
                </Row>

                <Row>
                  <Col span={24} className="row_others">
                    <div className="contenedor_preguntas">
                      <h2 className="content_title_califi">
                        Opiniones del producto
                      </h2>
                      <Row>
                        <Col span={12}>
                          <Row className="row_calificacion">
                            <Col span={5}>
                              <h2 className="calificacion">4.7</h2>
                            </Col>
                            <Col>
                              <div>
                                <Rate />
                              </div>
                              <div>
                                <p>190 calificaciones</p>
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <div>
                                <ul
                                  className="ui-review-capability-rating"
                                  aria-hidden="true"
                                >
                                  <li className="ui-review-capability-rating__level">
                                    <div
                                      aria-hidden="true"
                                      className="ui-review-capability-rating__level__column ui-review-capability-rating__level__progress-bar-container"
                                    >
                                      <div
                                        className="ui-review-capability-rating__level__progress-bar"
                                        data-testid="progress-bar"
                                      >
                                        <span className="ui-review-capability-rating__level__progress-bar__background"></span>
                                        <span
                                          className="ui-review-capability-rating__level__progress-bar__fill-background"
                                          style={{ width: "83.16%" }}
                                        ></span>
                                      </div>
                                    </div>
                                    <div className="ui-review-capability-rating__level__value-container">
                                      <span>5</span>
                                      <div className="ui-review-capability-rating__start-container">
                                        <svg
                                          aria-hidden="true"
                                          className="ui-review-capability-rating__start"
                                          width="16.8"
                                          height="16"
                                          viewBox="0 0 11 10"
                                        >
                                          <path
                                            fill="#EFEFEF"
                                            fillRule="evenodd"
                                            d="M5.256 8L2.131 9.648l.597-3.49L.2 3.684l3.494-.509L5.256 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                                            vectorEffect="non-scaling-stroke"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="ui-review-capability-rating__level">
                                    <div
                                      aria-hidden="true"
                                      className="ui-review-capability-rating__level__column ui-review-capability-rating__level__progress-bar-container"
                                    >
                                      <div
                                        className="ui-review-capability-rating__level__progress-bar"
                                        data-testid="progress-bar"
                                      >
                                        <span className="ui-review-capability-rating__level__progress-bar__background"></span>
                                        <span
                                          className="ui-review-capability-rating__level__progress-bar__fill-background"
                                          style={{ width: "11.58%" }}
                                        ></span>
                                      </div>
                                    </div>
                                    <div className="ui-review-capability-rating__level__value-container">
                                      <span>4</span>
                                      <div className="ui-review-capability-rating__start-container">
                                        <svg
                                          aria-hidden="true"
                                          className="ui-review-capability-rating__start"
                                          width="16.8"
                                          height="16"
                                          viewBox="0 0 11 10"
                                        >
                                          <path
                                            fill="#EFEFEF"
                                            fillRule="evenodd"
                                            d="M5.256 8L2.131 9.648l.597-3.49L.2 3.684l3.494-.509L5.256 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                                            vectorEffect="non-scaling-stroke"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="ui-review-capability-rating__level">
                                    <div
                                      aria-hidden="true"
                                      className="ui-review-capability-rating__level__column ui-review-capability-rating__level__progress-bar-container"
                                    >
                                      <div
                                        className="ui-review-capability-rating__level__progress-bar"
                                        data-testid="progress-bar"
                                      >
                                        <span className="ui-review-capability-rating__level__progress-bar__background"></span>
                                        <span
                                          className="ui-review-capability-rating__level__progress-bar__fill-background"
                                          style={{ width: "1.58%" }}
                                        ></span>
                                      </div>
                                    </div>
                                    <div className="ui-review-capability-rating__level__value-container">
                                      <span>3</span>
                                      <div className="ui-review-capability-rating__start-container">
                                        <svg
                                          aria-hidden="true"
                                          className="ui-review-capability-rating__start"
                                          width="16.8"
                                          height="16"
                                          viewBox="0 0 11 10"
                                        >
                                          <path
                                            fill="#EFEFEF"
                                            fillRule="evenodd"
                                            d="M5.256 8L2.131 9.648l.597-3.49L.2 3.684l3.494-.509L5.256 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                                            vectorEffect="non-scaling-stroke"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="ui-review-capability-rating__level">
                                    <div
                                      aria-hidden="true"
                                      className="ui-review-capability-rating__level__column ui-review-capability-rating__level__progress-bar-container"
                                    >
                                      <div
                                        className="ui-review-capability-rating__level__progress-bar"
                                        data-testid="progress-bar"
                                      >
                                        <span className="ui-review-capability-rating__level__progress-bar__background"></span>
                                        <span
                                          className="ui-review-capability-rating__level__progress-bar__fill-background"
                                          style={{ width: "0.53%" }}
                                        ></span>
                                      </div>
                                    </div>
                                    <div className="ui-review-capability-rating__level__value-container">
                                      <span>2</span>
                                      <div className="ui-review-capability-rating__start-container">
                                        <svg
                                          aria-hidden="true"
                                          className="ui-review-capability-rating__start"
                                          width="16.8"
                                          height="16"
                                          viewBox="0 0 11 10"
                                        >
                                          <path
                                            fill="#EFEFEF"
                                            fillRule="evenodd"
                                            d="M5.256 8L2.131 9.648l.597-3.49L.2 3.684l3.494-.509L5.256 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                                            vectorEffect="non-scaling-stroke"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="ui-review-capability-rating__level">
                                    <div
                                      aria-hidden="true"
                                      className="ui-review-capability-rating__level__column ui-review-capability-rating__level__progress-bar-container"
                                    >
                                      <div
                                        className="ui-review-capability-rating__level__progress-bar"
                                        data-testid="progress-bar"
                                      >
                                        <span className="ui-review-capability-rating__level__progress-bar__background"></span>
                                        <span
                                          className="ui-review-capability-rating__level__progress-bar__fill-background"
                                          style={{ width: "3.16%" }}
                                        ></span>
                                      </div>
                                    </div>
                                    <div className="ui-review-capability-rating__level__value-container">
                                      <span>1</span>
                                      <div className="ui-review-capability-rating__start-container">
                                        <svg
                                          aria-hidden="true"
                                          className="ui-review-capability-rating__start"
                                          width="16.8"
                                          height="16"
                                          viewBox="0 0 11 10"
                                        >
                                          <path
                                            fill="#EFEFEF"
                                            fillRule="evenodd"
                                            d="M5.256 8L2.131 9.648l.597-3.49L.2 3.684l3.494-.509L5.256 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                                            vectorEffect="non-scaling-stroke"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                        <Col span={18}></Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default DetailsItems;
