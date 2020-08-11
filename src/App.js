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
      <Row>
        <Col>
          <p>
            Happy Birthday Alissa! For your 33rd Birthday, I have created this website for you. It contains 33 coupons that you can redeem anytime throughout the year.
          </p>
          <p>
            Some restrictions apply:
            <ol>
              <li>You are only allowed to use 1 coupon per day. Jisan can determine if you want to use more than one per day.</li>
              <li>Coupons cannot be combined with other coupons, unless explicitly approved by Jisan.</li>
              <li>You have to use all by 12AM August 13, 2021. No rollovers.</li>
              <li>If accidentally pressed Redeem, let Jisan know and he can correct the error.</li>
            </ol>

            Love you lots,
            Jisan
        </p>
        </Col>
      </Row>
      <CouponContainer />
    </Container>
  );
}

export default App;
