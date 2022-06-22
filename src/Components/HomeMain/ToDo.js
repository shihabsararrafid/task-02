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
  const date = new Date();
  const today =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  const newDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  ).toDateString();
  const todayDate = newDate.split(" ");
  const finalDate = todayDate[2] + " " + todayDate[1] + " " + todayDate[3];
  console.log(finalDate);
  const handleSetSelect = () => {
    setSelect(!select);
    const newone = list.map((s) => list.indexOf(s));
    if (select === false) {
      setSelectSingle([...newone]);
      console.log("select all true");
    }
    if (select === true) {
      setSelectSingle([]);
      console.log(" select all false");
    }
  };
  const handleSelectSingle = (i) => {
    // setSelect(true);
    const find = selectsingle.find((s) => s === i);
    console.log(i);
    console.log("array in selectsingle", selectsingle);
    if (select === true) {
      console.log("true");
      setSelect(false);
      setSelectSingle([]);
      const newone = list.map((s) => list.indexOf(s));
      //console.log(newone);
      console.log(i);
      const newlyone = newone.filter((n) => n !== i);
      console.log(newlyone);
      setSelectSingle([...newlyone]);
      console.log(selectsingle);
    }
    if (find === undefined) {
      console.log("undefined");
      setSelect(false);
      setSelectSingle([...selectsingle, i]);
    } else if (find !== undefined) {
      console.log("not undefined");
      setSelect(false);
      const filter = selectsingle.filter((s) => s !== i);
      setSelectSingle([...filter]);
    }
    console.log("array in  sdfaselectsingle", selectsingle);

    // const findnew = selectsingle.find((s) => s === 0);
    // console.log(findnew);
  };
  console.log(selectsingle);
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
    <div className="w-full h-[460px] overflow-hidden mt-[37px] bg-white p-4">
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
              src={`${select ? check : uncheck}`}
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
        <div className="my-1">
          {list.map((l) => (
            <div className="flex  justify-between">
              {" "}
              <div className="flex my-1">
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
              <div className="text-[#E0E0E0]">Last Added: {finalDate}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ToDo;
