import Link from "next/link"
import Footer from '../components/footer'
import React, { useState } from 'react'
import { Button, Form } from "react-bootstrap"
import { useAuth } from '../context/AuthContext'

const Signup = () => {
  const { user, signup } = useAuth()
  console.log(user)
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleSignup = async (e: any) => {
    e.preventDefault()

    try {
      await signup(data.email, data.password)
    } catch (err) {
      console.log(err)
    }

    console.log(data)
  }

  return (
    
    <div className="page-color page-container homepage-background">
      <div className='info-container'>
        
        <h1 className="title-text">Register</h1>
        <div className="block">
      <Form onSubmit={handleSignup}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="block">Email address</Form.Label>
          <Form.Control className="text-center bg-slate-200"
            type="email"
            placeholder="Enter email"
            required
            onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
          />
        </Form.Group>

        <Form.Group className="mb-7 mt-8" controlId="formBasicPassword">
          <Form.Label className="block">Password</Form.Label>
          <Form.Control className="text-center bg-slate-200"
            type="password"
            placeholder="Password"
            required
            onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
          />
        </Form.Group>
        <button className="button-layout buttons mx-auto mt-2 mb-3 rounded-xl p-2 text-center button-style bg-[#1f56ec]" >
        <Button className="font-bold" variant="primary" type="submit">
          Signup
        </Button>
        </button>
      </Form>
    </div>
    </div>
    </div>
  )
}


export default Signup