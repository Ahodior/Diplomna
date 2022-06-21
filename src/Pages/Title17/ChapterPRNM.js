import React from "react";
import '../Title.css'
import TitleLeftPRNM from "./TitleLeftPRNM";
import TitleRightPRNM from "./TitleRightPRNM";

function ChapterPRNM() {
  return (
    <div className="title">
        <TitleLeftPRNM/>
        <TitleRightPRNM/>
    </div>
  );
}
export default ChapterPRNM;