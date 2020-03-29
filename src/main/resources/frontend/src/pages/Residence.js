import React from 'react'

const cardStyle = {
  // width: "90%",
  // minHeight: "80vh",
  // maxHeight: "1000px",
  borderRadius: "10px",

  
}
const pStyle1 = {
  fontSize: "1.4em"
}

const pStyle2 = {
  fontSize: "1em"
}


const Residence = () => {
  return ( 
    <div style={cardStyle}className="Card row col-11 col-md-10 bg-warning mx-auto mt-3">
      <img className="card-img-top m-3" src="/images/lägenhet1.jpg" alt=""></img>

      <div className="card-body">

        <div className="row">
          <p style={pStyle1}className="col m-0">Malmö</p>
          <p style={pStyle1}className="text-right col m-0">2000 - 4000</p>
        </div>
        <div className="row">
          <p style={pStyle2} className="col-5 m-0 ">Storgatan 12</p>
          <p style={pStyle2} className="text-right col-7 m-0">23 Mars - 22 Mars</p>
        </div>

        
          <p className="my-4">
            In the heart of the 7Th District... One of the best and typical
            "Quartier parisien"... Near The Eiffel Tower, Invalides Dome, Rodin museum,
            Champs de Mars park and the famous and typical parisian Rue CLER market...
            Luxury studios for rental...
          </p>

          <p></p>
        
      </div>
        
    
       

    </div>
   );
}
 
export default Residence;