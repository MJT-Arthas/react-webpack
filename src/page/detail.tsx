import React = require("react");
import { useNavigate } from "react-router-dom";
export default function Detail() {
  const navigate = useNavigate();
  return (
    <div>
      <div onClick={() => navigate("/")}>跳转回主页</div>
    </div>
  );
}
