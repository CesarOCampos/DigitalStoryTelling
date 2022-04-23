function ChapterDetails(){
    return(
        <>
<div className='vid-bg'>
    <div className='wrapper'>
      <h3>Lesson 1: Fundamentals of Python</h3>
      </div>

      <div className="size-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/f4q1RHCkYyg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
     <p>   
        <textarea className='transcript mr-6'cols={30} rows={30} readOnly>

        
  

        <embed src="/public/scripts/video1.txt"></embed>
        </textarea>
</p>
        </div>

<section className= "exercises">
  <p>Lets Practice!</p>
   </section>

  <div className='instructs'>

  
  </div>   
        </div>
        </>
    )
}
export default ChapterDetails