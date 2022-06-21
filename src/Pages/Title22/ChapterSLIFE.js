import React from "react";
import '../Title.css'
import TitleLeftSLIFE from "./TitleLeftSLIFE";
import TitleRightSLIFE from "./TitleRightSLIFE";

function ChapterSLIFE() {
  return (
    <div className="title">
        <TitleLeftSLIFE/>
        <TitleRightSLIFE/>
    </div>
  );
}
export default ChapterSLIFE;