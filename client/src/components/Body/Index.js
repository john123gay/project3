import React from "react";

const Body = (props) => {
  return (
    <div className="container-fluid">
        <div className="col">
          <h1 className="pull-left header">Plant Water</h1>
          <div className="pull-right text-center">
          <h3>NeXt Watering</h3>
          <span>{props.time}</span>
          <span><p>status bar</p></span>
          <button onClick={() => props.out()}>Logout</button>
          <button onClick={() => props.getDates()}>Dates</button>
          <div className="col">
          <h1> Water Log</h1>
          <h4 className="text-white px-5 mx-5" dangerouslySetInnerHTML={{__html:props.true}}></h4>
          </div>
        </div>
      </div>
      <ul>
        <li><span  onClick={() => props.buzz()} className="col-sm"><i className="fas fa-water water"></i></span></li>
        <li><i className="fas fa-signal graph"></i></li>
      </ul>
    </div>
  );
};

export default Body;