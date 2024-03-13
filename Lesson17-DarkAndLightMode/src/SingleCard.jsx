import React from 'react'
import { Link } from 'react-router-dom'

const SingleCard = ({id,price,image,title,category}) => {
  return (
    <div className='col-12 col-md-3' >

        <div className="card" >
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
            {category}
            </p>
            <p className="card-text">
            {price}
            </p>
            <Link to={`/shop/${id}`}>
            
            <a className ="btn btn-primary">
                Go somewhere
            </a>
            </Link>
        </div>
        </div>

        

        
    </div>
  )
}

export default SingleCard