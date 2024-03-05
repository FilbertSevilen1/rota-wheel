import car1 from "../assets/cars/car.webp";
import car2 from "../assets/cars/car2.webp";
import car3 from "../assets/cars/car3.webp";
import car4 from "../assets/cars/car4.webp";
import car5 from "../assets/cars/car5.webp";
import wheel1 from "../assets/wheels/2024 02 16 - photo rota/DPT/DPT_17x8_48_10x114x100_73_HYPER BLACK/plain/DSCF7638.jpg";
import wheel2 from "../assets/wheels/2024 02 16 - photo rota/MXR/MXR-R2 18_18x11_20_5x114_73_RL HYP BLK/plain/DSCF7494.jpg";
import wheel3 from "../assets/wheels/2024 02 16 - photo rota/FIVE STAR OFF/FIVE STAR OFF_16x8_10_6x139.7_110_BRONZE/plain/DSCF7408.jpg";
import wheel4 from "../assets/wheels/2024 02 16 - photo rota/G-FORCE/G-FORCE_17x9_42_5x100_73_HYPER BLACK/plain/DSCF7467.jpg";
import wheel5 from "../assets/wheels/2024 02 16 - photo rota/FIGHTER/FIGHTER 10H 1670_16X7_40_10X114.3X100_73_HYPER SILVER IMP1/plain/DSCF8174.jpg"
import wheel6 from '../assets/wheels/2024 02 16 - photo rota/D2/D2_16x7_40_5x114_73_RL CARBON FIBER/plain/DSCF7894 1.jpg';
import wheel7 from '../assets/wheels/2024 02 16 - photo rota/ATLAS 1/ATLAS 1 17_17x8.5_4_5x139.7_106.1_ RL YMH BLK/plain/DSCF7734 1.jpg'
import wheel8 from '../assets/wheels/2024 02 16 - photo rota/CIRCUIT 8/CIRCUIT 8_15x6.5_38_8x100x100_67.1_BRONZE/plain/DSCF7681.jpg'
import React, { useState } from "react";
function TwoD() {
  const [wheel, setWheel] = useState(wheel1);
  const [listWheel, setListWheel] = useState([
    wheel1,
    wheel2,
    wheel3,
    wheel4,
    wheel5,
    wheel6,
    wheel7,
    wheel8,
  ])
  const [listCar, setListCar] = useState([
    {
      carImage: car1,
      carTemplate:0,
    },
    {
      carImage: car2,
      carTemplate:0,
    },
    {
      carImage: car3,
      carTemplate:1,
    },
    {
      carImage: car4,
      carTemplate:1,
    },
    {
      carImage: car5,
      carTemplate:0,
    },
  ])
  const [car, setCar] = useState(car1);
  const [type, setType] = useState(0);
  const [menu, setMenu] = useState(0);

  const setCarImage = (img, type) => {
    if (type == 0) {
      setCar(img);
      setType(0);
    } else {
      setCar(img);
      setType(1);
    }
  };

  const generateWheelList = () =>{
    if(listWheel){
      return listWheel.map((wheel,index)=>{
        return  <button
        className="my-4 shadow-md mx-4 rounded-xl transition-all active:scale-95 font-bold"
        onClick={() => setWheel(wheel)}
      >
        <img src={wheel} className="w-32 h-32 rounded-xl"></img>
      </button>
      })
    }
  }

  const generateCarList = () =>{
    if(listCar){
      return listCar.map((car,index)=>{
        return  <button
        className="my-4 shadow-md mx-4 rounded-xl transition-all active:scale-95 font-bold bg-black"
        onClick={() => setCarImage(car.carImage, car.carTemplate)}
      >
        <img src={car.carImage} className="w-48 h-32 rounded-xl contain"></img>
      </button>
      })
    }
  }

  return (
    <div className="w-full h-screen flex flex-col overflow-x-scroll items-start md:items-center">
      <div className="mt-[-150px] w-[900px] relative">
        <div className=" mb-36">
          <img
            src={car}
            className=" w-full car shadow-md mt-4 rounded-2xl"
          ></img>
          {type == 0 ? (
            <div className=" mt-[-234px] flex justify-between h-auto mx-auto relative">
              <img
                src={wheel}
                className="flex w-[7.2rem] rounded-full relative ml-[155px] wheels"
              ></img>
              <img
                src={wheel}
                className="flex w-[7.2rem] rounded-full relative mr-[173px] wheels"
              ></img>
            </div>
          ) : (
            <div className=" mt-[-234px] flex justify-between h-auto mx-auto relative">
              <img
                src={wheel}
                className="flex w-[7.2rem] rounded-full relative ml-[202px] wheels"
              ></img>
              <img
                src={wheel}
                className="flex w-[7.2rem] rounded-full relative mr-[189px] wheels"
              ></img>
            </div>
          )}
        </div>
        <div className="w-full h-12 flex justify-between">
          <button
            onClick={() => setMenu(0)}
            className={`${
              menu == 0 ? "bg-blue-400 text-white font-bold" : ""
            }w-full transition-all w-1/2 text-xl active:scale-95 shadow-md`}
          >
            Wheels
          </button>
          <button
            onClick={() => setMenu(1)}
            className={`${
              menu == 1 ? "bg-blue-400 text-white font-bold" : ""
            }w-full transition-all w-1/2 text-xl active:scale-95 shadow-md`}
          >
            Cars
          </button>
        </div>
        {menu == 0 ? (
          <div className="flex flex-wrap justify-center border-2 border-gray-200 p-4">
            {generateWheelList()}
          </div>
        ) : (
          <div className=" flex flex-wrap justify-center border-2 border-gray-200 p-4">
            {generateCarList()}
          </div>
        )}
      </div>
    </div>
  );
}

export default TwoD;
