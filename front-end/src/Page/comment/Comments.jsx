import React, { useEffect,useState} from "react";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import "./comment.css";
import ErrorBox from "../../components/ErrorBox/ErrorBox";
function Comments() {
  let [comment,setComment]=useState([])
  const getAllComments = () =>{
    fetch('http://localhost:8000/api/comments')
      .then(res => res.json())
      .then(result => setComment(result) )
  }

  useEffect(()=>{
    getAllComments()
  },[])

  return (
    <>
    <div className="comments-container">
   
      {!comment &&  <ErrorBox title={'کامنتی'}/>}
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
      {comment && comment.map((comment)=>(
            <tr>
            <td>{comment.userID}</td>
            <td>{comment.productID}</td>
            <td><button className="btn-primary ">دیدن کامنت</button></td>
            <td>{comment.date}</td>
            <td>{comment.hour}</td>
            <td>
              <button className="btn-primary btn-space-between">حذف</button>
              <button className="btn-primary btn-space-between">ویرایش</button>
              <button className="btn-primary btn-space-between">پاسخ</button>
            </td>
          </tr>
      ))}
    </tbody>
      </table>
    </div>
    </>
  );
}

export default Comments;
