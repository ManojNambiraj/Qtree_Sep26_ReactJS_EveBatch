import React, { useState } from "react";
import "./CreateUser.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({
    name: "",
    age: "",
    mobile: "",
    email: "",
    password: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setUserInput({ ...userInput, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postedData = await axios.post(
      `https://6aaa9af2ff4dd5698b4ece9f.mockapi.io/users`,
      userInput,
    );

    if(postedData){
      navigate("/")
    }
  };

  return (
    <div className="userRegister">
      <form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center" }}>User Registration</h2>
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

export default CreateUser;
