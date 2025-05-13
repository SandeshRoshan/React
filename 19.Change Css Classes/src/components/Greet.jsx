import React from 'react'

export default function Greet(props) {
  return (
    <div className='container card p-3 mt-2 register-container'>
        <h3 className='text-center'>{props.name}</h3>
        <hr />
        <h3 className='text-center'>Thank You for joining us.</h3>
        <hr />
        <p className='text-center'>Verification code is sent to your email {props.email}</p>

    </div>
  )
}
