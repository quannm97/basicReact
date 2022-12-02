import "./style.css";
import { Col, Row, Image } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "recompose";
import { createStructuredSelector } from "reselect";
import {
  asyncDetailPublishDataAction,
  getPublishDataAction,
} from "../../store/action";
import { selectPublishData } from "../../store/selector";
import React, { useEffect } from "react";
const Xuatban = (props) => {
  const { listPulishData } = props;
  const { getAllPublishDispatch, detailPublishDataDispatch } = props;
  useEffect(() => {
    getAllPublishDispatch();
  }, []);
  return (
    <>
      <div className="title-header">
        <h1>
          <Link to="/xuat-ban">XUẤT BẢN</Link>
        </h1>
      </div>
      <div className="main-content">
        <Row>
          <Col span={16} className="content-1">
            {listPulishData.map((item) => {
              return (
                item.type === 1 &&
                item.isShow && (
                  <div key={item.id}>
                    <Image src={item.image} preview={false} width="100%" />
                    <h1 style={{ textAlign: "center" }}>
                      <Link
                        to={`/${item.title}`}
                        onClick={() => detailPublishDataDispatch(item.id)}
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
            {listPulishData.map((item) => {
              return (
                item.type === 2 &&
                item.isShow && (
                  <div className="content-2-container" key={item.id}>
                    <Image src={item.image} preview={false} width="100%" />
                    <h2>
                      <Link
                        to={`/${item.title}`}
                        onClick={() => detailPublishDataDispatch(item.id)}
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
  listPulishData: selectPublishData,
});

const mapDispatchToProps = (dispatch) => ({
  getAllPublishDispatch: (payload) => dispatch(getPublishDataAction(payload)),
  detailPublishDataDispatch: (payload) =>
    asyncDetailPublishDataAction(dispatch)(payload),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Xuatban);
