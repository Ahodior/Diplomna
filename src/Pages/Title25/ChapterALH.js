import React from "react";
import '../Title.css'
import TitleLeftALH from "./TitleLeftALH";
import TitleRightALH from "./TitleRightALH";

function ChapterALH() {
  return (
    <div className="title">
        <TitleLeftALH/>
        <TitleRightALH/>
    </div>
  );
}
export default ChapterALH