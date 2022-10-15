import React from "react";
import CommentWrapper from "../UI/CommentWrapper";
import './CommentItem.css'

function CommentItem(props) {
  return (
    <CommentWrapper className='author'>
      <div>
        <img className="picture" src={props.img} />
        <div>{props.name}</div>
      </div>

    </CommentWrapper>
  );
}

export default CommentItem;
