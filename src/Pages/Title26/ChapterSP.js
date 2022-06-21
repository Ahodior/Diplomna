import React from "react";
import '../Title.css'
import TitleLeftSP from "./TitleLeftSP";
import TitleRightSP from "./TitleRightSP";

function ChapterSP() {
  return (
    <div className="title">
        <TitleLeftSP/>
        <TitleRightSP/>
    </div>
  );
}
export default ChapterSP;