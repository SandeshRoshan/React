import React from 'react'

export default function Register (props) {

  const btnStyle = {
    backgroundColor:'green',
    color:'white',
  }
  let btnTxt = 'Show Password'
  let passBoxType = 'password'

  if (props.showPassword) {
    btnStyle.backgroundColor = 'red'
    btnTxt = 'Hide Password'
    passBoxType = 'text'
  }

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
                <input autoComplete='true' type={passBoxType} name="password" id="password" required className='form-control'/>
            </div>
            <br />
                <button type='submit' className='btn btn-primary m-1'>Register</button>
                <button type='button' className='btn m-1' style={btnStyle}onClick={props.click} >{btnTxt}</button>
        </form>
    </div>
  )
}
