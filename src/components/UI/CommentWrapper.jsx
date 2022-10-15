import React from 'react'
import './CommentWrapper.css'

function CommentWrapper(props) {
    const classes = 'card ' + props.className
  return (
    <div className={classes}>{props.children}</div>
  )
}

export default CommentWrapper