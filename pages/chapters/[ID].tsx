import {links} from '../../data/links'
import Dashboard from '../dashboard';
import { useRouter } from 'next/router'
import { useAuth } from '../../context/AuthContext';


export default function Chapters(){
    const router = useRouter()
    const chapterId = router.query.ID
    var link
    var hello
    if (chapterId == '1'){
        link = 'https://www.youtube.com/embed/f4q1RHCkYyg'
        hello = "Lesson 1"
    }
    if (chapterId == '2'){
        link = 'https://www.youtube.com/embed/JOQpuR-3GMQ'
        hello = "Lesson 2"
    }
    if (chapterId == '3'){
        link = 'https://www.youtube.com/embed/5fDdWR4e80k'
        hello = "Lesson 3"
    }
    if (chapterId == '4'){
        link = 'https://www.youtube.com/embed/OaK24pcfNZs'
        hello = "Lesson 4"
    }
    if (chapterId == '5'){
        link = 'https://www.youtube.com/embed/PA3kicE2I7g'
        hello = "Lesson 5"
    }
    if (chapterId == '6'){
        link = 'https://www.youtube.com/embed/oqMZJALlOko'
        hello = "Lesson 6"
    }
    if (chapterId == '7'){
        link = 'https://www.youtube.com/embed/gEAhVKKm7WA'
        hello = "Lesson 7"
    }
    if (chapterId == '8'){
        link = 'https://www.youtube.com/embed/4AEZNAFoxfU'
        hello = "Lesson 8"
    }


    return(
        <>

<div className='vid-bg'>
    <div className='wrapper'>
      <h3>{hello}</h3>
      </div>

      <div className="size-wrapper">
        <iframe width="560" height="315" src= {link} allowFullScreen></iframe>
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

  <p>
  Step 1: Create a new File
  </p>

  <p>
	Open Main Menu and open Python 3 (IDLE)
	Click File and New File
  Save the file as  studentProfile.py  by clicking File and Save As  then choose Home
 </p>

 <p>
 Step 2 - Declaring Variables
 </p>
 <p>
 We are going to create a new variable and store variables inside different data types and write our student profile there. 
 Type into your Python File:
Declare Variables here
</p>


<p>
Step 3: Print to the Screen 
</p>

<p>
We are making a student profile, but how will the reader see it? We must send, or “print” our messages to the screen so that the reader can see the student profile, using the print() function.
Type into the Python file:
  print(Name)
  print(Age)
  print(School)
  print(GradeLevel)
 Words will be sent to the screen as they appear in the quotes using this command.
See your progress: 
Save then click Run and  Run Module 
Now you should see your Student Profile printed out here.
</p>
  </div>   
        </div>
        </>
    )
}