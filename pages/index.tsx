import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <nav className="nav-background" id="top"> 
    <div className="nav-sections">
        <a className="nav-spacing" href="videos">Videos</a>
        <a className="nav-spacing" href="#About">About</a>
    </div>
    <div className="nav-sections">
        <a className="nav-spacing" href="login">Login</a>
        <a className="nav-spacing" href="#">Register</a>
    </div>
</nav>

<section className="homepage-background pb-10">
<img src="../media/image.png" alt="title image" className="image-center "/>
    <div className="title-layout"> Learn to Program with Python</div>
    <div className="homepage-intro-text">Welcome! Start learning Python through watching videos and practicing code all in the browser! Just simply register your account, login and start watching videos. These are not regular tutorials, they teach you in a easy to understand and fun story-like way.</div>

    <div className="button-layout">
        <a  className="button-style bg-[#D5573B] mr-2" href="videos"><button className="button-style">Register</button></a>
        <a  className="button-style bg-[#6AB487] ml-2" href="videos"><button className="button-style">Login</button></a>
</div>
</section>

<section className="bg-[#E53C38] pb-20">
    <div className="title-layout">Programming Resources</div>
    <div className="text-layout">Programming Tools to get you started</div>
    
    <div className="button-layout pb-6">
        <a  className="button-style bg-[#59CD90] m-2 " href="https://www.python.org/"><button className="button-style">Python</button></a>
    </div>

    <div className="button-layout">
        <a  className="button-style bg-[#F79D84] m-2" href="https://www.sublimetext.com/"><button className="button-style">Sublime text</button></a>
        <a  className="button-style bg-[#F79D84] m-2" href="https://code.visualstudio.com/"><button className="button-style">VS Code</button></a>
        <a  className="button-style bg-[#F79D84] m-2" href="https://www.jetbrains.com/pycharm/"><button className="button-style">Pycharm</button></a>
        <a  className="button-style bg-[#F79D84] m-2" href="https://developer.apple.com/xcode/"><button className="button-style">XCode- For Mac</button></a>
    </div>
</section>

<section className="homepage-background">
    <div className="title-layout" id="About">About</div>
    <img src="../media/uh.png" alt="title image" className="uh-image-center"/>
    <div className="text-layout">This project was created by team codeTogether for COSC 4397:Consulting Clinic under the supervision of Dr.Rizk at the University of Houston, Texas.</div>
    <div className="names-text-layout">Team Leaders: Ashley Odstrcil and Loveleen Thomas</div>
    <div className="names-text-layout">Team Members:</div>
    <div className="names-text-layout">Hussein Alfartosy</div>
    <div className="names-text-layout">Tarun Appannagari</div>
    <div className="names-text-layout">Juanita Correa</div>
    <div className="names-text-layout">Sonny Ha</div>
    <div className="names-text-layout">Lena Luc</div>
    <div className="names-text-layout">Annabella Tao</div>
    <div className="names-text-layout">Hima Vadakekara</div>
    <div className="names-text-layout">Rozhin Zayen</div>
</section>

<div className="footer">
    <a className="footer-text" href="#top">Go to top of page</a>
</div>
    </div>
  )
}

export default Home
