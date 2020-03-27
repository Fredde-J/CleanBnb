import React from 'react'

const Beds = () => {

  const bedsStyle = {
    backgroundColor: "#ffc107",
    borderRadius: "0.25rem",
    height: "38px"
    
  }

  return(
    <div className="row align-middle">
      <label  className="col align-middle" htmlFor="cars">Sovplatser</label>
      <select id="cars" style={bedsStyle} className="col my-4">
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