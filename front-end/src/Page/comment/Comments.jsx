import React, { useEffect, useState } from "react";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import "./comment.css";
import ErrorBox from "../../components/ErrorBox/ErrorBox";
import ShowCommentInfo from "../../components/showCommentInfo/ShowCommentInfo";
import DeleteCommentModal from "../../components/DeleteComment/DeleteCommentModal";
import UpdateCommentModal from "../../components/updateComment/UpdateCommentModal";

function Comments() {
  let [comment, setComment] = useState([])
  let [isShowCommentInfo, setIsShowCommentInfo] = useState(false)
  let [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
  let [DeleteCommentID, setDeleteCommentID] = useState(0)
  let [Desc,setDesc]=useState('')
  let [isShowUpdateModal,setIsShowUpdateModal]= useState(false)

  const getAllComments = () => {
    fetch(`http://localhost:8000/api/comments`)
      .then(res => res.json())
      .then(result => setComment(result))
  }

  useEffect(() => {
    getAllComments()
  }, [])



  // delete Comment

  const deleteComment = () => {
    fetch(`http://localhost:8000/api/comments/${DeleteCommentID}`,{
      method:'DELETE',
    }).then(res=>res.json())
      .then(result=>{
        console.log(result)
        setIsShowDeleteModal(false)
        getAllComments()
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
                <td><button className="btn-primary" onClick={() =>
                { 
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
                  <button className="btn-primary btn-space-between" onClick={()=>setIsShowUpdateModal(true)}>ویرایش</button>
                  <button className="btn-primary btn-space-between">پاسخ</button>
                  <button className="btn-primary btn-space-between">تایید</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ShowCommentInfo isShowCommentInfo={isShowCommentInfo} setIsShowCommentInfo={setIsShowCommentInfo} desc={Desc} />
      <DeleteCommentModal isShowDeleteModal={isShowDeleteModal} setIsShowDeleteModal={setIsShowDeleteModal}  deleteComment={deleteComment}/>
      <UpdateCommentModal isShowUpdateModal={isShowUpdateModal}  setIsShowUpdateModal={setIsShowUpdateModal}/>
    </>
  );
}

export default Comments;
