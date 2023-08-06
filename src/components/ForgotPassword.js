import React from 'react'
import { Alert, Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useState, useRef } from 'react';

const ForgotPassword = () => {

  const {resetpassword} = useAuth()
  const [error, setError] = useState('')
  const [massege, setMasseage] = useState('')
  const [loading, setLoading] = useState(false)

  const emailRef = useRef()


  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("")
      setLoading(true)
      await resetpassword(emailRef.current.value)
      setMasseage("check your inpox to get new password")
    } catch {
      setError("Failed to Reset Password")
    }
    setLoading(false)
  }

  return (
    <>
    <Card>
      <Card.Body>
        <h2 className='text-center mb-4'>Reset Password</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {massege && <Alert variant="success">{massege}</Alert>}
        <Form onSubmit={handelSubmit}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor='email'>Email</Form.Label>
            <Form.Control type='email' id='email' ref={emailRef}/>
          </Form.Group>
          <Button variant="primary" type="submit" className='w-100 mt-3' disabled={loading}>
          Reset Password
      </Button>
        </Form>
        <div className='text-center mt-3 w-100'>
          <Link to='/login'>Log In</Link>
        </div>
      </Card.Body>
    </Card>
    <div className='text-center mt-2 w-100'>
      Need an account ? <Link to='/signup'>Signup</Link>
    </div>
    </>
  )
}

export default ForgotPassword
