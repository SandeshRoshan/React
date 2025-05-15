import React from 'react'

export default function Register (props) {

  
  let btnTxt = 'Show Password'
  let passBoxType = 'password'
  let btnClasses = ['btn', 'm-1','btn-success']

  if (props.showPassword) {
    btnTxt = 'Hide Password'
    passBoxType = 'text'
    btnClasses.push('btn-danger')
  }

  

  return (
    <div className='container card p-3 mt-2 register-container'>
        <h1 className='text-center'>Login Here</h1> 
        <div className='text-center'>
          <button type='button' className='bt google m-2' onClick={props.google} >Login via Google</button>
          <button type='button' className='bt fb m-2' onClick={props.facebook} >Login via Facebook</button>
        </div>
        <div className='text-center'>
            <hr className='hrr' />
            <label htmlFor="or" className='or p-1'>OR</label>
    
            <hr className='hrr' />
        </div>
        <form onSubmit={props.submit}>
            <div className='form-group'>
                <label htmlFor="email">Email </label>
                <input autoComplete='true' type="text" name="email" id="email" required className='form-control'/>
                <br />
                <label htmlFor="password">Password </label>
                <input autoComplete='true' type={passBoxType} name="password" id="password" required className='form-control'/>
            </div>
            <br />
            <div className='text-center'>
                <button type='submit' className='btn btn-primary m-1'>Login</button>
                <button type='button' className={btnClasses.join(" ")} onClick={props.click} >{btnTxt}</button>
            </div>
            <label htmlFor="text">Don't have an account? <a href="#" onClick={props.page}>Signup</a></label>
        </form>
    </div>
  )
}
