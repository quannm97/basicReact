import { Col, Row, Image } from "antd";
import "./style.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "recompose";
import { createStructuredSelector } from "reselect";
import React, { useEffect } from "react";
import {
  asyncDetailHomeDataAction,
  getHomeDataAction,
} from "../../store/action";
import { selectHomeData } from "../../store/selector";
const Trangchu = (props) => {
  const { getAllHomeDispatch, detailHomeDataDispatch } = props;
  const { listHomeData } = props;

  useEffect(() => {
    getAllHomeDispatch();
  }, []);
  return (
    <>
      <Row>
        <Col span={7}>
          {listHomeData.map((item) => {
            return (
              item.type === 1 &&
              item.isShow && (
                <div className="home-side-1" key={item.id}>
                  <Image src={item.image} width="120px" preview={false} />
                  <Link
                    to={`/${item.title}`}
                    onClick={() => detailHomeDataDispatch(item.id)}
                  >
                    <strong>{item.title}</strong>
                  </Link>
                </div>
              )
            );
          })}
        </Col>
        <Col span={11}>
          {listHomeData.map((item) => {
            return (
              item.type === 2 &&
              item.isShow && (
                <div className="home-side-2" key={item.id}>
                  <Image src={item.image} width="100%" preview={false} />
                  <Link
                    to={`/${item.title}`}
                    onClick={() => detailHomeDataDispatch(item.id)}
                  >
                    <strong>{item.title}</strong>
                  </Link>
                  <p style={{ fontSize: "16px" }}>{item.description}</p>
                </div>
              )
            );
          })}
        </Col>
        <Col span={6}>
          {listHomeData.map((item) => {
            return (
              item.type === 3 &&
              item.isShow && (
                <div className="home-side-3" key={item.id}>
                  <Image src={item.image} width="100%" preview={false} />
                  <Link
                    to={`/${item.title}`}
                    onClick={() => detailHomeDataDispatch(item.id)}
                  >
                    <strong>{item.title}</strong>
                  </Link>
                </div>
              )
            );
          })}
        </Col>
      </Row>
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  listHomeData: selectHomeData,
});

const mapDispatchToProps = (dispatch) => ({
  getAllHomeDispatch: (payload) => dispatch(getHomeDataAction(payload)),
  detailHomeDataDispatch: (payload) =>
    asyncDetailHomeDataAction(dispatch)(payload),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Trangchu);
