import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, DatePicker, Space } from "antd";
export default function Detail() {
  function onChange(date: any, dateString: string) {
    console.log(date, dateString);
    setDateString(dateString);
  }
  const navigate = useNavigate();
  const params = useParams();
  console.warn(params);
  const [count, setCount] = useState(0);
  const [dateString, setDateString] = useState("");
  return (
    <div>
      <h1>{dateString}</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <div onClick={() => navigate("/")}>Login</div>
      <Button type="primary">111</Button>
      <Space direction="vertical">
        <DatePicker onChange={onChange} />
        <DatePicker onChange={onChange} picker="week" />
        <DatePicker onChange={onChange} picker="month" />
        <DatePicker onChange={onChange} picker="quarter" />
        <DatePicker onChange={onChange} picker="year" />
      </Space>
    </div>
  );
}
