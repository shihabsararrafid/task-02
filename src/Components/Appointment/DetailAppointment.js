import React from "react";

const DetailAppointment = () => {
  return (
    <div className="mt-8 h-[570px]  rounded-lg p-[16px] bg-white">
      <h1 className="text-base  font-semibold">Upcoming Appointments</h1>
      <div className="flex flex-col gap-y-[24px]">
        <div className="mt-2 flex relative justify-center items-center ">
          <div className="flex justify-center items-center flex-col absolute top-10 left-0">
            <div className="w-[10px] mb-2   h-[10px]  rounded-full bg-[#FF9898]"></div>

            <div className="border-[.5px]  h-[90px] w-[0px] border-[#EDEBEB]"></div>
          </div>
          <div className="bg-[#FFF5F5] w-[380px] rounded-lg h-[101px]">
            <div></div>
          </div>
        </div>
        <div className="mt-2  flex relative justify-center items-center ">
          <div className="flex justify-center items-center flex-col absolute top-10 left-0">
            <div className="w-[10px] mb-2   h-[10px]  rounded-full bg-[#FFF598]"></div>

            <div className="border-[.5px]  h-[90px] w-[0px] border-[#EDEBEB]"></div>
          </div>
          <div className="bg-[#FFF5F5] w-[380px] rounded-lg h-[101px]">
            <div></div>
          </div>
        </div>
        <div className="mt-2  flex relative justify-center items-center ">
          <div className="flex justify-center items-center flex-col absolute top-10 left-0">
            <div className="w-[10px] mb-2   h-[10px]  rounded-full bg-[#98FFC1]"></div>

            <div className="border-[.5px]  h-[90px] w-[0px] border-[#EDEBEB]"></div>
          </div>
          <div className="bg-[#FFF5F5] w-[380px] rounded-lg h-[101px]">
            <div></div>
          </div>
        </div>
        <div className="mt-2  flex relative justify-center items-center ">
          <div className="flex justify-center items-center flex-col absolute top-10 left-0">
            <div className="w-[10px] mb-2   h-[10px]  rounded-full bg-[#98C7FF]"></div>
          </div>
          <div className="bg-[#FFF5F5] w-[380px] rounded-lg h-[101px]">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailAppointment;
