import React from 'react'

class SignUp extends React.Component {
  render() {
    return (
      <main>
         <header role="banner">
			  <h2>Sign Up!</h2>
		    </header>
      <form class='signup-form'>
        <div>
          <label for="first-name">First name</label>
          <input placeholder='First name' type="text" name='first-name' id='first-name' />
        </div>
        <div>
          <label for="last-name">Last name</label>
          <input placeholder='Last name' type="text" name='last-name' id='last-name' />
        </div>
        <div>
           <label for="birthday">Birthday</label>
          <input type="date" name='birthday' id='birthday' placeholder='MM/DD/YYYY'/>
        </div>
        <div>
          <label for="username">Email</label>
          <input type="email" name='username' id='username' />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" name='password' id='password' />
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </main>
    );
  }
}

export default SignUp;