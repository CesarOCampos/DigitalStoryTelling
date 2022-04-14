import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from './footer';
import Link from 'next/link'
import snake from '../public/media/image.png'

const Home: NextPage = () => {
  return (
    <>
      <div className="nav-background" id="top"> 
        <div className="nav-sections">
          <Link href={"./login"}>
            <a className="nav-spacing mr-4">
              <button className='navbar-buttons font-bold text-lg text-black'>Login</button>
            </a>
          </Link>
          <Link href={"./register"}>
            <a className="nav-spacing mr-2">
              <button className='navbar-buttons font-bold text-lg text-black'>Register</button>
            </a>
          </Link>
        </div>
      </div>
      <section className="homepage-background pb-10">
        <div className='title-image-container pt-2'>
          <Image
            src={snake}
            alt="title Image"
            layout={'intrinsic'}
            height={600}
            width={600} />
        </div>
        <h2 className="homepage-intro-text title-layout"> Welcome! </h2>
        <p className="title-layout"> Learn to Program with Python! </p>
        <p className="homepage-intro-text">Start learning Python through watching videos and practicing code all in the browser!</p>
        <p className="homepage-intro-text mt-3">Just simply register your account, login and start watching videos. </p>
        <p className="homepage-intro-text mt-3">These are not regular tutorials, they teach you in a easy to understand and fun story-like way.</p> 
      </section>

      <section className="bg-[#fc9255f6] pb-10">
      <div className="title-layout">Programming Resources</div>
      <div className="text-layout text-style">Programming Tools to get you started</div>
      <div className="button-layout pb-6">
        <a className='mb-4' href="https://www.python.org/"><button className="buttons bg-[#59CD90]">Python</button></a>
      </div>
      <div className="button-layout">
        <a className='ml-10' href="https://www.sublimetext.com/"><button className="buttons bg-[#E62FFA]">Sublime text</button></a>
        <a className='ml-10' href="https://code.visualstudio.com/"><button className="buttons bg-[#72D8FD]">VS Code</button></a>
        <a className='ml-10' href="https://www.jetbrains.com/pycharm/"><button className="buttons bg-[#F6BB80]">Pycharm</button></a>
        <a className='ml-10' href="https://developer.apple.com/xcode/"><button className="buttons bg-[#FAFAAC]">XCode- For Mac</button></a>
      </div>
    </section>
    <section className="homepage-background pb-10">
      <div className="title-layout" id="About">About</div>
      <div className='text-center pb-8 text-style'>UH students who worked on the website:</div>
      <div className='about-section-center'>
        <div className='about-section'> 
          <a>Ashley Odstrcil</a>
          <a>Loveleen Thomas</a>
          <a>Hussein Alfartosy</a>
          <a>Tarun Appannagari</a>
        </div>
        <div className='about-section'> 
          <a>Juanita Correa</a>
          <a>Sonny Ha</a>
          <a>Lena Luc</a>
          <a>Annabella Tao</a>
        </div>
        <div className='about-section'> 
          <a>Hima Vadakekara</a>
          <a>Rozhin Zayen</a>
          <a>Santos Garcia</a>
          <a>Cesar Campos</a>
        </div>
        <div className='about-section'> 
          <a>Brianna McDermot</a>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
};

export default Home
