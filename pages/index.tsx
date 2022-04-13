import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from './footer';
import Link from 'next/link'
import snake from '../public/media/image.png'

const Home: NextPage = () => {
  return (
    <div>
      <nav className="nav-background" id="top"> 
        
        <div className="nav-sections">
          <Link href={"./login"}>
            <a className="nav-spacing mr-4"><button className='navbar-buttons font-bold text-lg text-black'>Login</button></a>
          </Link>
          
          <Link href={"./register"}>
            <a className="nav-spacing mr-2"><button className='navbar-buttons font-bold text-lg text-black'>Register</button></a>
          </Link>
        </div>

      </nav>

      <section className="homepage-background pb-10">
        
        <div className='title-image-container'>
          <Image
            src={snake}
            layout={"intrinsic"}
            alt="title Image"
          />
        </div>

            <h2 className="homepage-intro-text title-layout"> Welcome!</h2>
      <div className="title-layout"> Learn to Program with Python! </div>
          <div className="homepage-intro-text">
            <h2>Welcome!</h2> <br />
            Start learning Python through watching videos and practicing code all in the browser!<br />
            Just simply register your account, login and start watching videos. <br />
            These are not regular tutorials, they teach you in a easy to understand and fun story-like way.</div>

      <div className="button-layout">
        {/* <a  className="button-style bg-[#2bd154ca] mr-2" href="videos"><button className="button-style">Register</button></a>
        <a  className="button-style bg-[#4DA2F7] ml-2" href="videos"><button className="button-style">Login</button></a> */}
  </div>
  </section>

  <section className="bg-[#fc9255f6] pb-20">
      <div className="title-layout">Programming Resources</div>
      <div className="text-layout">Programming Tools to get you started</div>
      
      <div className="button-layout pb-6">
          <a  className="button-style bg-[#59CD90] m-2 " href="https://www.python.org/"><button className="button-style">Python</button></a>
      </div>

      <div className="button-layout">
          <a  className="button-style bg-[#E62FFA] m-2" href="https://www.sublimetext.com/"><button className="button-style">Sublime text</button></a>
          <a  className="button-style bg-[#72D8FD] m-2" href="https://code.visualstudio.com/"><button className="button-style">VS Code</button></a>
          <a  className="button-style bg-[#F6BB80] m-2" href="https://www.jetbrains.com/pycharm/"><button className="button-style">Pycharm</button></a>
          <a  className="button-style bg-[#FAFAAC] m-2" href="https://developer.apple.com/xcode/"><button className="button-style">XCode- For Mac</button></a>
      </div>
    </section>

    <section className="homepage-background">
        <div className="title-layout" id="About">About</div>

    </section>

<<<<<<< Updated upstream
        <Footer></Footer>

    </div>
=======
    <section className="Footer">
    <img src="../media/uh.png" alt="title image" className="uh-image-center"/>
       
        <a className="footer-text" href="#top">Go to top of page</a>
        
      <div className="col1">
          <h4>Resources</h4>
          <ul>
              <li><a href ="About Us"></a></li>
              <li><a href ="Curriculum"></a></li>
              <li><a href ="Privacy Policy"></a></li>
          </ul>
          </div> 
          <div className="col2">
          <h4>Contact Us</h4>
          <ul>
              <h4>Dr. Nouhad Rizk</h4>
              <h4>2700 Calhoun Rd</h4>
              <h4>Houston, Tx, 77070</h4>
          </ul>
          </div> 
          <div className="col3">
          <h4>Created By</h4>
          <ul>
              <li><a href ="Behind the Screen"></a></li>

          </ul>
          </div> 

          <div className="col4">
          <h4>Report Issues</h4>
          <ul>
              <li><a href ="Help"></a></li>
         </ul>
          </div> 
          </section>
    </>
>>>>>>> Stashed changes
  )
};

export default Home


