import React from 'react'
import styled from 'styled-components'

export default function Register (props) {

  
  let btnTxt = 'Show Password'
  let passBoxType = 'password'
  let btnClasses = ['btn', 'm-1','btn-success']

  if (props.showPassword) {
    btnTxt = 'Hide Password'
    passBoxType = 'text'
    btnClasses.push('btn-danger')
  }

  const StyledButton = styled.button`
  display:${(props) => (props.flag === '0' ? "inline-block" : 'block')};
  padding:10px 5px;
  background-color:${props => props.bgcolor};
  border:none;
  color:white;
  margin:5px;
  width:${(props) => (props.flag === '0' ? "45%" : '100%')};
  `
  const StyledRegisterContainer = styled.div`
  width:70vw;
  &:hover{
  box-shadow:0px 0px 5px grey;
  }
  @media (min-width:0px) and (max-width:600px){
    width:200px
  }
  `



  return (
    <StyledRegisterContainer className='container card p-3 mt-2 register-container'>
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
                <button type='button' className={btnClasses.join(" ")} onClick={props.click} >{btnTxt}</button>
                <br /><br />
                <StyledButton type='button' bgcolor='Orange'  flag='0'  >Logout</StyledButton>
                <StyledButton type='button'  bgcolor='Green' flag='0' >Login with google</StyledButton>
                <StyledButton type='button'  bgcolor='blue' flag='1' >Login with Facebook</StyledButton>
        </form>
    </StyledRegisterContainer>
  )
}
