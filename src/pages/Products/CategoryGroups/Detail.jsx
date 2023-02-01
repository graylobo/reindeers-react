import { Button, Cascader, Form, Image, Input, InputNumber, message, Modal, Popconfirm, Select, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "antd/es/form/Form";

const options = [
  {
    label: "Light",
    value: "light",
    children: new Array(20).fill(null).map((_, index) => ({
      label: `Number ${index}`,
      value: index,
    })),
  },
  {
    label: "Bamboo",
    value: "bamboo",
    children: [
      {
        label: "Little",
        value: "little",
        children: [
          {
            label: "Toy Fish",
            value: "fish",
          },
          {
            label: "Toy Cards",
            value: "cards",
          },
          {
            label: "Toy Bird",
            value: "bird",
          },
        ],
      },
    ],
  },
];
function Detail() {
  const { id } = useParams();
  const [isOpen, setOpen] = useState(false);
  const [form] = useForm();
  useEffect(() => {
    if (id) {
      setOpen(true);
    }
  }, [id]);
  return (
    <Modal
      open={isOpen}
      okText={"오켕"}
      onOk={(e) => {
        form.submit();
      }}
      maskClosable={false}
      onCancel={() => {
        setOpen(false);
      }}
    >
      <Form
        form={form}
        onFinish={(e) => {
          console.log(e);
        }}
      >
        <Form.Item name={"hello"}>
          <Input placeholder="SOSO" />
        </Form.Item>
        <Form.Item name={"hollo"}>
          <Input placeholder="SOSO" />
        </Form.Item>
        <Form.Item name={"caccaca"}>
          <Cascader multiple options={options} />
        </Form.Item>

        <Form.Item name={"imama"}>
          <Upload listType="picture-card">
            <img src="/logo192.png" alt="" style={{ width: "50px" }} />
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default Detail;
