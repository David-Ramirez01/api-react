import React from 'react'

const Personajes = ({personajes = []}) => {
return (
    <div className='row'>
        {
            personajes.map((item,index) =>(
                <div key={index} className="col mb-4">
                    <div className="card mt-5" style={{ minWidth: "300px", maxWidth: "300px", minHeight: "350px", maxHeight: "350px", backgroundColor: 'lightblue' }} >
                        <img class=" container rounded mx-auto d-block mt-2" src={item.images[0]} alt={item.name} style={{ minWidth: "200px" , maxWidth: "200px", minHeight: "200px", maxHeight: "200px",}}/>
                        <div className='card-body'>
                            <h5 className='card-title text-center'>{item.name}</h5>
                            <hr />
                            <p style={{color:"black"}}>Afiliacion: {item.info.Afiliação}</p>
                        </div>
                    </div>
                </div>
            ) )
        }
    </div>
)
}

export default Personajes