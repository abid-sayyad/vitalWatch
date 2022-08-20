import React from "react";
import DashboardCard from "../components/DasboardCard/index";

const Home: React.FC = () => {
  return (
    <div className="">
      <input
        type="search"
        placeholder="Search by ID"
        className="w-[300px] sm:w-[600px] sm:my-10 my-3 mx-auto border text-sm rounded-lg  block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-mainHighlight focus:border-mainHighlight"
      />
      <section className="flex justify-around mb-10">
        <div className="text-green-500  flex items-center justify-center ">
          <h3 className="mx-2  text-2xl">50</h3>
          <p className=" text-xl">Good</p>
        </div>

        <div className="text-yellow-500  flex items-center justify-center ">
          <h3 className="mx-2   text-2xl">10</h3>
          <p className=" text-xl">Near danger</p>
        </div>

        <div className="text-red-500  flex items-center justify-center  ">
          <h3 className="mx-2 text-2xl">3</h3>
          <p className=" text-xl">Danger</p>
        </div>
      </section>
      <section className="grid grid-cols-2 sm:grid-cols-5 col gap-10">
        <DashboardCard
          alias="Michael Scarn"
          id="451346352745"
          status="danger"
        />
        <DashboardCard alias="Jake Peralta" id="74367457467" status="warn" />
        <DashboardCard alias="Ted Mosby" id="5474357567567" status="good" />
        <DashboardCard
          alias="Barney Stintson"
          id="7347367467"
          status="danger"
        />
        <DashboardCard alias="Joey Tribbiani" id="76436745674" status="good" />
        <DashboardCard
          alias="Chandler Bing"
          id="746746743674567"
          status="danger"
        />
        <DashboardCard alias="Saul Goodman" id="46743764357457" status="warn" />
      </section>
    </div>
  );
};

export default Home;
