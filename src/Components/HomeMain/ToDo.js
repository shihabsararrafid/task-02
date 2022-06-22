import React, { useState } from "react";
import small from "./../../Images/small.png";
import uncheck from "./../../Images/Icon_Vector_Uncheck.png";
import check from "./../../Images/Icon_Vector_Check.png";
const ToDo = () => {
  const [select, setSelect] = useState(false);
  const [selectsingle, setSelectSingle] = useState([]);
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  //console.log(selectsingle);
  const handleSetSelect = () => {
    setSelect(!select);
    const newone = list.map((s) => list.indexOf(s));
    if (select === true) {
      setSelectSingle([...newone]);
    }
    if (select === false) {
      setSelectSingle([]);
    }
  };
  const handleSelectSingle = (i) => {
    const find = selectsingle.find((s) => s === i);

    if (find === undefined) {
      setSelectSingle([...selectsingle, i]);
    }
    if (find !== undefined) {
      const filter = selectsingle.filter((s) => s !== i);
      setSelectSingle([...filter]);
    }
    if (select === true) {
      setSelectSingle([]);
      const newone = list.map((s) => list.indexOf(s));
      //console.log(newone);
      console.log(i);
      const newlyone = newone.filter((n) => n !== i);
      console.log(newlyone);
      setSelectSingle([...newlyone]);
      console.log(selectsingle);
    }
    // const findnew = selectsingle.find((s) => s === 0);
    // console.log(findnew);
  };
  //console.log(selectsingle);
  const addToList = () => {
    const newItem = todo;
    const newList = [...list, newItem];
    setList(newList);
    setTodo("");
    const element = document.getElementById("textarea");
    element.value = "";
  };
  //console.log(list);
  return (
    <div className="w-full h-[460px] mt-[37px] bg-white p-4">
      <h1 className="font-semibold text-base ">To Do List </h1>
      <div className="text-area flex">
        <textarea
          name=""
          id="textarea"
          cols="65"
          rows="4"
          onChange={(e) => setTodo(e.target.value)}
          className="border-[2px] focus:border-[#FF7978] outline-0 border-[#EDEBEB]"
        ></textarea>
        {/* bg-gradient-to-r from-[#FF7594] to-[#FF7C65] */}
        <button
          onClick={addToList}
          className="flex h-[40px] ml-3  text-white items-center bg-gradient-to-r from-[#FF7594] to-[#FF7C65] py-1 px-3 rounded-md "
        >
          <img src={small} className="" alt="" />
          <span> Add</span>
        </button>
      </div>
      <section className="select">
        <div className="flex  items-center  mt-4">
          <div className="flex w-[540px] ">
            <img
              onClick={handleSetSelect}
              className="w-[26px] h-[26px]"
              src={`${select ? uncheck : check}`}
              alt=""
            />
            <span className="font-bold block ml-2">Select All</span>
          </div>
          <div>
            <button className="flex h-[40px] ml-3  text-white items-center bg-gradient-to-r from-[#FF7594] to-[#FF7C65] py-1 px-3 rounded-md ">
              <img src={small} className="" alt="" />
              <span> Done</span>
            </button>
          </div>
        </div>
        <div>
          {list.map((l) => (
            <div className="flex my-1">
              {" "}
              <img
                onClick={() => handleSelectSingle(list.indexOf(l))}
                className="w-[26px] h-[26px]"
                src={`${
                  false || selectsingle.find((s) => s === list.indexOf(l))
                    ? check
                    : uncheck
                }`}
                alt=""
              />{" "}
              <div className="flex w-full   flex-wrap">
                <span className="font-semibold break-words block w-full ml-2">
                  {l}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ToDo;
