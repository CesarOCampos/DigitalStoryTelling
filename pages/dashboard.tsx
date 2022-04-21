import Link from 'next/link'
import chpt1 from '../public/media/Thumbnails/chapt1.png'
import chapter1 from '../public/media/chapt1.png'
import Image from 'next/image'

function dashboard(){
return(
    <>
    <nav className="nav-background" id="top"> 
        
        <div className="nav-sections">
          <Link href={"./login"}>
            <a className="nav-spacing mr-4"><button className='navbar-buttons font-bold text-lg text-black'>Login</button></a>
          </Link>
          
          <Link href={"./register"}>
            <a className="nav-spacing mr-2"><button className='navbar-buttons font-bold text-lg text-black'>Register</button></a>
          </Link>

          <Link href={"./videos"}>
            <a className="nav-spacing mr-6"><button className='navbar-buttons font-bold text-lg text-black'>Videos</button></a>
          </Link>
        </div>

      </nav>
    <div className="video-lessons">Welcome to your story log</div>
    
    <div className = "Header"><h4>Please choose a Chapter</h4></div>
    
    <div className="vid-layout">

    <section className="chpts-1-4">
      
    <a href={"./videos"}>
            <button className='vid-button'>CHAPTER 1</button> 
            <Image src={chapter1} alt="Chapter 1" layout="responsive" width="900" height="900"/>
          </a>

          {/* <a href={"./video2"}>
            <button className='vid-button'>CHAPTER 2</button>
            <img src="chapt2.png" width="200" height="300"></img> 
          </a>

          <a href={"./video3"}>
            <button className='vid-button'>CHAPTER 3</button>
            <img src="chapt3.png" width="200" height="300"></img>
          </a>

          <a href={"./video4"}>
            <button className='vid-button'>CHAPTER 4</button>
            <img src="chapt4.png" width="200" height="300"></img>
          </a>
  

          </section>
          <section className="chpts-5-8">
          <a href={"./video5"}>
            <button className='vid-button'>CHAPTER 5</button>
            <img src="chapt5.png" width="200" height="300"></img>
          </a>

          <a href={"./video6"}>
            <button className='vid-button'>CHAPTER 6</button>
            <img src="chapt6.png" width="200" height="300"></img>
          </a>

          <a href={"./video7"}>
            <button className='vid-button'>CHAPTER 7</button>
            <img src="chapt7.png" width="200" height="300"></img>
          </a>

          <a href={"./video8"}>
            <button className='vid-button'>CHAPTER 8</button>
            <img src="chapt8.png" width="200" height="300"></img> 
          </a>
*/}
    </section>   
    </div>
    </>
)
}

export default dashboard