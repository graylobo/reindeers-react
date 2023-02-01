import { Table as AntdTable } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Detail from "../../pages/Products/CategoryGroups/Detail";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    render: (some) => <a>{some}</a>,
  },
  {
    title: "Tags",
    dataIndex: "tags",
    key: "address",
  },
];
const dummyData = [];
for (let i = 0; i < 105; i++) {
  dummyData.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
function Table() {
  const nav = useNavigate();
  return (
    <>
      <Wrapper
        rowClassName={(row) => `test-row`}
        onRow={(row) => ({
          onClick: () => {
            nav(`/products/subCate/${row.key}`);
            console.log(row);
          },
        })}
        pagination={{ pageSize: 10 }}
        columns={columns}
        dataSource={dummyData}
      ></Wrapper>
      <Detail />
    </>
  );
}

export default Table;

const Wrapper = styled(AntdTable)`
  .test-row {
    cursor: pointer;
  }
`;
