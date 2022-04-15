import Link from 'next/link'
function videos(){
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

          <Link href={"./dashboard"}>
            <a className="nav-spacing mr-6"><button className='navbar-buttons font-bold text-lg text-black'>Dashboard</button></a>
          </Link>
        </div>
    </nav>

<div className='vid-bg'>
    <div className='wrapper'>
      <h3>Lesson 1: Fundamentals of Python</h3>
      </div>

      <div className="size-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/f4q1RHCkYyg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
     <p>   
        <textarea className='transcript mr-6'cols={30} rows={30} readOnly>
        Professor: Next week well be learning Python. I expect each one of you to do some research this weekend over Python and we will have a class discussion on Monday.

Brenda comes home and starts researching Python becomes drowsy and falls asleep at her keyboard

Brenda: (yawns) I’m tired.
Dream Begins!

Brenda wakes up in her dream to see a python on her bed and freaks out!!

Python: “Python” What first comes to mind when you hear this word? The first thing you probably thought of was a snake, which is probably why you dreamt of me. Luckily, if you are not a huge fan of snakes, that is not the kind of python we are referring to. Unfortunately, I am a python and you will have to put up with me for the sake of learning python, as this is your dream and you assumed the kind of research  you will be doing is about snakes. However, you will be learning a high-level and general-purpose programming language, in which we will be learning the fundamentals of coding in python. 

Brenda is terrified and not sure how to react!

Brenda: Ummm, I never thought I would be learning about a coding language from my biggest fear, SNAKES! However, since I only have the weekend I guess I will have to overcome that fear. SO where do we begin? As I know nothing about coding

*transports into the computer”

Python/Narrator: First things first, as I mentioned before Python is a high-level and  general-purpose programming language with easy syntax and dynamic semantics. GuidoVan Rossum created this language in 1989 to make code more beautiful and easy to read. It is popular as it is easy to use and is an open-source language free for everyone to use, you can use it to make anything such as GUI applications, web applications, mobile apps, artificial intelligence, service side coding, machine learning algorithms, and much more. There are also libraries that are created that help those in need and aid in productivity.

Brenda: Those features are great and all, but what are some examples of companies that utilize python? 

Python: I am glad you asked. One widely known platform that you know is google, as you were using Google to do your research about python. Google uses python to provide better research results based on website rankings and much more, which is how Google is able to provide you with the valuable information needed to do your research. Another popular platform is Netflix, as I know you've been procrastinating watching Stranger Things instead of doing your homework. 

Brenda: haha so you know about that….

Python: Of Course! I bet you didnt know that machine learning is used to cluster users based on their interest in the shows they watch to retain their users longer.

Brenda: So I understand the importance of python, but how can I start running and writing my own python code?

Python: Well, first if we want to write python code we have to find an IDE that you can run and write your python code in. There are many options such as VSCode, my favorite, but there are others such as Sublime, Atom, XCode for Mac, and many more. It is all based on personal preference. Since VSCode is my favorite, I will give you a brief tutorial there.

*transports to VSCode*

Brenda: Woah what is this place and why is it so dark?

Python: Ah yes, most of us programmers code in dark mode, but there is a light mode in the settings if you prefer, however, the dark side has cookies (Evil laugh)

Brenda: Where are the cookies?

Python: Oh that is something we say just to get people to join the dark side, sorry no cookies here.

Brenda: You tricked me *pouty voice*

Python: oh hush, you will adapt

Brenda: just one thing I am afraid of the dark

Python: you were afraid of snakes too! So look who’s talking missy

Python: Anyways we must continue on with your training if you want to be able to show off your skills on Monday

Python: I recommend downloading VSCode if you haven’t already, it should be fairly simple. Once you have that, this is what your environment will look like, as we are here

Python: So first we need to create a file we can name it Brenda.py, the .py is an important part of the extension as it indicates that we are coding in python. So we are going to start with some basic print statements. Let’s print “wake up” and run it. 

*takes time to run code, when the code outputs wake up, Brenda’s mom is telling her to wake up*

Brenda’s Mom: Wake up Brenda. It’s time to go to school… You’ll be late 

Brenda: “ Oh no!” *packs up the backpack and runs out the door* 

*transitions to classroom*

Teacher: So today we have a couple of exercises in python, who would like to come up and do them?
Brenda: “I WILL”
Teacher: “How do you print “hello world” in python.

*Brenda codes* - can pause to attempt exercise - 
Brenda: So… basically you write a print function and then there’s parentheses opening and closing and quotation marks… and inside you write… you write what you want to print. Like for example Hello World!

Teacher: “Very good!
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
//Declare Variables here
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
export default videos