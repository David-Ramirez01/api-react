import React from 'react'

const Personajes = ({personajes = []}) => {
return (
    <div className='row'>
        {
            personajes.map((item,index) =>(
                <div key={index} className="col mb-4">
                    <div className="card mt-5" style={{ minWidth: "300px", maxWidth: "600px", minHeight: "300px", maxHeight: "600px", }} >
                        <img class="rounded mx-auto d-block" src={item.imageUrl} alt={item.name} style={{ minWidth: "200px" , maxWidth: "200px", minHeight: "200px", maxHeight: "200px",}}/>
                        <div className='card-body'>
                            <h5 className='card-title text-center'>{item.name}</h5>
                            <hr />
                            <p>Planeta: {item.originplanet}</p>
                            <p>Status: {item.status}</p>
                            <p>Rol: {item.role}</p>
                        </div>
                    </div>
                </div>
            ) )
        }
    </div>
)
}

export default Personajes