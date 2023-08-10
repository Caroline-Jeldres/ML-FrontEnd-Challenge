import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import PropTypes from "prop-types";

const Paginator = ({
  limit,
  total,
  current,
  setCurrent,
  setFetchConfig,
  fetchConfig,
}) => {
  const totalPages = Math.ceil(total / limit);

  const previousPage = () => {
    console.log("current", current);
    if (current !== 1) {
      setCurrent(current - 1);
      setFetchConfig({
        ...fetchConfig,
        offset: current * limit,
      });
    }
    if (current === 2) {
      setCurrent(current - 1);
      setFetchConfig({
        ...fetchConfig,
        offset: 0,
      });
    }
  };

  const nextPage = () => {
    if (current !== totalPages) {
      setCurrent(current + 1);
      setFetchConfig({
        ...fetchConfig,
        offset: current * limit,
      });
    }
  };

  return (
    <div className="pagination-container">
      <div className="pagination">
        <Button
          type="link"
          onClick={() => previousPage()}
          style={{
            visibility: current === 1 ? "hidden" : "visible",
          }}
        >
          <LeftOutlined /> Anterior
        </Button>
        <div className="page-number">
          <div className="current">{current}</div>
          <span>de {totalPages}</span>
        </div>
        <Button
          type="link"
          onClick={() => nextPage()}
          style={{
            visibility: current === 10 ? "hidden" : "visible",
          }}
        >
          Siguiente <RightOutlined />
        </Button>
      </div>
    </div>
  );
};

Paginator.propTypes = {
  limit: PropTypes.number,
  total: PropTypes.number,
  current: PropTypes.number,
  setCurrent: PropTypes.func,
  setFetchConfig: PropTypes.func,
  fetchConfig: PropTypes.object,
  handleClickScroll: PropTypes.func,
};

Paginator.defaultProps = {
  limit: 0,
  total: 0,
  current: 1,
  setCurrent: () => {},
  setFetchConfig: () => {},
  fetchConfig: {},
  handleClickScroll: () => {},
};

export default Paginator;
