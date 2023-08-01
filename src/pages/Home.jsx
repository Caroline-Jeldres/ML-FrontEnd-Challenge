/* eslint-disable react/prop-types */
import { LeftOutlined } from "@ant-design/icons";
import { Button, Carousel, Col, Row } from "antd";

const Home = () => {
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          color: "black",
          fontSize: "15px",
          lineHeight: "1.5715",
        }}
        onClick={onClick}
      >
        <Button className="btn_next">
          <LeftOutlined />
        </Button>
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          color: "black",
          fontSize: "15px",
          lineHeight: "1.5715",
        }}
        onClick={onClick}
      >
        <Button className="btn_prev">
          <LeftOutlined />
        </Button>
      </div>
    );
  };

  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Carousel arrows {...settings} >
        <div>
          <div>
            <a
              href="https://www.mercadolibre.cl/ofertas/dia-de-la-ninez-2023#DEAL_ID=MLC14366&amp;S=MKT&amp;V=1&amp;T=MS&amp;L=20230724_dia_del_nino&amp;me.position=0&amp;me.bu_line=26&amp;me.flow=-1&amp;me.bu=3&amp;me.audience=all&amp;me.content_id=MS-WEB_1_DDN-W30&amp;me.component_id=main_slider_web_ml_0&amp;me.logic=user_journey&amp;audience=all&amp;bu=3&amp;bu_line=26&amp;component_id=main_slider_web_ml_0&amp;content_id=MS-WEB_1_DDN-W30&amp;flow=-1&amp;logic=user_journey&amp;position=0&amp;c_id=/home/exhibitors-carousel/element&amp;c_campaign=20230724_dia_del_nino&amp;c_element_order=1&amp;c_uid=d8c64bac-4e65-425b-bf63-db2224265a29"
              tabIndex="-1"
            >
              <img
                src="https://http2.mlstatic.com/D_NQ_720315-MLA70762983739_072023-OO.webp"
                alt="Día del niñez en Mercado Libre"
              />
            </a>
          </div>
        </div>
        <div>
          <a href="https://listado.mercadolibre.cl/_Container_dia-de-la-ninez-2023-mundo-gamer#DEAL_ID=MLC14368&amp;S=MKT&amp;V=3&amp;T=MS&amp;L=20230724_ddn_gaming&amp;me.bu_line=26&amp;me.flow=-1&amp;me.bu=3&amp;me.audience=all&amp;me.content_id=MS-WEB_3_GAMING-W30&amp;me.component_id=main_slider_web_ml_1&amp;me.logic=user_journey&amp;me.position=1&amp;audience=all&amp;bu=3&amp;bu_line=26&amp;component_id=main_slider_web_ml_1&amp;content_id=MS-WEB_3_GAMING-W30&amp;flow=-1&amp;logic=user_journey&amp;position=1&amp;c_id=/home/exhibitors-carousel/element&amp;c_campaign=20230724_ddn_gaming&amp;c_element_order=2&amp;c_uid=d8bf4ad0-da1b-4179-9cff-b4410f71fe53">
            <img
              src="https://http2.mlstatic.com/D_NQ_932041-MLA70636486917_072023-OO.webp"
              alt="Día de la niñez en Mercado Libre"
            />
          </a>
        </div>
        <div>
          <a
            href="https://listado.mercadolibre.cl/_Container_dia-de-la-ninez-2023-juguetes#DEAL_ID=MLC14379&amp;S=MKT&amp;V=2&amp;T=MS&amp;L=20230724_ddn_juguetes&amp;me.component_id=main_slider_web_ml_2&amp;me.logic=user_journey&amp;me.position=2&amp;me.bu_line=26&amp;me.flow=-1&amp;me.bu=3&amp;me.audience=all&amp;me.content_id=MS-WEB_2_JUGUETES-W30&amp;audience=all&amp;bu=3&amp;bu_line=26&amp;component_id=main_slider_web_ml_2&amp;content_id=MS-WEB_2_JUGUETES-W30&amp;flow=-1&amp;logic=user_journey&amp;position=2&amp;c_id=/home/exhibitors-carousel/element&amp;c_campaign=20230724_ddn_juguetes&amp;c_element_order=3&amp;c_uid=bfbd59fd-dd04-46e1-8972-fb25951b1aa8"
            tabIndex="-1"
          >
            <img
              src="https://http2.mlstatic.com/D_NQ_887576-MLA70652527794_072023-OO.webp"
              alt="Día de la niñez en Mercado Libre"
            />
          </a>
        </div>
        <div>
          <a href="https://listado.mercadolibre.cl/_Container_dia-de-la-ninez-2023-moda#DEAL_ID=MLC14383&amp;S=MKT&amp;V=4&amp;T=MS&amp;L=20230724_ddn_moda&amp;me.bu_line=26&amp;me.flow=-1&amp;me.bu=3&amp;me.audience=all&amp;me.content_id=MS-WEB_4_MODA-W30&amp;me.component_id=main_slider_web_ml_3&amp;me.logic=user_journey&amp;me.position=3&amp;audience=all&amp;bu=3&amp;bu_line=26&amp;component_id=main_slider_web_ml_3&amp;content_id=MS-WEB_4_MODA-W30&amp;flow=-1&amp;logic=user_journey&amp;position=3&amp;c_id=/home/exhibitors-carousel/element&amp;c_campaign=20230724_ddn_moda&amp;c_element_order=4&amp;c_uid=23c2ea32-65d4-44f9-aae5-d915d464c791">
            <img
              src="https://http2.mlstatic.com/D_NQ_643563-MLA70636370629_072023-OO.webp"
              alt="Día de la niñez en Mercado Libre"
            />
          </a>
        </div>
        <div>
          <a href="https://listado.mercadolibre.cl/_Deal_dia-de-la-ninez-2023-tecnologia#DEAL_ID=MLC14380&amp;S=MKT&amp;V=5&amp;T=MS&amp;L=20230724_ddn_tecnologia&amp;me.logic=user_journey&amp;me.position=4&amp;me.bu_line=26&amp;me.flow=-1&amp;me.bu=3&amp;me.audience=all&amp;me.content_id=MS-WEB_5_TECNOLOGIA-W30&amp;me.component_id=main_slider_web_ml_4&amp;audience=all&amp;bu=3&amp;bu_line=26&amp;component_id=main_slider_web_ml_4&amp;content_id=MS-WEB_5_TECNOLOGIA-W30&amp;flow=-1&amp;logic=user_journey&amp;position=4&amp;c_id=/home/exhibitors-carousel/element&amp;c_campaign=20230724_ddn_tecnologia&amp;c_element_order=5&amp;c_uid=fd2f54a8-19fe-4648-a342-764da4568902">
            <img
              src="https://http2.mlstatic.com/D_NQ_772331-MLA70679407499_072023-OO.webp"
              alt="Día de la niñez en Mercado Libre"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.mercadolibre.cl/ofertas/gran-hermano#DEAL_ID=MLC13526&amp;S=MKT&amp;V=6&amp;T=MS&amp;L=20230724_gran_hermano&amp;me.audience=all&amp;me.content_id=MS-WEB_6_GH-W30&amp;me.component_id=main_slider_web_ml_5&amp;me.logic=user_journey&amp;me.position=5&amp;me.bu_line=26&amp;me.flow=-1&amp;me.bu=3&amp;audience=all&amp;bu=3&amp;bu_line=26&amp;component_id=main_slider_web_ml_5&amp;content_id=MS-WEB_6_GH-W30&amp;flow=-1&amp;logic=user_journey&amp;position=5&amp;c_id=/home/exhibitors-carousel/element&amp;c_campaign=20230724_gran_hermano&amp;c_element_order=6&amp;c_uid=ad383863-1cbc-4cdb-a550-c0a6f28242af"
            tabIndex="-1"
          >
            <img
              src="https://http2.mlstatic.com/D_NQ_613173-MLA70653142782_072023-OO.webp"
              alt="Gran Hermano en Mercado Libre"
              tabIndex="-1"
            />
          </a>
        </div>
      </Carousel>
      <div>
        <Row justify="center" align="middle" className="row_medio_pago">
          <Col className="content_medio_1">
            <div className="div_medio_pago_1">
              <span className="title">Paga cómodo y seguro </span>
              <span className="subtitle">con Mercado Pago </span>
            </div>
          </Col>
          <Col className="content_medio_2">
            <div className="div_medio_pago_2">
              <a
                className="payment-data-icon"
                href="/gz/home/payments/methods"
                data-title="Medios de pago"
              >
                <img
                  decoding="async"
                  src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/credit-card.svg"
                  alt="Hasta 12 cuotas sin interés"
                />
              </a>
              <div className="div_content">
                <span className="title">Hasta 12 cuotas sin interés </span>
                <a
                  href="/gz/home/payments/methods"
                  data-title="Medios de pago"
                  aria-label="Hasta 12 cuotas sin interés, Ver más"
                  className="subtitle"
                >
                  Ver más
                </a>
              </div>
            </div>
          </Col>
          <Col className="content_medio_3">
            <div className="div_medio_pago_3">
              <a
                className="payment-data-icon"
                href="/gz/home/payments/methods#debit-card"
                data-title="Medios de pago"
              >
                <img
                  decoding="async"
                  src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/debit-card.svg"
                  alt="Tarjeta de débito"
                />
              </a>
              <div className="div_content">
                <span className="title">Tarjeta de débito</span>
                <a
                  href="/gz/home/payments/methods#debit-card"
                  data-title="Medios de pago"
                  aria-label="Tarjeta de débito, Ver más"
                  className="subtitle"
                >
                  Ver más
                </a>
              </div>
            </div>
          </Col>
          <Col className="content_medio_4">
            <div className="div_medio_pago_4">
              <a
                className="payment-data-icon"
                href="/gz/home/payments/methods"
                data-title="Medios de pago"
              >
                <img
                  decoding="async"
                  src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/view-more.svg"
                  alt="Más medios de pago"
                />
              </a>
              <div className="div_content">
                <span className="title">Más medios de pago</span>
                <a
                  href="/gz/home/payments/methods"
                  data-title="Medios de pago"
                  aria-label="Más medios de pago, Ver todos"
                  className="subtitle"
                >
                  Ver todos
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Home;
