import React from 'react'

const Channel = (props ) => {

  console.log(props);
  return (
    <div className='col-md-3'>
      <div className="card">
        <img src={props.imageURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.info}</p>
          <button className="btn btn-primary" onClick={props.addToFav}>Add to Fav</button>
        </div>
      </div>
    </div>
  )
}

export default Channel
