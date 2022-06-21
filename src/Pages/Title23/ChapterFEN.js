import React from "react";
import '../Title.css'
import TitleLeftFEN from "./TitleLeftFEN";
import TitleRightFEN from "./TitleRightFEN";



function ChapterFEN() {
  return (
    <div className="title">
        <TitleLeftFEN/>
        <TitleRightFEN/>
    </div>
  );
}
export default ChapterFEN;