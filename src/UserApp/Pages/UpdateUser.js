import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUser() {

  const {id} = useParams()  
  const navigate = useNavigate()

  const [userInput, setUserInput] = useState({
    name: "",
    age: "",
    mobile: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = async () => {
    let userData = await axios.get(`https://6aaa9af2ff4dd5698b4ece9f.mockapi.io/users/${id}`);

    setUserInput(userData.data);
  }

  const handleChange = ({ target: { value, name } }) => {
    setUserInput({ ...userInput, [name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    let UpdatedData = await axios.put(`https://6aaa9af2ff4dd5698b4ece9f.mockapi.io/users/${id}`, userInput);

    if (UpdatedData) {
      navigate("/");
    }   
  }
  
  return (
    <div className="userRegister">
      <form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center" }}>Update User</h2>
        <div class="mb-3">
          <label for="exampleInputName1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputName1"
            aria-describedby="NameHelp"
            name="name"
            value={userInput.name}
            onChange={handleChange}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputAge1" class="form-label">
            Age
          </label>
          <input
            type="Number"
            class="form-control"
            id="exampleInputAge1"
            aria-describedby="AgeHelp"
            name="age"
            value={userInput.age}
            onChange={handleChange}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputMobile1" class="form-label">
            Mobile
          </label>
          <input
            type="Number"
            class="form-control"
            id="exampleInputMobile1"
            aria-describedby="MobileHelp"
            name="mobile"
            value={userInput.mobile}
            onChange={handleChange}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={userInput.email}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            name="password"
            value={userInput.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpdateUser;
