/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DownOutlined, HeartOutlined, RightOutlined } from "@ant-design/icons";
import {
  Alert,
  Breadcrumb,
  Button,
  Col,
  Dropdown,
  Layout,
  Rate,
  Row,
  Select,
  Space,
  Statistic,
  Switch,
  Typography,
} from "antd";
import ray from "../images/ray.svg";
import earth from "../images/earth.svg";
import useResult from "../Utils/useResult";
import Paginator from "../Utils/Paginator";
const { Content, Sider } = Layout;

const ResultSearch = () => {
  const {
    dataResult,
    fetchConfig,
    setFetchConfig,
    totalData,
    setFilter,
    setSortSelected,
    filter,
    filterCategory,
  } = useResult();
  const navigate = useNavigate();

  const [current, setCurrent] = useState(1);
  const [selectSort, setSelectSort] = useState([]);
  const [pathBreacrumb, setPathBreacrumb] = useState([]);
  const [filterSelected, setFilterSelected] = useState([]);
  const handleClickScroll = () => {
    const element = document.getElementById("section-1");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth", top: 0 });
    }
  };

  const sortData = useCallback(() => {
    const array = [];
    const arrayPath = [];
    if (dataResult) {
      array.push({ label: dataResult?.sort.name, key: dataResult?.sort.id });
      dataResult?.available_sorts.map((item) =>
        array.push({
          label: item.name,
          key: item.id,
        })
      );

      setSelectSort(array);
      if (dataResult?.filters) {
        dataResult?.filters.map((element) => {
          if (element.id === "category") {
            for (let i in element.values) arrayPath.push(element.values[i]);
            // return arrayPath.push(element.values);
          }
        });
        setPathBreacrumb(arrayPath);
      }
    }
  }, [dataResult]);

  useEffect(() => {
    sortData();
  }, [sortData]);

  useEffect(() => {
    handleClickScroll();
  }, [fetchConfig]);

  const items = selectSort;

  const onclickSort = ({ key }) => {
    setSortSelected(key);
  };

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

  console.log("filterCategory", filterCategory);

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
        <Sider breakpoint="lg" collapsedWidth="0">
          <Breadcrumb
            separator={<RightOutlined />}
            style={{
              margin: "16px 0",
            }}
          >
            {pathBreacrumb[0]?.path_from_root?.map((item) => {
              return (
                <Breadcrumb.Item key={item.id}>{item.name}</Breadcrumb.Item>
              );
            })}
          </Breadcrumb>
          <h1 className="title_search">{dataResult?.query}</h1>
          <span className="subtitle_search">
            {dataResult?.paging?.total} resultados
          </span>
          <div className="filters">
            <div className="switch_filter">
              <Row className="row_switch">
                <Col>
                  <span className="full">
                    <img src={ray} />
                    FULL
                  </span>
                  <span>
                    <strong>te da envío gratis</strong>
                  </span>
                  <p>En carritos desde $19.990</p>
                </Col>
                <Col>
                  <Switch size="small" />
                </Col>
              </Row>
            </div>
            <div className="switch_filter">
              <Row className="row_switch">
                <Col>
                  <span>Envío gratis</span>
                </Col>
                <Col>
                  <Switch size="small" />
                </Col>
              </Row>
            </div>
            <div className="switch_filter">
              <Row className="row_switch">
                <Col>
                  <div className="earth">
                    <img src={earth} />
                    <span>COMPRA INTERNACIONAL</span>
                  </div>
                  <div className="description">
                    <p>Miles de productos del mundo a tu casa</p>
                  </div>
                </Col>
                <Col>
                  <Switch size="small" />
                </Col>
              </Row>
            </div>
          </div>
          <div className="filter_tag">
            <div className="list_tag">
              {filterCategory?.map((item) => {
                if (item.id === "BRAND") {
                  return (
                    <ul key={item.id}>
                      <li className="title">{item.name}</li>
                      {item.values.map((element) => {
                        return (
                          <li key={element.id} className="item">
                            <a>
                              {element.name} <span>({element.results})</span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  );
                }
                if (item.id === "BRAND") {
                  return (
                    <ul key={item.id}>
                      <li className="title">{item.name}</li>
                      {item.values.map((element) => {
                        return (
                          <li key={element.id} className="item">
                            <a>
                              {element.name} <span>({element.results})</span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  );
                }
              })}
            </div>
          </div>
        </Sider>
        <Layout>
          <Content>
            <Row className="row_sorted">
              <Col className="col_sorted">
                <span className="span">Ordenar por</span>
                <Dropdown
                  trigger="click"
                  overlayClassName="sort_dropdown"
                  menu={{
                    items,
                    selectable: true,
                    defaultSelectedKeys: [dataResult?.sort?.id],
                    onClick: onclickSort,
                  }}
                >
                  <Button
                    className="btn_dropdown"
                    type="link"
                    onClick={onClickIconSort}
                  >
                    <Space>
                      {dataResult?.sort?.name}
                      <DownOutlined className="icon_sort toggle-down" />
                    </Space>
                  </Button>
                </Dropdown>
              </Col>
            </Row>
            <Row className="content_list_products">
              {dataResult?.results.map((item) => {
                let discount = null;
                if (item.original_price) {
                  const percentaje =
                    ((Number(item.price) / Number(item.original_price)) * 100 -
                      100) *
                    -1;
                  console.log(
                    "Math.round(percentaje)",
                    Math.round(percentaje) === 0
                  );
                  if (Math.round(percentaje) !== 0) {
                    discount = Math.round(percentaje);
                  }
                }

                return (
                  <div key={item.id} className="col_product">
                    <div className="content_product">
                      <div className="img_product">
                        <img src={item?.thumbnail} />
                      </div>
                      <a
                        className="detail_product"
                        href={`/articulo.mercadolibre.cl/${item.id}`}
                      >
                        <div>
                          <h2 className="title">{item.title}</h2>
                        </div>
                        <div style={{ height: "12px" }}>
                          {item.official_store_name ? (
                            <p className="sub_title">
                              por {item.official_store_name}
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                        <Statistic
                          className="origin_price"
                          style={{
                            visibility: discount ? "visible" : "hidden",
                          }}
                          value={item.original_price}
                          prefix="$"
                          groupSeparator="."
                        />
                        <Row className="row_price">
                          <Col flex="260px" className="col_price">
                            <div>
                              <Statistic
                                className="price"
                                value={item.price}
                                prefix="$"
                                groupSeparator="."
                              />
                            </div>
                            {discount && (
                              <div>
                                <Statistic
                                  className="discount"
                                  value={discount}
                                  suffix="% OFF"
                                  groupSeparator="."
                                />
                              </div>
                            )}
                          </Col>

                          <Col className="col_rate">
                            <Rate disabled defaultValue={2} />
                          </Col>
                        </Row>
                        <div className="row_installments">
                          <p>en</p>

                          <Statistic
                            className="installments"
                            value={item.installments?.amount}
                            prefix={`${item.installments?.quantity} x $`}
                            groupSeparator="."
                            precision={0}
                          />
                          <p className="interes">sin interés</p>
                        </div>
                        <Row className="shipping">
                          {!!item.shipping?.free_shipping && (
                            <Col>
                              <span className="free">Envío gratis</span>
                            </Col>
                          )}
                          {item.shipping.logistic_type === "fulfillment" && (
                            <Col>
                              <span className="full">
                                <img src={ray} />
                                FULL
                              </span>
                            </Col>
                          )}
                        </Row>
                      </a>
                    </div>
                    <div className="like_product">
                      <HeartOutlined />
                    </div>
                  </div>
                );
              })}
            </Row>
          </Content>
          <Alert
            message="El envío gratis está sujeto al peso, precio y la distancia del envío."
            type="info"
            showIcon
          />
          <Paginator
            limit={fetchConfig.limit}
            total={totalData}
            current={current}
            setCurrent={setCurrent}
            setFetchConfig={setFetchConfig}
            fetchConfig={fetchConfig}
            handleClickScroll={handleClickScroll}
          />
        </Layout>
      </Layout>
      {console.log("dataResult", dataResult)}
    </div>
  );
};
export default ResultSearch;
