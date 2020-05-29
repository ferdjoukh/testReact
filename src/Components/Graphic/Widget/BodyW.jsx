import * as React from "react";
import * as _ from "lodash";
import { DefaultNodeModel, DiagramWidget } from "storm-react-diagrams";
import Sidebar from "./Sidebar";

export class BodyWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="body">
        <div className="header">
          <div className="title">Drag and Drop Demo</div>
        </div>
        <div className="content">
          <Sidebar />
          <div
            className="diagram-layer"
            onDrop={event => {
              const data = JSON.parse(
                event.dataTransfer.getData("storm-diagram-node")
              );
              const nodesCount = _.keys(
                this.props.app
                  .getDiagramEngine()
                  .getDiagramModel()
                  .getNodes()
              ).length;

              let node = null;
              if (data.type === "in") {
                node = new DefaultNodeModel(
                  "Node " + (nodesCount + 1),
                  "rgb(192,255,0)"
                );
                node.addInPort("In");
                node.addOutPort("Out");
              } else {
                node = new DefaultNodeModel(
                  "Node " + (nodesCount + 1),
                  "rgb(0,192,255)"
                );
                node.addInPort("In");
                node.addOutPort("Out");
              }
              var points = this.props.app
                .getDiagramEngine()
                .getRelativeMousePoint(event);
              node.x = points.x;
              node.y = points.y;
              this.props.app
                .getDiagramEngine()
                .getDiagramModel()
                .addNode(node);
              this.forceUpdate();
            }}
            onDragOver={event => {
              event.preventDefault();
            }}
          >
            <DiagramWidget
              className="srd-demo-canvas"
              diagramEngine={this.props.app.getDiagramEngine()}
            />
          </div>
        </div>
      </div>
    );
  }
}
