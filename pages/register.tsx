import Link from "next/link"
import Footer from './footer'

function register(){
  return(
    <>
    <nav className="nav-background" id="top"> 
      <Link href={"/"}>
        <a className="nav-spacing mr-4">
          <button className='navbar-buttons font-bold text-lg text-black'>Home</button>
        </a>
      </Link>
    </nav>
      <div className="page-color page-container">
        <form className="register-info-container">
            <div className="title-text">Register</div>
            <div className="block">
              <div className="block">
                <label className="block">First Name</label>
                <input className="input underline" type="text" placeholder="Enter First Name" required></input>
              </div>
              <div className="block">
                <label className="block pt-8">Last Name</label>
                <input className="input underline" type="text" placeholder="Enter Last name" required></input>
              </div>
              <div className="block">
                <label className="block pt-8">Email</label>
                <input className="input underline" type="password" placeholder="Enter Email" required></input>
              </div>
              <div className="block">
                <label className="block pt-8 ">Password</label>
                <input className="input underline " type="password" placeholder="Enter Password" required></input>
              </div>
              <div className="block">
                <label className="block pt-8">Repeat Password</label>
                <input className="input " type="password" placeholder="Retype Password" required></input>
              </div>
              <button className="login-button-layout login-button-style bg-[#1f56ec] m-6"><a>register</a></button>
            </div>
        </form>
      </div>
    <Footer/>
    </>
  )
};

export default register