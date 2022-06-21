import React from "react";
import '../Title.css'
import TitleLeftDOP from "./TitleLeftDOP";
import TitleRightDOP from "./TitleRightDOP";


function ChapterDOP() {
  return (
    <div className="title">
        <TitleLeftDOP/>
        <TitleRightDOP/>
    </div>
  );
}
export default ChapterDOP;