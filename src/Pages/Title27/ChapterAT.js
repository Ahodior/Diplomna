import React from "react";
import '../Title.css'
import TitleLeft from "./TitleLeftAT";
import TitleRight from "./TitleRightAT";

function ChapterAT() {
  return (
    <div className="title">
        <TitleLeft/>
        <TitleRight/>
    </div>
  );
}
export default ChapterAT;