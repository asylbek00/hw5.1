import React from "react";
import CommentWrapper from "../UI/CommentWrapper";
// import CommentDate from "./CommentDate";
// import CommentText from '../Comment/CommentText'
import CommentDate from "../Comment/CommentDate";
import './CommentItemTwo.css'

function CommentItemTwo(props) {
  return (
    <div className="author2" >
      
      <div>{props.text}</div>
      <CommentDate date={props.date} />
      
    </div>
  );
}

export default CommentItemTwo;
