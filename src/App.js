import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import './App.css';
import { getAll } from './api';
import { CouponContainer } from './coupons/coupons-container';

function App() {

  const [coupons, setCoupons] = useState([])

  const fetchCoupons = () => {
    getAll().then((res) => {
      console.log({ res })
      setCoupons(res)
    });
  };

  useEffect(() => {
    fetchCoupons();
  }, []);

  return (
    <Container fluid className="root">
      <Row>
        <Col>
          <h1>
            Alissa's 33 Coupons
          </h1>
        </Col>
      </Row>
      <CouponContainer coupons={coupons} />
    </Container>
  );
}

export default App;
