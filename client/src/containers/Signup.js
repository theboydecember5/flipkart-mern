import React, { useState } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Input from '../components/UI/Input';
import { register } from '../redux/actions/user.action';

const Signup = () => {

  const auth = useSelector(state => state.auth)
  const user = useSelector(state => state.user)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch()

  const userSignup = (e) => {

    e.preventDefault();
    const user = {
      firstName, lastName, email, password
    }
    dispatch(register(user))
  }

  if (auth.authenticate) {
    return <Redirect to='/' />
  }

  if (user.loading) {
    return <p>Loading</p>
  }

  return (
    <Container>
      {user.message}
      <Row style={{ marginTop: '50px' }}>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={userSignup}>
            <Input
              label="First Name"
              placeholder="FirstName"
              value={firstName}
              type='text'
              onChange={(e) => setFirstName(e.target.value)}
            />

            <Input
              label="Last Name"
              placeholder="Last Name"
              value={lastName}
              type='text'
              onChange={(e) => setLastName(e.target.value)}
            />


            <Input
              label="Email"
              placeholder="Email"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              label="Password"
              placeholder="Password"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="primary" type="submit">
              Submit
            </Button>

          </Form>
        </Col>
      </Row>

    </Container>
  )
}

export default Signup