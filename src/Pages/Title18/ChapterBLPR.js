import React from "react";
import '../Title.css'
import TitleLeftBLPR from "./TitleLeftBLPR";
import TitleRightBLPR from "./TitleRightBLPR";


function ChapterBLPR() {
  return (
    <div className="title">
        <TitleLeftBLPR/>
        <TitleRightBLPR/>
    </div>
  );
}
export default ChapterBLPR;