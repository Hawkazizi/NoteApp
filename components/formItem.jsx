"use client";

import { useState } from "react";

const FormItem = ({ data, setData, updateData }) => {
  const [ModalState, setModalState] = useState(false);
  const [key, setKey] = useState();
  const [save, setSave] = useState();

  const removeHandler = (index) => {
    const updatedData = [...data.slice(0, index), ...data.slice(index + 1)];
    setData(updatedData);
  };

  const EditHandler = (index) => {
    // console.log(data[index]);
    setModalState(true);
  };

  const changeHandler = (e) => {
    setSave(e.target.value);
    console.log(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (save === undefined || save === "") {
      alert("plz enter a valid input");
    } else {
      setData((prev) => [(prev[key] = save), ...data]);
    }
    // setUpdate();

    console.log(data);
  };
  return (
    <div>
      {ModalState ? (
        <div className="flex justify-center mt-16 space-x-16 border-2 mx-64 py-12 rounded border-blue-900 bg-gray-900">
          {" "}
          <div
            onClick={() => setModalState(false)}
            className="border-2 pt-3 mt-1 mb-1 px-2 border-red-900 hover:bg-red-900 rounded cursor-pointer"
          >
            Back
          </div>
          <div>
            <form onSubmit={submitHandler}>
              <input
                placeholder="Edite Text"
                className="p-4 border-2  border-blue-900 rounded text-blue-900"
                onChange={changeHandler}
              />
              <button className="border-2 hover:bg-green-900 border-green-900 py-3 rounded ml-2 p-2 cursor-pointer">
                Save
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div>
          {data.map((item, index) => (
            <div
              key={index}
              onDoubleClick={() => removeHandler(index)}
              className="flex border-2 justify-between pl-8 m-6 mx-64 p-3  border-blue-900 bg-gray-900 text-2xl rounded transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              data-te-toggle="tooltip"
              title="Double tap to remove!"
            >
              {item}

              <p
                className="border-2 p-1 rounded border-blue-950 bg-gray-900 hover:bg-blue-950"
                onClick={() => EditHandler(index) || setKey(index)}
              >
                {" "}
                Edit
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FormItem;
