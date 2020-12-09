// Functional Comp with Arrow Fn
import React from 'react'

const Program = (props) => { // props can be received 

  // props are object
  // props are read-only
  // props can have children
  // recommended name to receive props is props
  console.log(props);

  const watchThisHandler = (e) => {
    console.log(e);
    e.target.innerText = 'Watching...';
  }

  return (
    <div className="card text-left mb-3">
      <div className="card-header">
        Featured
        <span className="badge badge-warning float-right">{props.category}</span>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.children}</p>
        <button className="btn btn-primary" onClick={watchThisHandler}>Watch this...</button>
      </div>
      <div className='card-footer text-muted'>
        { props.time }
      </div>
    </div>
  )
}

export default Program;
