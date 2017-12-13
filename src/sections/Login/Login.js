import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const LoginPageContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
`

const loginFormHandler = (event, context) => {
  event.preventDefault()

  context.history.push('/dashboard')
}

const Login = (context) => (
  <LoginPageContainer>
    <div className='row'>
      <div className='col s12 m6 offset-m3'>

        <div className='card'>
          <div className='card-content'>
            <span className='card-title'>Login</span>
            <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>

            <form
              onSubmit={(event) => loginFormHandler(event, context)}
              style={{margin: '40px 0'}}
            >

              <div className='input-field'>
                <input
                  className='validate'
                  id='email'
                  type='email'
                />
                <label htmlFor='last_name'>Email</label>
              </div>

              <div className='input-field'>
                <input
                  className='validate'
                  id='password'
                  type='password'
                />
                <label htmlFor='last_name'>Password</label>
              </div>

              <div className='input-field'>
                <button
                  className='btn waves-effect waves-light'
                  type='submit'
                >Login</button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </div>
  </LoginPageContainer>
)

Login.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired
  })
}

export default Login
