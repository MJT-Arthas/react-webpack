import React = require("react");
import styles from "./app.scss";
import Route from "./Router";
import { BrowserRouter } from "react-router-dom";
// @ts-ignore
// const styles = require("./app.scss");
console.log(styles);

export default function APP() {
  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>

    // <h1>111</h1>
    // <div>
    //   <div className={styles.test}>Hello World</div>
    //   <div className="test">Hello World</div>
    // </div>
  );
}
