import React , {useState} from 'react'
import {inputSize} from '../css/checkBoxStyle'


const CheckBoxes = () => {
  return (

    <div className="row px-3 py-5">
    <div className="row col-6 col-md-4 my-2  mx-auto">
      <input style={inputSize}className="col-3"type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      <label className="col-9 px-2" htmlFor="vehicle1">tvättmaskin</label>
    </div>
    <div className="row col-6 col-md-4 my-2 mx-auto">
      <input style={inputSize} className="col-3"type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
      <label className="col-9 px-2" htmlFor="vehicle2">Wifi</label>
    </div>
    <div className=" row col-6 col-md-4 my-2 mx-auto">
      <input style={inputSize} className="col-3"type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
      <label className="col-9 px-2" htmlFor="vehicle3">AC</label>
    </div>

    <div className="row col-6 col-md-4 my-2 mx-auto">
      <input style={inputSize}className="col-3"type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      <label className="col-9 px-2" htmlFor="vehicle1">Balkong</label>
    </div>
    <div className="row col-6 col-md-4 my-2 mx-auto">
      <input style={inputSize} className="col-3"type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
      <label className="col-9 px-2" htmlFor="vehicle2">Badkar</label>
    </div>
    <div className=" row col-6 col-md-4 my-2 mx-auto">
      <input style={inputSize} className="col-3"type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
      <label className="col-9 px-2" htmlFor="vehicle3">TV</label>
    </div>

    </div>

  )
}

export default CheckBoxes