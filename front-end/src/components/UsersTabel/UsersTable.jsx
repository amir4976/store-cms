import React from "react";
import { useEffect, useState } from "react";
import "./UsersTable.css";
import UserDeleteModal from "../userDeleteModal/UserDeleteModal";
function UsersTable() {
  let [AllUsers, setAllUsers] = useState(null);
  let [isShowDeleteUserModal, setIsShowDeleteUserModal] = useState(false);
  let [targetUserID, setTargetUserID] = useState(0);
  const getAllUserFromApi = () => {
    fetch("http://localhost:8000/api/users")
      .then((res) => res.json())
      .then((res) => setAllUsers(res));
  };
  useEffect(() => {
    getAllUserFromApi();
  }, []);

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
                    <button className="table-action-btns">جزییات</button>
                    <button className="table-action-btns">ویرایش</button>
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
    </>
  );
}

export default UsersTable;
