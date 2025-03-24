import React from 'react';

export default function Square(props) {
  return (
    <div 
      onClick={props.onClick}
      className=" w-[50%] h-30 flex items-center justify-center border-1 border-white ">
      <h1 className="text-white font-bold">  {props.value} </h1>
    </div>

  );
}
