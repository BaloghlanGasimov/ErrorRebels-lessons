import React from 'react'

const SingleCard = ({image,title,category}) => {
  return (
    <div className='col-12 col-md-3' >

        <div className="card" >
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
            {category}
            </p>
            <a href="#" className="btn btn-primary">
                Go somewhere
            </a>
        </div>
        </div>

        

        
    </div>
  )
}

export default SingleCard