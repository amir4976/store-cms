import React from "react";
import ReactDOM from "react-dom";
import "./AcceptComment.css";
function AcceptComment({
  acceptComment,
  isShowAcceptComment,
  setIsShowAcceptComment,
  Desc,
}) {
  return ReactDOM.createPortal(
    <div
      className={
        isShowAcceptComment ? "modal-container active" : "modal-container"
      }
    >
      <div className="Accept-comment-container">
        <h1>ایا از تایید این کامنت اطمینان دارید؟</h1>
        <span className="accept-comment-info">{Desc}</span>
        <div className="accept-comment-or-Cancel">
          <button
            className="yes-btn"
            onClick={() => {
              acceptComment();
              setIsShowAcceptComment(false);
            }}
          >
            بله
          </button>
          <button className="no-btn" 
          onClick={()=>{
              setIsShowAcceptComment(false);
          }}>خیر</button>
        </div>
      </div>
    </div>,
    document.getElementById("modals")
  );
}

export default AcceptComment;
