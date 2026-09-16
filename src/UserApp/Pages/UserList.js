import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userData();
  }, []);

  const userData = async () => {
    let Datas = await axios.get(
      `https://6aaa9af2ff4dd5698b4ece9f.mockapi.io/users`,
    );

    setUsers(Datas.data);
  };

  return (
    <div>
      <Link to={"/create"} className="btn btn-primary m-2">
        Create user
      </Link>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Mobile</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.mobile}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
