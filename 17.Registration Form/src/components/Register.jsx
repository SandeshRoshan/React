import React from 'react'

export default function Register (props) {
  return (
    <div className='container card p-3 mt-2 register-container'>
        <h1 className='text-center'>Registration Form</h1>
        <form onSubmit={props.submit}>
            <div className='form-group'>
                <label htmlFor="name">Name </label>
                <input autoComplete='true' type="text" name="name" id="name" required className='form-control'/>
                <br />

                <label htmlFor="email">Email </label>
                <input autoComplete='true' type="text" name="email" id="email" required className='form-control'/>
                <br />
                <label htmlFor="password">Password </label>
                <input autoComplete='true' type="text" name="password" id="password" required className='form-control'/>
            </div>
            <br />
                <button type='submit' className='btn btn-primary'>Register</button>
        </form>
    </div>
  )
}
