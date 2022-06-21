import React from "react";
import '../Title.css'
import TitleLeftVSR from "./TitleLeftVSR";
import TitleRightVSR from "./TitleRightVSR";


function ChapterVSR() {
  return (
    <div className="title">
        <TitleLeftVSR/>
        <TitleRightVSR/>
    </div>
  );
}
export default ChapterVSR;