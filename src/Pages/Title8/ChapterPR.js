import React from "react";
import '../Title.css'
import TitleLeftPR from "./TitleLeftPR";
import TitleRightPR from "./TitleRightPR";


function ChapterPR() {
  return (
    <div className="title">
        <TitleLeftPR/>
        <TitleRightPR/>
    </div>
  );
}
export default ChapterPR;