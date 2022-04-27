import { UUID } from 'bson'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'

const Login = () => {
    const router = useRouter()
    const { user, login } = useAuth()
  const [data, setData] = useState({
      displayName: '',
      email: '',
      password: '',
  })
  
  
  const handleLogin = async (e: any) => {
    e.preventDefault()
    
    // console.log(user)
      const incorrectLogin = () => {
        if ((data.email && data.password == null) || (data.email && data.password !== user)) {
          //return "Invalid login"
          return "Incorrect Login, Please try Again. Verify your Email and Password match."
        }
        handleLogin
      }

      try {
        await login(data.displayName, data.email, data.password)
        // if(data.email === user.email && data.password === user.uid)
          router.push('/dashboard')
      } catch (err) {
        //console.log(err)
        return `Incorrect Login, Please try Again. Verify your Email and Password match.`
        //console.log("Incorrect Login, Please try Again. Verify your Email and Password match.")
      }
    }
  
    return (
      <div className="page-color page-container homepage-background">
      <div className='info-container'>
        
        <h1 className="title-text">Login</h1>
        <div className="block">
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className='block'>Email address</Form.Label>
            <Form.Control className='text-center bg-slate-200'
              onChange={(e: any) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
              value={data.email}
              required
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
  
          <Form.Group className="mb-7 mt-8" controlId="formBasicPassword">
            <Form.Label className='block'>Password</Form.Label>
            <Form.Control className='text-center bg-slate-200'
              onChange={(e: any) =>
                setData({
                  ...data,
                  password: e.target.value,
                })
              }
              value={data.password}
              required
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <button className="button-layout buttons mx-auto mt-2 mb-3 rounded-xl p-2 text-center button-style bg-[#1f56ec]" >
                
            <Button className='font-bold' variant="primary" type="submit">
              Login
            </Button>
          </button>
        </Form>
          </div>
        </div>
      </div>
    )
  }
  
  export default Login
