import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Detail() {
  const param: any = useLocation();
  // console.warn(param.state);

  const [id, setId] = useState<number>(0);
  useEffect(() => {
    setId(param.state.id);
  });
  return <div>user Detail-- {id}</div>;
}
