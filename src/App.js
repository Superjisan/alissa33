import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import './App.css';
import { getAll } from './api';
import { CouponContainer } from './coupons/coupons-container';

function App() {

  return (
    <Container fluid className="root">
      <Row>
        <Col>
          <h1>
            Alissa's 33 Coupons
          </h1>
        </Col>
      </Row>
      <CouponContainer />
    </Container>
  );
}

export default App;
