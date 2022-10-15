
import CommentItem from "../Comment/CommentItem";
import CommentItemTwo from "../Comment/CommentItemTwo";

import CommentWrapper from "../UI/CommentWrapper";
import "./Comment.css";

export function Comment(props) {
  return (
    <div>
      <CommentWrapper className="wrapper1">
        <CommentItem
          img={props.data[0].author.avatarUrl}
          name={props.data[0].author.name}
        />
        <CommentItem
          img={props.data[1].author.avatarUrl}
          name={props.data[1].author.name}
        />
        <CommentItem
          img={props.data[2].author.avatarUrl}
          name={props.data[2].author.name}
        />
      </CommentWrapper>

      <CommentWrapper className='wrapper2'>
        <CommentItemTwo text={props.data[0].text} date={props.data[0].date} />
        <CommentItemTwo text={props.data[1].text} date={props.data[1].date} />
        <CommentItemTwo text={props.data[2].text} date={props.data[2].date} />
      </CommentWrapper>
    </div>
  );
}
