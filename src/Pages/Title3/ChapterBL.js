import React from "react";
import '../Title.css'
import TitleLeftBL from "./TitleLeftBL";
import TitleRightBL from "./TitleRightBL";

function ChapterBL() {
  return (
    <div className="title">
        <TitleLeftBL/>
        <TitleRightBL/>
    </div>
  );
}
export default ChapterBL