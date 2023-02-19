import React from "react";
import { useEffect, useState } from "react";
import "./UsersTable.css";
import UserDeleteModal from "../userDeleteModal/UserDeleteModal";
import UserInformation from "../userInformation/UserInformation";
import UpdateUser from "../updateUser/UpdateUser";

function UsersTable() {
  let [AllUsers, setAllUsers] = useState(null);
  let [isShowDeleteUserModal, setIsShowDeleteUserModal] = useState(false);
  let [targetUserID, setTargetUserID] = useState(0);
  let [targetObjectForInformation, setTargetObjectForInformation] = useState({})

  let [isShowInformationModal, setIsShowInformationModal] = useState(false)
  let [isShowUpdateUser, setIsShowUpdateUser] = useState(false)


  let [Name, setName] = useState()
  let [LastName, setLastName] = useState('')
  let [UserName, setUserName] = useState('')
  let [Password, setPassword] = useState('')
  let [PhoneNumber, setPhoneNumber] = useState('')
  let [City, setCity] = useState('')
  let [Email, setEmail] = useState('')
  let [Address, setAddress] = useState('')
  let [Score, setScore] = useState('')




  const getAllUserFromApi = () => {
    fetch("http://localhost:8000/api/users")
      .then((res) => res.json())
      .then((res) => setAllUsers(res));
  };
  useEffect(() => {
    getAllUserFromApi();
  }, []);

  // delete user 
  const deleteUser = () => {
    fetch(`http://localhost:8000/api/users/${targetUserID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        getAllUserFromApi()
      });
  };




  // update state user info for update modal 
  const updateStateWithClickUpdate = (user) => {
    setName(user.firsname)
    setLastName(user.lastname)
    setUserName(user.username)
    setPassword(user.password)
    setPhoneNumber(user.phone)
    setCity(user.city)
    setEmail(user.email)
    setAddress(user.address)
    setScore(user.score)
  }

  // send User Info Into Api
  let newUpdateObject ={
    firsname:Name ,
    lastname:LastName ,
    username:UserName ,
    password:Password ,
    phone:PhoneNumber ,
    city:City ,
    email:Email ,
    address:Address ,
    score:Score ,
    buy:10
  }
  const sendUpdatedUserInfo = () =>{
    fetch(`http://localhost:8000/api/users/${targetUserID}`,{
      method:'PUT',
      // گوه بخوره هرکی با تک کوتیشن به هدرس کانتنت تایپ بفرسته
      // من شهر به هم میریزم 
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(newUpdateObject)
    }).then(res=>{
      res.json()
    console.log(res);
    console.log(newUpdateObject)
    
    })
      .then(result=>{
        console.log(result)
        setIsShowUpdateUser(false)
        getAllUserFromApi()
      })
  }
  return (
    <>
      <div className="Users-Table-container">
        <table className="table">
          <thead>
            <tr>
              <th>نام و نام خانوادگی</th>
              <th>یوزر نیم</th>
              <th>رمزعبور</th>
              <th>شماره تماس</th>
              <th>ایمیل</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {AllUsers &&
              AllUsers.map((user) => (
                <tr>
                  <td>
                    {user.firsname} {user.lastname}
                  </td>
                  <td>{user.username} </td>
                  <td>{user.password} </td>
                  <td>{user.phone} </td>
                  <td>{user.email} </td>
                  <td>
                    <button
                      className="table-action-btns"
                      onClick={() => {
                        setIsShowDeleteUserModal(true);
                        setTargetUserID(user.id);
                      }}
                    >
                      حذف
                    </button>

                    <button className="table-action-btns" onClick={() => {
                      setIsShowInformationModal(true)

                      setTargetObjectForInformation(user)
                    }}>جزییات</button>

                    <button className="table-action-btns"
                      onClick={() => {
                        setIsShowUpdateUser(true)
                        updateStateWithClickUpdate(user)
                        setTargetUserID(user.id);
                      }}
                    >ویرایش</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <UserDeleteModal
        isShowDeleteUserModal={isShowDeleteUserModal}
        setIsShowDeleteUserModal={setIsShowDeleteUserModal}
        deleteUser={deleteUser}
      />

      <UserInformation targetObjectForInformation={targetObjectForInformation} setIsShowInformationModal={setIsShowInformationModal} isShowInformationModal={isShowInformationModal} />

      <UpdateUser isShowUpdateUser={isShowUpdateUser} setIsShowUpdateUser={setIsShowUpdateUser} >
        <div className="updateModal-container">
          <h1>ویرایش کاربر</h1>
          <input type="text" value={Name} onInput={(e)=>{
          setName(e.target.value)
          }} className="update-user-info-input" placeholder="نام" />
          <input type="text" value={LastName} onInput={(e)=>{
          setLastName(e.target.value)
          }} className="update-user-info-input" placeholder="نام خانوادگی" />
          <input type="text" value={UserName} onInput={(e)=>{
          setUserName(e.target.value)
          }} className="update-user-info-input" placeholder="یوزر نیم" />
          <input type="text" value={Password} onInput={(e)=>{
          setPassword(e.target.value)
          }} className="update-user-info-input" placeholder="پسورد" />
          <input type="text" value={PhoneNumber} onInput={(e)=>{
          setPhoneNumber(e.target.value)
          }} className="update-user-info-input" placeholder="شماره" />
          <input type="text" value={City} onInput={(e)=>{
          setCity(e.target.value)
          }} className="update-user-info-input" placeholder="شهر" />
          <input type="text" value={Email} onInput={(e)=>{
          setEmail(e.target.value)
          }} className="update-user-info-input" placeholder="ایمیل" />
          <input type="text" value={Address} onInput={(e)=>{
          setAddress(e.target.value)
          }} className="update-user-info-input" placeholder="ادرس" />
          <input type="text" value={Score} onInput={(e)=>{
          setScore(e.target.value)
          }} className="update-user-info-input" placeholder="امتیاز" />
          <button className="submit-user-info" onClick={() => {
            sendUpdatedUserInfo()
          }}>تایید</button>
        </div>
      </UpdateUser>
    </>
  );
}

export default UsersTable;
