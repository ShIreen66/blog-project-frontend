import React from 'react'

const SignIn = () => {
  return (
    <>
    <main>
      <div className="left">
        <h1>Registration</h1>
        <form action="">
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button>Login</button>
        </form>
      </div>
      <div className="right">
        <h1>Welcome Back!</h1>
        <p>Already have an account</p>
        <button>Login</button>
      </div>
    </main>
    </>
  )
}

export default SignIn