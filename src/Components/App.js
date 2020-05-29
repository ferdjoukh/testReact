import React, { Fragment } from "react";
import { Header} from "./Layouts";
import { CssBaseline } from "@material-ui/core";
import GraphicDashboard from "./Graphic";
import "storm-react-diagrams/dist/style.min.css";

export default function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <div style={{ height: 900, width: "100%" }}>
        <GraphicDashboard />
      </div>
    </Fragment>
  );
}
