import React from "react";
import '../Title.css'
import TitleLeftAT from "./TitleLeftAT";
import TitleRightAT from "./TitleRightAT";

function ChapterAT() {
  return (
    <div className="title">
        <TitleLeftAT/>
        <TitleRightAT/>
    </div>
  );
}
export default ChapterAT;