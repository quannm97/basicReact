import "./style.css";
import { Col, Row, Image } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "recompose";
import { createStructuredSelector } from "reselect";
import {
  asyncDetailBookDataAction,
  getBookDataAction,
} from "../../store/action";
import { selectBookData } from "../../store/selector";
import React, { useEffect } from "react";
const Xuatban = (props) => {
  const { listBookData } = props;
  const { getAllBookDispatch, detailBookDataDispatch } = props;
  useEffect(() => {
    getAllBookDispatch();
  }, []);
  return (
    <>
      <div className="title-header">
        <h1>
          <Link to="/sach">SÁCH</Link>
        </h1>
      </div>
      <div className="main-content">
        <Row>
          <Col span={16} className="content-1">
            {listBookData.map((item) => {
              return (
                item.type === 1 &&
                item.isShow && (
                  <div key={item.id}>
                    <Image src={item.image} preview={false} width="100%" />
                    <h1 style={{ textAlign: "center" }}>
                      <Link
                        to={`/${item.title}`}
                        onClick={() => detailBookDataDispatch(item.id)}
                      >
                        {item.title}
                      </Link>
                    </h1>

                    <p style={{ textAlign: "center", fontSize: "16px" }}>
                      {item.description}
                    </p>
                  </div>
                )
              );
            })}
          </Col>
          <Col span={8} className="content-2">
            {listBookData.map((item) => {
              return (
                item.type === 2 &&
                item.isShow && (
                  <div className="content-2-container" key={item.id}>
                    <Image src={item.image} preview={false} width="100%" />
                    <h2>
                      <Link
                        to={`/${item.title}`}
                        onClick={() => detailBookDataDispatch(item.id)}
                      >
                        {item.title}
                      </Link>
                    </h2>
                  </div>
                )
              );
            })}
          </Col>
        </Row>
      </div>
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  listBookData: selectBookData,
});

const mapDispatchToProps = (dispatch) => ({
  getAllBookDispatch: (payload) => dispatch(getBookDataAction(payload)),
  detailBookDataDispatch: (payload) =>
    asyncDetailBookDataAction(dispatch)(payload),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Xuatban);
