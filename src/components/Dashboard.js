import React, { useState } from 'react'
import { Alert, Button, Card } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const {currntUser, logOut} = useAuth()
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handellogOut = async () => {
    try {
      await logOut()
      navigate("/login")
    } catch{
      setError("Failed to Log Out")
    }
  }

  return (
    <>
        <Card>
      <Card.Body>
        <h2 className='text-center mb-4'>Profile</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <strong>Email:</strong> {currntUser && currntUser.email}
        <Link to="/update-profile" className='btn btn-primary mt-3 w-100'>Update Profile</Link>
      </Card.Body>
    </Card>
    <div className=' mt-2 w-100 text-center'>
      <Button className='btn btn-primary' onClick={handellogOut}>Log Out</Button>
    </div>
    </>
  )
}

export default Dashboard
