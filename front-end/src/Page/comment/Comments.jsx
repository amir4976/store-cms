import React, { useEffect, useState } from "react";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import "./comment.css";
import ErrorBox from "../../components/ErrorBox/ErrorBox";
import ShowCommentInfo from "../../components/showCommentInfo/ShowCommentInfo";
import DeleteCommentModal from "../../components/DeleteComment/DeleteCommentModal";
import UpdateCommentModal from "../../components/updateComment/UpdateCommentModal";
import AcceptComment from "../../components/AcceptComment/AcceptComment";
function Comments() {
  let [comment, setComment] = useState([])
  let [isShowCommentInfo, setIsShowCommentInfo] = useState(false)
  let [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
  let [DeleteCommentID, setDeleteCommentID] = useState(0)
  let [updateCommentID, setUpdateCommentID] = useState(0)
  let [Desc, setDesc] = useState("")
  let [isShowUpdateModal, setIsShowUpdateModal] = useState(false)
  let [isShowDeleteAlert, setIsShowDDeleteAlert] = useState(false)
  let [isShowUpdateAlert, setIsShowUpdateAlert] = useState(false)
  let [isShowAcceptComment, setIsShowAcceptComment] = useState(false)
  let [AccseptCommentID, setAccseptCommentID] = useState(0)
  let [isShowAcceptAlert,setIsShowAcceptAlert] = useState(false)
  const getAllComments = () => {
    fetch(`http://localhost:8000/api/comments`)
      .then(res => res.json())
      .then(result => setComment(result))
  }
  useEffect(() => {
    getAllComments()
  }, [])


  // alert if delete comment was success
  const DeleteAlert = () => {
    setIsShowDDeleteAlert(true)
    setTimeout(() => {
      setIsShowDDeleteAlert(false)
    }, 3000)
  }
  // alert if update comment was success
  const updateAlert = () => {
    setIsShowUpdateAlert(true)
    setTimeout(() => {
      setIsShowUpdateAlert(false)
    }, 3000)
  }
    // alert if update comment was success
  const acceptAlert = () => {
    setIsShowAcceptAlert(true)
    setTimeout(() => {
      setIsShowAcceptAlert(false)
    }, 3000)
  }



  // delete Comment

  const deleteComment = () => {
    fetch(`http://localhost:8000/api/comments/${DeleteCommentID}`, {
      method: 'DELETE',
    }).then(res => res.json())
      .then(result => {
        console.log(result)
        setIsShowDeleteModal(false)
        getAllComments()
        // if delete comment was successful it run delete alert 
        DeleteAlert()
      })
  }


  // update comments
  const updateComment = () => {
    fetch(`http://localhost:8000/api/comments/${updateCommentID}`, {
      method: 'PUT'
      , headers: { "Content-Type": "application/json", }
      , body: JSON.stringify({
        body: Desc
      })
    })
      .then(res => console.log(res))
      .then(res => {
        setIsShowUpdateModal(false)
        getAllComments()
        updateAlert()
      })
  }

  const acceptComment = () => {
    fetch(`http://localhost:8000/api/comments/accept/${AccseptCommentID}`, {
      method: 'POST'
    })
      .then(res => res.json())
      .then(result => {
        getAllComments()
        console.log(result)
        acceptAlert()
      })
  }


  return (
    <>

      <div className="comments-container">

        {!comment && <ErrorBox title={'کامنتی'} />}
        <table className="table">
          <thead>
            <tr>
              <th>اسم کاربر</th>
              <th>محصول</th>
              <th>کامنت</th>
              <th>تاریخ</th>
              <th>ساعت</th>
            </tr>
          </thead>

          <tbody>
            {comment && comment.map((comment) => (
              <tr>
                <td>{comment.userID}</td>
                <td>{comment.productID}</td>
                <td><button className="btn-primary" onClick={() => {
                  setIsShowCommentInfo(!isShowCommentInfo)
                  setDesc(comment.body)

                }
                }>دیدن کامنت</button></td>
                <td>{comment.date}</td>
                <td>{comment.hour}</td>
                <td>
                  <button className="btn-primary btn-space-between" onClick={() => {
                    setIsShowDeleteModal(!isShowDeleteModal)
                    setDeleteCommentID(comment.id)

                  }
                  }>حذف</button>
                  <button className="btn-primary btn-space-between" onClick={() => {
                    setIsShowUpdateModal(true)
                    setUpdateCommentID(comment.id)
                    setDesc(comment.body)
                  }}>ویرایش</button>
                  <button className="btn-primary btn-space-between">پاسخ</button>

                  {comment.isAccept == 0 &&
                    <button className="btn-primary btn-space-between"
                      onClick={() => {
                        setAccseptCommentID(comment.id)
                        // we give comment body to accept modal with this way  
                        setDesc(comment.body)
                        setIsShowAcceptComment(true)
                      }}
                    >تایید</button>
                  }


                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ShowCommentInfo isShowCommentInfo={isShowCommentInfo} setIsShowCommentInfo={setIsShowCommentInfo} desc={Desc} />
      <DeleteCommentModal isShowDeleteModal={isShowDeleteModal} setIsShowDeleteModal={setIsShowDeleteModal} deleteComment={deleteComment} />
      <UpdateCommentModal isShowUpdateModal={isShowUpdateModal} setIsShowUpdateModal={setIsShowUpdateModal} updateCommentId={updateCommentID} desc={Desc} setDesc={setDesc} updateComment={updateComment} />
      <AcceptComment acceptComment={acceptComment} isShowAcceptComment={isShowAcceptComment} setIsShowAcceptComment={setIsShowAcceptComment} Desc={Desc} />
      {isShowDeleteAlert && (
        <div className="deleteAlert">
          ✔✔ Delete comment was successfully
        </div>
      )}

      {isShowUpdateAlert && (
        <div className="deleteAlert">
          ✔✔ update comment was successfully
        </div>
      )}
       {isShowAcceptAlert && (
        <div className="deleteAlert">
          ✔✔ Accept comment was successfully
        </div>
      )}
    </>
  );
}

export default Comments;
