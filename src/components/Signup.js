import React, { useRef, useState } from 'react'
import { Button, Card, Form, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Signup = () => {

  const {signup} = useAuth()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const navigate = useNavigate()

  const handelSubmit = async (e) => {
    e.preventDefault();
    if(passwordRef.current.value !== confirmPasswordRef.current.value){
      return setError("Passwords not match")
    }
    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      navigate("/")
    } catch {
      setError("Failed to create an account")
    }
    setLoading(false)
  }
  return (
    <>
    <Card>
      <Card.Body>
        <h2 className='text-center mb-4'>Signup</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handelSubmit}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor='email'>Email</Form.Label>
            <Form.Control type='email' id='email' ref={emailRef}/>
            <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor='password'>Password</Form.Label>
            <Form.Control type='password' id='password' ref={passwordRef}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor='password-confirmation'>Confirm Password</Form.Label>
            <Form.Control type='password' id='password-confirmation' ref={confirmPasswordRef}/>
          </Form.Group>
          <Button variant="primary" type="submit" className='w-100 mt-3' disabled={loading}>
        Signup
      </Button>
        </Form>
      </Card.Body>
    </Card>
    <div className='text-center mt-2 w-100'>
      Already have an account ? <Link to='/login'>Log in</Link>
    </div>
    </>
  )
}

export default Signup
