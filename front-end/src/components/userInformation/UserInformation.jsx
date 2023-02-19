import React from 'react'
import './userInformation.css'
import  ReactDOM  from 'react-dom'
import { useEffect } from 'react'


function UserInformation({targetObjectForInformation,setIsShowInformationModal,isShowInformationModal}) {
  useEffect(()=>{
    window.addEventListener('keydown',(e)=>{
        if(e.keyCode == 27) {
            setIsShowInformationModal(false)
        }
    })
  },[])

  return ReactDOM.createPortal (
    <div className={isShowInformationModal ? 'modal-container active':'modal-container'}>
        <div className="userInformation-Table">
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>نام و نام خانوادگی</th>
                        <th>یوزر نیم</th>
                        <th>پسورد</th>
                        <th>شماره</th>
                        <th>شهر</th>
                        <th>ایمیل</th>
                        <th>ادرس</th>
                        <th>امتیاز</th>
                        <th>خرید</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{targetObjectForInformation.id}</td>
                        <td>{targetObjectForInformation.firsname + ' ' + targetObjectForInformation.lastname}</td>
                        <td>{targetObjectForInformation.username}</td>
                        <td>{targetObjectForInformation.password}</td>
                        <td>{targetObjectForInformation.phone}</td>
                        <td>{targetObjectForInformation.city}</td>
                        <td>{targetObjectForInformation.email}</td>
                        <td>{targetObjectForInformation.address}</td>
                        <td>{targetObjectForInformation.score}</td>
                        <td>{targetObjectForInformation.buy}</td>
               
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    ,document.getElementById('modals')
  )
}

export default UserInformation