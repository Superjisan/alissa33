import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

import { getAll, redeemCoupon } from '../api';

export const CouponContainer = () => {

  const [coupons, setCoupons] = useState([]);
  const [filter, setFilter] = useState('');

  const fetchCoupons = () => {
    getAll().then((res) => {
      setCoupons(res);
    });
  };

  const onRedeemClick = couponId => {
    redeemCoupon(couponId).then(() => fetchCoupons())
  };

  const onFilterChange = filterName => {
    if (filterName === filter) {
      setFilter('')
    } else {
      setFilter(filterName)
    }
  }

  useEffect(() => {
    fetchCoupons();
  }, []);

  const isInvalid = filter === 'invalid';
  const isValid = filter === 'valid';

  const filteredCoupons = !filter ? coupons : coupons.filter(coup => {
    if(filter === 'invalid') {
        return coup.data.alreadyUsed === true;
    } else { 
        return coup.data.alreadyUsed === false;
    }
  })

  return (
    <>
      <Row style={{marginBottom: 10}}>
        <Col>
          <Button variant={isValid ? 'primary' : 'outline-dark'} onClick={() => onFilterChange('valid')} style={{marginRight: 5}}>Still Valid</Button>
          <Button variant={isInvalid ? 'primary' : 'outline-dark'} onClick={() => onFilterChange('invalid')}>Already Used</Button>
        </Col>
      </Row>
      {filteredCoupons.map(coupon =>
        <Card key={coupon.ref.value.id} style={{ width: '18rem', height: '36rem', float: 'left' }}>
          <Card.Body>
            <Card.Img variant="top" src={coupon.data.imgUrl} />
            <Card.Title>{coupon.data.title}</Card.Title>
            <Card.Text>
              {coupon.data.description}
            </Card.Text>
            <Card.Text>
              Expires On: {coupon.data.expires.value}
            </Card.Text>
            <Card.Text>
              Already Used: {`${coupon.data.alreadyUsed}`}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button disabled={coupon.data.alreadyUsed} onClick={() => { onRedeemClick(coupon.ref.value.id) }} variant="primary">Redeem Now</Button>
          </Card.Footer>
        </Card>

      )
      }
    </>

  )

}