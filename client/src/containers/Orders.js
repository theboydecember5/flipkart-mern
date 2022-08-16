import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Orders = () => {

    return (
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

                <Col md={10} style={{ marginLeft: 'auto' }}>
                    Orders
                </Col>

            </Row>

        </Container>
    )
}

export default Orders