import React, { useRef, useState } from 'react'
import { Button, Card, Form, Alert } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Login = () => {

  const {logIn} = useAuth()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()
  const location = useLocation()
  const redirctPath = location.state?.path || "/";

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("")
      setLoading(true)
      await logIn(emailRef.current.value, passwordRef.current.value)
      navigate(redirctPath, {replace:true})
    } catch {
      setError("Failed to login")
    }
    setLoading(false)
  }

  return (
    <>
    <Card>
      <Card.Body>
        <h2 className='text-center mb-4'>Login</h2>
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
          <Button variant="primary" type="submit" className='w-100 mt-3' disabled={loading}>
        Log in
      </Button>
        </Form>
        <div className='text-center mt-3 w-100'>
          <Link to='/forgot-password'>Forgot Password ?</Link>
        </div>
      </Card.Body>
    </Card>
    <div className='text-center mt-2 w-100'>
      Need an account ? <Link to='/signup'>Signup</Link>
    </div>
    </>
  )
}

export default Login

