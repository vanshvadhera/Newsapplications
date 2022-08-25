import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

const Spinnerclass =() => {
  return (
    <div className="d-flex justify-content-evenly">
      <Spinner varient='dark' animation="grow" />
      <Spinner variant = 'success' animation='grow' />
      <Spinner variant='primary' animation="grow" />
      <Spinner variant='danger' animation="grow" />
    </div>
  )
}
export default Spinnerclass