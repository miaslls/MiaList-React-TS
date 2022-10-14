import "@styles/SignIn.css";

function SignIn() {
  return (
    <>
      <div className="login-outer-container">
        <main className="login-inner-container">
          <h1>
            Mia<span>List</span>
          </h1>

          <form className="login-form">
            <input type="text" name="username" placeholder="username" />
            <input type="password" name="password" placeholder="password" />

            <div className="login-button clickable">
              <i className="bi bi-check-circle"></i>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}

export default SignIn;
