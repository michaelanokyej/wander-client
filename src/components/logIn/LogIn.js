import React from 'react'

class Login extends React.Component {
  render() {
    return (
      <main>
         <header role="banner">
			  <h2>Welcme Back!</h2>
        <h4>Please log in</h4>
		    </header>
      <form class='signup-form'>
        <div>
          <label for="username">Email</label>
          <input type="email" name='username' id='username' />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" name='password' id='password' />
        </div>
        <button type='submit'>Log in</button>
      </form>
    </main>
    );
  }
}

export default Login;