import React from 'react'

const Beds = () => {

  const bedsStyle = {
    backgroundColor: "#ffc107",
    border: "none",
    borderRadius: "0.25rem",
    height: "38px"
    
  }

  return(
    <div className="row mx-auto mt-3">
      <label  className="col-12 my-auto p-0" htmlFor="cars">Sovplatser</label>
      <select id="cars" style={bedsStyle} className="col-6">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
  )
}
export default Beds