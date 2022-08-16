import React, { useEffect, useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Input from '../components/UI/Input';
import { isUserLoggedIn, login } from '../redux/actions/auth.actions';


/**
* @author
* @function Signin
**/

const Signin = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)



  const userLogin = (e) => {
    e.preventDefault()
    const user = { email, password }
    dispatch(login(user))
  }

  if (auth.authenticate) {
    return <Redirect to='/' />
  }

  return (

    <Container>
      <Row style={{ marginTop: '50px' }}>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={userLogin}>
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

export default Signin