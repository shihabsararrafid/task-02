import React, { useState } from "react";
import small from "./../../Images/small.png";
import round from "./../../Images/round.png";
import uncheck from "./../../Images/Icon_Vector_Uncheck.png";
import check from "./../../Images/Icon_Vector_Check.png";
import getDate from "../Hooks/GetDate";
const ToDo = ({ isDark }) => {
  const [select, setSelect] = useState(false);
  const [selectsingle, setSelectSingle] = useState([]);
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  //console.log(selectsingle);

  /*------------------------------------------------------------
  *code to get the current date in format of day /month/year
  --------------------------------------------------------------*/

  const [finalDate] = getDate();
  console.log(finalDate);

  /*------------------------------------------------------
  *function to be executed when the select all is clicked

  * if select all is clicked then all the check mark will be active on the other hand all will be disabled
  -------------------------------------------------------*/

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

  /*-----------------------------------------------------------
  *function to be executed when single checkbox is clicked

  * clicked check box will toggle its color
  -----------------------------------------------------------*/

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
  //console.log(selectsingle);

  /*------------------------------------------
  *getting data from text area
  * retrieved data is set to the 'list' array
  * After every time add button is clicked the text field value will be reset
                                        ---------------------- */

  const addToList = () => {
    const newItem = todo;
    const newList = [...list, newItem];
    setList(newList);
    setTodo("");
    const element = document.getElementById("textarea");
    element.value = "";
  };
  /*--------------------------------------------------------------*
   function to handle done button to delete to do list from the main list
  -----------
  */
  const handleDoneBtn = () => {
    console.log(selectsingle);
    console.log(list);
    const deletedList = selectsingle.map((s) => list[s]);
    console.log(deletedList);
    const newList = list.filter((l) => {
      return !deletedList.includes(l);
    });
    setList(newList);
    setSelectSingle([]);
  };
  //console.log(list);
  return (
    <div
      className={` todo-list ml-[120px] relative   overflow-hidden rounded-lg ${
        isDark ? "bg-[#2C2221]" : "bg-white"
      }  ${isDark ? "text-white" : "text-black"}  p-4`}
    >
      <h1 className="font-semibold text-base ">To Do List </h1>
      <div className="text-area flex">
        <textarea
          name=""
          id="textarea"
          cols="65"
          rows="4"
          onChange={(e) => setTodo(e.target.value)}
          className={`relative  ${
            isDark ? "bg-[#2C2221]" : "bg-white"
          }  border-[2px] focus:border-[#FF7978] outline-0 border-[#EDEBEB]`}
        ></textarea>
        {/* bg-gradient-to-r from-[#FF7594] to-[#FF7C65] */}
        <button
          id="addwrite"
          onClick={addToList}
          className="flex h-[40px] ml-3  text-white items-center bg-gradient-to-r from-[#FF7594] to-[#FF7C65] py-1 px-3 rounded-md "
        >
          <img src={small} className="" alt="" />

          <span> Add</span>
        </button>
        <button
          id="addIcon"
          className="hidden absolute right-[10%] top-[80px] "
          onClick={addToList}
        >
          <img src={round} className="" alt="" />
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
            <button
              onClick={handleDoneBtn}
              className="flex w-[120px] h-[40px] ml-3  text-white items-center bg-gradient-to-r from-[#FF7594] to-[#FF7C65] py-1 px-3 rounded-md "
            >
              <img src={small} className="" alt="" />
              <span> Done</span>
            </button>
          </div>
        </div>
        <div className="my-1">
          {list.map((l) => (
            <div id="toDolistItem" className="flex  justify-between">
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
