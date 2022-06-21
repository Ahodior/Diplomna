import React from "react";
import '../Title.css'
import TitleLeftBer from "./TitleLeftBer";
import TitleRightBer from "./TitleRightBer";

function ChapterBer() {
  return (
    <div className="title">
        <TitleLeftBer/>
        <TitleRightBer/>
    </div>
  );
}
export default ChapterBer