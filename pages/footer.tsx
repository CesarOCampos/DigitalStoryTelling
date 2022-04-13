import type { NextPage } from 'next'
import Image from 'next/image'
import uhImage from '../public/media/uh.png'

const footer = () => (
<footer className="footer">
    <div className='ml-3 mr-3 mt-4' >
          <Image
            src={uhImage}
            layout={"intrinsic"}
            alt="title Image"
            height={60}
            width={120}
          />
        </div>

    <section className="ml-3 mr-3 mt-4 font-bold text-lg">
        <a className="">Designed by: The Computer Science students of the University of Houston</a>
    </section>

    <section className="ml-3 mr-3 mt-4 font-bold text-lg">
        <a className=""> Contact Us: njrizk@uh.edu </a>
    </section>

        <a className="ml-3 mr-3 mt-4 font-bold underline text-lg" href="#top">Go to top of page</a>
</footer>
    
      );

      export default footer;