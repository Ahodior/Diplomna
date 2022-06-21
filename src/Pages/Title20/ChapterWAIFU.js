import React from "react";
import '../Title.css'
import TitleLeftWAIFU from "./TitleLeftWAIFU";
import TitleRightWAIFU from "./TitleRightWAIFU";


function ChapterWAIFU() {
  return (
    <div className="title">
        <TitleLeftWAIFU/>
        <TitleRightWAIFU/>
    </div>
  );
}
export default ChapterWAIFU;