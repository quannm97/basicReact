import { connect } from "react-redux";
import { compose } from "recompose";
import { createStructuredSelector } from "reselect";
import { selectDetailData } from "../../store/selector";
import { Image } from "antd";
const Content = (props) => {
  const { detailData } = props;
  return (
    <div>
      <h1 style={{ fontSize: "2.6em", textAlign: "center" }}>
        {detailData.title}
      </h1>
      <h3 style={{ textAlign: "center" }}>{detailData.description}</h3>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <Image src={detailData.image} width="70%" preview={false} />
      </div>
      <div style={{ width: "70%", margin: "0 auto" }}>
        <pre
          style={{
            fontSize: "15px",
            fontFamily: "Arial",
            whiteSpace: "pre-wrap",
          }}
        >
          {detailData.content}
        </pre>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  detailData: selectDetailData,
});

const mapDispatchToProps = (dispatch) => ({});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Content);
