import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";

import "./index.scss";

export default function Detail() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/user/list");
      }}
    >
      这里是Home
    </div>
  );
}
