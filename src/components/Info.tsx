import logo from ".././assets/password.gif";

const Info = () => {
  return (
    <>
      <div className='gif'>
        <img src={logo} alt='Password Logo' className='gif-img' />
      </div>
      <h1 className='app-heading'>PASSWORD GENERATOR</h1>
      <p className='tagline'>
        Create strong and secure passwords to keep your account safe online.
      </p>
    </>
  );
};

export default Info;
