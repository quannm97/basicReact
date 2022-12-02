import {
  Space,
  Table,
  Button,
  Image,
  Switch,
  Modal,
  Form,
  Select,
  Input,
} from "antd";
import { connect } from "react-redux";
import { compose } from "recompose";
import { createStructuredSelector } from "reselect";
import React, { useEffect, useState } from "react";
import {
  asyncCreatePublishDataAction,
  asyncDeletePublishDataAction,
  asyncDetailPublishDataAction,
  asyncEditPublishDataAction,
  getPublishDataAction,
} from "../../store/action";
import { selectPublishData } from "../../store/selector";
const PublishTable = (props) => {
  const { Option } = Select;
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const { listPublishData } = props;
  const {
    getAllPublishDispatch,
    editPublishDataDispatch,
    detailPublishDataDispatch,
    deletePublishDataDispatch,
    createPublishDataDispatch,
  } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isShowKey, setIsShowKey] = useState(false);
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => <Image src={image} preview={false} />,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "isShow",
      dataIndex: "isShow",
      key: "isShow",
      render: (isShow, record) => (
        <Switch
          defaultChecked
          onChange={() => onChange(record)}
          checked={isShow}
        />
      ),
    },

    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Button onClick={() => onEdit(record.id)}>Edit</Button>
          <Button onClick={() => onDelete(record.id)}>Delete</Button>
        </Space>
      ),
    },
  ];
  const onDelete = async (id) => {
    const res = await deletePublishDataDispatch(id);
    if (res === 200) {
      getAllPublishDispatch();
    }
  };
  const onChange = async (values) => {
    const newValue = { ...values, isShow: !values.isShow };
    const res = await editPublishDataDispatch(newValue);
    if (res === 200) {
      getAllPublishDispatch();
    }
  };
  const showModal = () => {
    setIsModalVisible(true);
    setIsShowKey(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onEdit = async (id) => {
    const res = await detailPublishDataDispatch(id);
    if (res) {
      form.setFieldsValue({
        id: res.id,
        title: res.title,
        content: res.content,
        type: res.type,
        isShow: res.isShow,
        description: res.description,
      });
    }
    setIsModalVisible(true);
    setIsShowKey(true);
  };

  const onSubmit = async (values) => {
    if (isShowKey) {
      const res = await editPublishDataDispatch(values);
      if (res === 200) {
        getAllPublishDispatch();
      }
    } else {
      const res = await createPublishDataDispatch(values);
      if (res === 201) {
        getAllPublishDispatch();
      }
    }

    setIsModalVisible(false);
    form.resetFields();
  };

  useEffect(() => {
    getAllPublishDispatch();
  }, []);
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Create
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={
          <Space>
            <Button type="primary" htmlType="submit" form="form">
              Submit
            </Button>
            <Button onClick={handleCancel}>Đóng</Button>
          </Space>
        }
      >
        <Form
          form={form}
          name="form"
          wrapperCol={{
            span: 24,
          }}
          initialValues={{
            type: 1,
            isShow: true,
          }}
          onFinish={onSubmit}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item label="id" name="id">
            <Input disabled={isShowKey} />
          </Form.Item>

          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Title required",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Description required",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Content"
            name="content"
            rules={[
              {
                required: true,
                message: "Content required",
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            label="Type"
            name="type"
            rules={[
              {
                required: true,
                message: "Type required",
              },
            ]}
          >
            <Select
              style={{
                width: 120,
              }}
            >
              <Option value={+1}>1</Option>
              <Option value={+2}>2</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="isShow"
            name="isShow"
            rules={[
              {
                required: true,
                message: "Type required",
              },
            ]}
          >
            <Select
              style={{
                width: 120,
              }}
            >
              <Option value={true}>Show</Option>
              <Option value={false}>Not show</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
      <Table columns={columns} dataSource={listPublishData} rowKey="id" />;
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  listPublishData: selectPublishData,
});

const mapDispatchToProps = (dispatch) => ({
  getAllPublishDispatch: (payload) => dispatch(getPublishDataAction(payload)),
  createPublishDataDispatch: (payload) =>
    asyncCreatePublishDataAction(dispatch)(payload),
  deletePublishDataDispatch: (payload) =>
    asyncDeletePublishDataAction(dispatch)(payload),
  detailPublishDataDispatch: (payload) =>
    asyncDetailPublishDataAction(dispatch)(payload),
  editPublishDataDispatch: (payload) =>
    asyncEditPublishDataAction(dispatch)(payload),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(PublishTable);
