import React from "react";
import '../Title.css'
import TitleLeftWARPR from "./TitleLeftWARPR";
import TitleRightWARPR from "./TitleRightWARPR";

function ChapterWARPR() {
  return (
    <div className="title">
        <TitleLeftWARPR/>
        <TitleRightWARPR/>
    </div>
  );
}
export default ChapterWARPR