import React from "react";
import FormItem from "./formItem";
import { useState } from "react";
const Profile = () => {
  const [value, setValue] = useState(["Your First Note"]);
  const [value2, setValue2] = useState(value);

  const changeHandler = (event) => {
    setValue(event.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (value === "") {
      alert("plz enter a valid input");
      setValue2((prev) => [...prev]);
    } else {
      setValue2((prev) => [value, ...prev]);
    }
    setValue("");
  };
  return (
    <div>
      {" "}
      <div className="flex justify-center mt-32 ">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Username"
            className="mb-3 p-2 border-2 border-blue-900 text-blue-500 rounded "
            value={value}
            onChange={changeHandler}
          />
          <button className="border-2 border-green-900  m-8 rounded bg-gray-900 p-2 hover:bg-green-900">
            Submit
          </button>
        </form>
      </div>
      <FormItem data={value2} setData={setValue2} updateData={setValue} />
    </div>
  );
};

export default Profile;
