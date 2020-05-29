import React, { Component } from "react";

import { BodyWidget } from "./Widget/BodyW";
import { Application } from "./App";

import "./Styles/styles.css";

export default class DndApp extends Component {
  render() {
    const app = new Application();
    return <BodyWidget app={app} />;
  }
}
