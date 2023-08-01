/* eslint-disable react/prop-types */
import { useState } from "react";
import { HeartOutlined } from "@ant-design/icons";
import { Alert, Col, Layout, Row, Statistic } from "antd";
import BreadcrumbPage from "./components/Breadcrum";
import ray from "../images/ray.svg";
import useResult from "../Utils/useResult";
import Paginator from "../Utils/Paginator";
const { Content, Sider } = Layout;

const ResultSearch = () => {
  const { dataResult, fetchConfig, setFetchConfig, totalData } = useResult();
  const [current, setCurrent] = useState(1);

  const handleClickScroll = () => {
    const element = document.getElementById("section-1");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth", top: 0 });
    }
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
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <BreadcrumbPage />
          <h1 className="title_search">{dataResult?.query}</h1>
          <span className="subtitle_search">
            {dataResult?.paging?.total} resultados
          </span>
        </Sider>
        <Layout>
          <Content>
            <Row className="row_sorted">
              <Col>
                <span>Ordenar por</span>
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
                  discount = Math.round(percentaje);
                }

                console.log("discount", discount);
                return (
                  <div key={item.id} className="col_product">
                    <div className="content_product">
                      <div className="img_product">
                        <img src={item?.thumbnail} />
                      </div>
                      <a className="detail_product" href={item.permalink}>
                        <h2 className="title">{item.title}</h2>
                        {item.official_store_name && (
                          <p className="sub_title">
                            por {item.official_store_name}
                          </p>
                        )}
                        {item.original_price && (
                          <Statistic
                            className="origin_price"
                            value={item.original_price}
                            prefix="$"
                            groupSeparator="."
                          />
                        )}
                        <Row className="row_price">
                          <Col>
                            <Statistic
                              className="price"
                              value={item.price}
                              prefix="$"
                              groupSeparator="."
                            />
                          </Col>
                          {discount && (
                            <Col>
                              <Statistic
                                className="discount"
                                value={discount}
                                suffix="% OFF"
                                groupSeparator="."
                              />
                            </Col>
                          )}
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
