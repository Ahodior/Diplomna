import React from "react";
import '../Title.css'
import TitleLeftBZOO from "./TitleLeftBZOO";
import TitleRightBZOO from "./TitleRightBZOO";

function ChapterBZOO() {
  return (
    <div className="title">
        <TitleLeftBZOO/>
        <TitleRightBZOO/>
    </div>
  );
}
export default ChapterBZOO;