import {Links} from '../../data/links'
import Script from 'next/script';
import { ChapterSteps } from '../../data/stepschapter';
import Dashboard from '../dashboard';
import { useRouter } from 'next/router'
import { useAuth } from '../../context/AuthContext';
import { text } from 'stream/consumers';
import React from 'react';
import { count } from 'console';
import Head from 'next/head';


export default function Chapters(){
    const router = useRouter()
    const chapterId = router.query.ID
    const details = Links
    const chapterDetails = ChapterSteps

    var title
    var link
    var python
    var stepOne
    var stepOneInfo
    var stepTwo
    var stepTwoInfo
    var stepThree
    var stepThreeInfo
    var stepFour
    var stepFourInfo
    var exerciseTwo
    var exerciseTwoStepOne
    var exerciseTwoStepOneInfo
    var exerciseTwoStepTwo
    var exerciseTwoStepTwoInfo
    var exerciseTwoStepThree
    var exerciseTwoStepThreeInfo
    var exerciseTwoStepFour
    var exerciseTwoStepFourInfo
    var secondPython
    var exerciseOneTitle
    var exerciseTwoTitle
    

    if (chapterId == '1'){
        link = details[0].link
        python = details[0].python
        title = details[0].name
        stepOne = chapterDetails[0].stepOne
        stepOneInfo = chapterDetails[0].stepOneDetails
        stepTwo = chapterDetails[0].stepTwo
        stepTwoInfo = chapterDetails[0].stepTwoDetails
        stepThree = chapterDetails[0].stepThree
        stepThreeInfo = chapterDetails[0].stepThreeDetails
        stepFourInfo = chapterDetails[0].stepFourInfo
        stepFour = chapterDetails[0].stepFour
        stepFourInfo = chapterDetails[0].stepFourInfo
        exerciseTwo = chapterDetails[0].exerciseTwo
        exerciseTwoStepOne = chapterDetails[0].exerciseTwoStepOne
        exerciseTwoStepOneInfo = chapterDetails[0].exerciseTwoStepOneInfo
        exerciseTwoStepTwo = chapterDetails[0].exerciseTwoStepTwo
        exerciseTwoStepTwoInfo = chapterDetails[0].exerciseTwoStepTwoInfo
        exerciseTwoStepThree = chapterDetails[0].exerciseTwoStepThree
        exerciseTwoStepThreeInfo = chapterDetails[0].exerciseTwoStepThreeInfo
        exerciseTwoStepFour = chapterDetails[0].exerciseTwoStepFour
        exerciseTwoStepFourInfo = chapterDetails[0].exerciseTwoStepFourInfo
        exerciseOneTitle = chapterDetails[0].exerciseOne
        exerciseTwoTitle = chapterDetails[0].exerciseTwo
        secondPython = chapterDetails[0].exerciseTwoIDE
    }
    if (chapterId == '2'){
        link = details[1].link
        python = details[1].python
        title = details[1].name
        stepOne = chapterDetails[1].stepOne
        stepOneInfo = chapterDetails[1].stepOneDetails
        stepTwo = chapterDetails[1].stepTwo
        stepTwoInfo = chapterDetails[1].stepTwoDetails
        stepThree = chapterDetails[1].stepThree
        stepThreeInfo = chapterDetails[1].stepThreeDetails
        stepFour = chapterDetails[1].stepFour
        stepFourInfo = chapterDetails[1].stepFourInfo
        exerciseTwo = chapterDetails[1].exerciseTwo
        exerciseTwoStepOne = chapterDetails[1].exerciseTwoStepOne
        exerciseTwoStepOneInfo = chapterDetails[1].exerciseTwoStepOneInfo
        exerciseTwoStepTwo = chapterDetails[1].exerciseTwoStepTwo
        exerciseTwoStepTwoInfo = chapterDetails[1].exerciseTwoStepTwoInfo
        exerciseTwoStepThree = chapterDetails[1].exerciseTwoStepThree
        exerciseTwoStepThreeInfo = chapterDetails[1].exerciseTwoStepThreeInfo
        exerciseTwoStepFour = chapterDetails[1].exerciseTwoStepFour
        exerciseTwoStepFourInfo = chapterDetails[1].exerciseTwoStepFourInfo
        exerciseOneTitle = chapterDetails[1].exerciseOne
        exerciseTwoTitle = chapterDetails[1].exerciseTwo
        secondPython = chapterDetails[1].exerciseTwoIDE
    }
    if (chapterId == '3'){
        link = details[2].link
        python = details[2].python
        title = details[2].name
        stepOne = chapterDetails[2].stepOne
        stepOneInfo = chapterDetails[2].stepOneDetails
        stepTwo = chapterDetails[2].stepTwo
        stepTwoInfo = chapterDetails[2].stepTwoDetails
        stepThree = chapterDetails[2].stepThree
        stepThreeInfo = chapterDetails[2].stepThreeDetails
        stepFour = chapterDetails[2].stepFour
        stepFourInfo = chapterDetails[2].stepFourInfo
        exerciseTwo = chapterDetails[2].exerciseTwo
        exerciseTwoStepOne = chapterDetails[2].exerciseTwoStepOne
        exerciseTwoStepOneInfo = chapterDetails[2].exerciseTwoStepOneInfo
        exerciseTwoStepTwo = chapterDetails[2].exerciseTwoStepTwo
        exerciseTwoStepTwoInfo = chapterDetails[2].exerciseTwoStepTwoInfo
        exerciseTwoStepThree = chapterDetails[2].exerciseTwoStepThree
        exerciseTwoStepThreeInfo = chapterDetails[2].exerciseTwoStepThreeInfo
        exerciseTwoStepFour = chapterDetails[2].exerciseTwoStepFour
        exerciseTwoStepFourInfo = chapterDetails[2].exerciseTwoStepFourInfo
        exerciseOneTitle = chapterDetails[2].exerciseOne
        exerciseTwoTitle = chapterDetails[2].exerciseTwo
        secondPython = chapterDetails[2].exerciseTwoIDE
        
    }
    if (chapterId == '4'){
        link = details[3].link
        python = details[3].python
        title = details[3].name
        stepOne = chapterDetails[3].stepOne
        stepOneInfo = chapterDetails[3].stepOneDetails
        stepTwo = chapterDetails[3].stepTwo
        stepTwoInfo = chapterDetails[3].stepTwoDetails
        stepThree = chapterDetails[3].stepThree
        stepThreeInfo = chapterDetails[3].stepThreeDetails
        stepFour = chapterDetails[3].stepFour
        stepFourInfo = chapterDetails[3].stepFourInfo
        exerciseTwo = chapterDetails[3].exerciseTwo
        exerciseTwoStepOne = chapterDetails[3].exerciseTwoStepOne
        exerciseTwoStepOneInfo = chapterDetails[3].exerciseTwoStepOneInfo
        exerciseTwoStepTwo = chapterDetails[3].exerciseTwoStepTwo
        exerciseTwoStepTwoInfo = chapterDetails[3].exerciseTwoStepTwoInfo
        exerciseTwoStepThree = chapterDetails[3].exerciseTwoStepThree
        exerciseTwoStepThreeInfo = chapterDetails[3].exerciseTwoStepThreeInfo
        exerciseTwoStepFour = chapterDetails[3].exerciseTwoStepFour
        exerciseTwoStepFourInfo = chapterDetails[3].exerciseTwoStepFourInfo
        exerciseOneTitle = chapterDetails[3].exerciseOne
        exerciseTwoTitle = chapterDetails[3].exerciseTwo
        secondPython = chapterDetails[3].exerciseTwoIDE
    }
    if (chapterId == '5'){
        link = details[4].link
        python = details[4].python
        title = details[4].name
        stepOne = chapterDetails[4].stepOne
        stepOneInfo = chapterDetails[4].stepOneDetails
        stepTwo = chapterDetails[4].stepTwo
        stepTwoInfo = chapterDetails[4].stepTwoDetails
        stepThree = chapterDetails[4].stepThree
        stepThreeInfo = chapterDetails[4].stepThreeDetails
        stepFour = chapterDetails[4].stepFour
        stepFourInfo = chapterDetails[4].stepFourInfo
        exerciseTwo = chapterDetails[4].exerciseTwo
        exerciseTwoStepOne = chapterDetails[4].exerciseTwoStepOne
        exerciseTwoStepOneInfo = chapterDetails[4].exerciseTwoStepOneInfo
        exerciseTwoStepTwo = chapterDetails[4].exerciseTwoStepTwo
        exerciseTwoStepTwoInfo = chapterDetails[4].exerciseTwoStepTwoInfo
        exerciseTwoStepThree = chapterDetails[4].exerciseTwoStepThree
        exerciseTwoStepThreeInfo = chapterDetails[4].exerciseTwoStepThreeInfo
        exerciseTwoStepFour = chapterDetails[4].exerciseTwoStepFour
        exerciseTwoStepFourInfo = chapterDetails[4].exerciseTwoStepFourInfo
        exerciseOneTitle = chapterDetails[4].exerciseOne
        exerciseTwoTitle = chapterDetails[4].exerciseTwo
        secondPython = chapterDetails[4].exerciseTwoIDE
    }
    if (chapterId == '6'){
        link = details[5].link
        python = details[5].python
        title = details[5].name
        stepOne = chapterDetails[5].stepOne
        stepOneInfo = chapterDetails[5].stepOneDetails
        stepTwo = chapterDetails[5].stepTwo
        stepTwoInfo = chapterDetails[5].stepTwoDetails
        stepThree = chapterDetails[5].stepThree
        stepThreeInfo = chapterDetails[5].stepThreeDetails
        stepFour = chapterDetails[5].stepFour
        stepFourInfo = chapterDetails[5].stepFourInfo
        exerciseTwo = chapterDetails[5].exerciseTwo
        exerciseTwoStepOne = chapterDetails[5].exerciseTwoStepOne
        exerciseTwoStepOneInfo = chapterDetails[5].exerciseTwoStepOneInfo
        exerciseTwoStepTwo = chapterDetails[5].exerciseTwoStepTwo
        exerciseTwoStepTwoInfo = chapterDetails[5].exerciseTwoStepTwoInfo
        exerciseTwoStepThree = chapterDetails[5].exerciseTwoStepThree
        exerciseTwoStepThreeInfo = chapterDetails[5].exerciseTwoStepThreeInfo
        exerciseTwoStepFour = chapterDetails[5].exerciseTwoStepFour
        exerciseTwoStepFourInfo = chapterDetails[5].exerciseTwoStepFourInfo
        exerciseOneTitle = chapterDetails[5].exerciseOne
        exerciseTwoTitle = chapterDetails[5].exerciseTwo
        secondPython = chapterDetails[5].exerciseTwoIDE
    }
    if (chapterId == '7'){
        link = details[6].link
        python = details[6].python
        title = details[6].name
        stepOne = chapterDetails[6].stepOne
        stepOneInfo = chapterDetails[6].stepOneDetails
        stepTwo = chapterDetails[6].stepTwo
        stepTwoInfo = chapterDetails[6].stepTwoDetails
        stepThree = chapterDetails[6].stepThree
        stepThreeInfo = chapterDetails[6].stepThreeDetails,
        stepFour = chapterDetails[6].stepFour
        stepFourInfo = chapterDetails[6].stepFourInfo
        exerciseTwo = chapterDetails[6].exerciseTwo
        exerciseTwoStepOne = chapterDetails[6].exerciseTwoStepOne
        exerciseTwoStepOneInfo = chapterDetails[6].exerciseTwoStepOneInfo
        exerciseTwoStepTwo = chapterDetails[6].exerciseTwoStepTwo
        exerciseTwoStepTwoInfo = chapterDetails[6].exerciseTwoStepTwoInfo
        exerciseTwoStepThree = chapterDetails[6].exerciseTwoStepThree
        exerciseTwoStepThreeInfo = chapterDetails[6].exerciseTwoStepThreeInfo
        exerciseTwoStepFour = chapterDetails[6].exerciseTwoStepFour
        exerciseTwoStepFourInfo = chapterDetails[6].exerciseTwoStepFourInfo
        exerciseOneTitle = chapterDetails[6].exerciseOne
        exerciseTwoTitle = chapterDetails[6].exerciseTwo
        secondPython = chapterDetails[6].exerciseTwoIDE
    }
    if (chapterId == '8'){
        link = details[7].link
        python = details[7].python
        title = details[7].name
        stepOne = chapterDetails[7].stepOne
        stepOneInfo = chapterDetails[7].stepOneDetails
        stepTwo = chapterDetails[7].stepTwo
        stepTwoInfo = chapterDetails[7].stepTwoDetails
        stepThree = chapterDetails[7].stepThree
        stepThreeInfo = chapterDetails[7].stepThreeDetails
        stepFour = chapterDetails[7].stepFour
        stepFourInfo = chapterDetails[7].stepFourInfo
        exerciseTwo = chapterDetails[7].exerciseTwo
        exerciseTwoStepOne = chapterDetails[7].exerciseTwoStepOne
        exerciseTwoStepOneInfo = chapterDetails[7].exerciseTwoStepOneInfo
        exerciseTwoStepTwo = chapterDetails[7].exerciseTwoStepTwo
        exerciseTwoStepTwoInfo = chapterDetails[7].exerciseTwoStepTwoInfo
        exerciseTwoStepThree = chapterDetails[7].exerciseTwoStepThree
        exerciseTwoStepThreeInfo = chapterDetails[7].exerciseTwoStepThreeInfo
        exerciseTwoStepFour = chapterDetails[7].exerciseTwoStepFour
        exerciseTwoStepFourInfo = chapterDetails[7].exerciseTwoStepFourInfo
        exerciseOneTitle = chapterDetails[7].exerciseOne
        exerciseTwoTitle = chapterDetails[7].exerciseTwo
        secondPython = chapterDetails[7].exerciseTwoIDE
    }


        return(


    
        <>

<div className='page-container vid-bg'>
    <div className='text-center wrapper pt-8'>
      <h3>{title}</h3>
    </div>

      <div className="size-wrapper flex justify-center mb-10 mt-10">
        <iframe width="560" height="315" src= {link} allowFullScreen></iframe>
    </div>

<section className= "exercises">
  <p className='text-center'>Lets Practice!</p>
   </section>

<section className='text-center mb-10'>
  <div className='instructs'>
    
    <div>{exerciseOneTitle}</div>

    <div className='mb-2 mt-6'>{stepOne}</div>

    
    <div className='mb-4 ' dangerouslySetInnerHTML={{__html: `${stepOneInfo}`}}/>

    <div className='mb-2 '>{stepTwo}</div>

    <div className='mb-4 ' dangerouslySetInnerHTML={{__html: `${stepTwoInfo}`}}/>

    <div className='mb-2 '>{stepThree}</div>

    <div className='mb-4' dangerouslySetInnerHTML={{__html: `${stepThreeInfo}`}}/>
    
    <div className='mb-2 '>{stepFour}</div>

    <div className='mb-4' dangerouslySetInnerHTML={{__html: `${stepFourInfo}`}}/>       

    </div>
</section>
<section className='justify-center flex pb-10'>
<div className='ide-container flex' dangerouslySetInnerHTML={{__html: `${secondPython}`}}/>
</section>
<section className='text-center mb-10'>
  <div className='instructs'>

    <div>{exerciseTwoTitle}</div>
    
    <div className='mb-2 mt-7'>{exerciseTwoStepOne}</div>
    
    <div className='mb-4 ' dangerouslySetInnerHTML={{__html: `${exerciseTwoStepOneInfo}`}}/>

    <div className='mb-2 '>{exerciseTwoStepTwo}</div>

    <div className='mb-4 ' dangerouslySetInnerHTML={{__html: `${exerciseTwoStepTwoInfo}`}}/>

    <div className='mb-2 '>{exerciseTwoStepThree}</div>

    <div className='mb-4' dangerouslySetInnerHTML={{__html: `${exerciseTwoStepThreeInfo}`}}/>

    <div className='mb-2 '>{exerciseTwoStepFour}</div>

    <div className='mb-4' dangerouslySetInnerHTML={{__html: `${exerciseTwoStepFourInfo}`}}/>
    
     

    </div>
</section>
<section className='justify-center flex pb-10'>
<iframe className='' src={python} width="75%" height="500"></iframe>
</section>

 
     
        </div>
        </>
        
    )
}