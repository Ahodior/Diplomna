import React from "react";
import '../Title.css'
import TitleLeftJOJO from "./TitleLeftJOJO";
import TitleRightJOJO from "./TitleRightJOJO";

function ChapterJOJO() {
  return (
    <div className="title">
        <TitleLeftJOJO/>
        <TitleRightJOJO/>
    </div>
  );
}
export default ChapterJOJO;