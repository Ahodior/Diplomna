import React from "react";
import '../Title.css'
import TitleLeftMYD from "./TitleLeftMYD";
import TitleRightMYD from "./TitleRightMYD";


function ChapterMYD() {
  return (
    <div className="title">
        <TitleLeftMYD/>
        <TitleRightMYD/>
    </div>
  );
}
export default ChapterMYD;