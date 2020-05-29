import * as SRD from "storm-react-diagrams";

export class Application {
  constructor() {
    this.diagramEngine = new SRD.DiagramEngine();
    this.diagramEngine.installDefaultFactories();

    this.activeModel = SRD.DiagramModel;
  }

  getActiveDiagram(): SRD.DiagramModel {
    return this.activeModel;
  }

  getDiagramEngine(): SRD.DiagramEngine {
    return this.diagramEngine;
  }
}
