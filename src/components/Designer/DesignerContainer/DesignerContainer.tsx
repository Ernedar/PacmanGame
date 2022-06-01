import React, { FC } from "react";

import "./DesignerContainer.css";

import DesignerLegend from "../DesignerLegend";
import DesignerView from "../DesignerView";

const MazeDesigner: FC = () => {
  return (
    <div className="designer-wrapper">
      <DesignerLegend />
      <DesignerView />
    </div>
  );
};

export default MazeDesigner;
