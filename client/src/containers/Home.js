import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { isUserLoggedIn } from '../redux/actions/auth.actions'
import './home.css'

const Home = () => {




  return (
    <div>

      <Container fluid>
        <Row>
          <Col md={2} className="sidebar">
          <ul>
            <li><NavLink to={`/`}>Home</NavLink></li>
            <li><NavLink to={`/products`}>Products</NavLink></li>
            <li><NavLink to={`/orders`}>Orders</NavLink></li>
            <li><NavLink to={`/category`}>Category</NavLink></li>
          </ul>
          </Col>

          <Col md={10} style={{ marginLeft: 'auto' }}>Container</Col>
        </Row>
      </Container>

    </div>
  )
}

export default Home