import React = require("react");
import { useNavigate } from "react-router-dom";
export default function Detail() {
  const navigate = useNavigate();
  return (
    <div>
      <div onClick={() => navigate("/detail")}>跳转去详情页</div>
    </div>
  );
}
