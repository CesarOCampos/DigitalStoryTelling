import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from './footer'


const Home: NextPage = () => {
  return (
    <div>
      <nav className="nav-background" id="top"> 
    <div className="nav-sections">
        <a className="nav-spacing" href="videos">Videos</a>
        <a className="nav-spacing" href="#About">About</a>
        <a className="nav-spacing" href="#Team">Meet the Team</a>
    </div>
    <div className="nav-sections">
        <a className="nav-spacing" href="#">Login</a>
        <a className="nav-spacing" href="#">Register</a>
    </div>
</nav>

<section className="homepage-background pb-10">
<img src="../media/image.png" alt="title image" className="image-center "/>
    <div className="title-layout"> Learn to Program with Python</div>
    <div className="homepage-intro-text">Welcome! Start learning Python through watching videos and practicing code all in the browser! Just simply register your account, login and start watching videos. These are not regular tutorials, they teach you in a easy to understand and fun story-like way.</div>

    <div className="button-layout">
        <a  className="button-style bg-[#2bd154ca] mr-2" href="videos"><button className="button-style">Register</button></a>
        <a  className="button-style bg-[#4DA2F7] ml-2" href="videos"><button className="button-style">Login</button></a>
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
</div>
  )
};
export default Home


