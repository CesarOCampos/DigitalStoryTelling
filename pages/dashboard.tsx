import Link from 'next/link'
import chpt1 from '../public/media/Thumbnails/chapt1.png'
import Image from 'next/image'
import thumb1 from '../public/media/chapt1.png'
import thumb2 from '../public/media/chapt2.png'
import thumb3 from '../public/media/chapt3.png'
import thumb4 from '../public/media/chapt4.png'
import thumb5 from '../public/media/chapt5.png'
import thumb6 from '../public/media/chapt6.png'
import thumb7 from '../public/media/chapt7.png'
import thumb8 from '../public/media/chpt8.png'
import { getDisplayName } from 'next/dist/shared/lib/utils'

function Dashboard(){
return(
    <>
    <div> {getDisplayName} ! </div>
    {console.log(getDisplayName)}
    <div className="video-lessons">Welcome to your story log</div>
    
    <div className = "Header"><h4>Please choose a Chapter</h4></div>
    
    <div className="vid-layout page-container">

    <section className="chpts-1-4">
      
    <a href={"./chapters/1"}>
    <button className='vid-button'>Chapter 1</button> 
    < div className='thumbnails'>
    <Image 
      src={thumb1}
      alt="intro"
      layout={'intrinsic'}
      height={300}
      width={300}
  />
  </div>
  </a>

<a href={"./chapters/2"}>
  <button className='vid-button'>Chapter 2</button>
  < div className='thumbnails'>
  <Image
  src={thumb2}
  alt="chpt2"
  layout={'intrinsic'}
  height={300}
  width={300}
  />
  </div>
 </a>

<a href={"./chapters/3"}>
  <button className='vid-button'>Chapter 3</button>
  < div className='thumbnails'>
  <Image 
  src={thumb3}
  alt="chpt3"
  layout={'intrinsic'}
  height={300}
  width={300}
  />
  </div>
 </a>

<a href={"./chapters/4"}>
  <button className='vid-button'>Chapter 4</button>
  < div className='thumbnails'>
  <Image
  src={thumb4}
  alt="chpt4"
  layout={'intrinsic'}
  height={300}
  width={300}
  />
  </div>
  </a>
  

</section>
<section className="chpts-5-8 pb-10">

<a href={"./chapters/5"}>
  <a className='m-'><button className='vid-button'>Chapter 5</button></a>
  < div className='thumbnails'>
  <Image 
  src={thumb5}
  alt="chpt5"
  layout={'intrinsic'}
  height={300}
  width={300}
  />
  </div>
  </a>

<a href={"../chapters/6"}>
  <button className='vid-button'>Chapter 6</button>
  < div className='thumbnails'>
  <Image 
  src={thumb6}
  alt="chpt6"
  layout={'intrinsic'}
  height={300}
  width={300}
  />
  </div>
  </a>
  
<a href={"./chapters/7"}>
  <button className='vid-button'>Chapter 7</button>
  < div className='thumbnails'>
  <Image
  src={thumb7}
  alt="chpt7"
  layout={'intrinsic'}
  height={300}
  width={300}
  />
  </div>
  </a>

<a href={"../chapters/8"}>
  <button className='vid-button'>Chapter 8</button>
  < div className='thumbnails'>
  <Image 
  src={thumb8}
  alt="chpt8"
  layout={'intrinsic'}
  height={300}
  width={300}
  />
  </div>
  </a>
    </section>   
    </div>
    </>
  )
}

export default Dashboard