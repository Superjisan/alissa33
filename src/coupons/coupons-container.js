import React, { useEffect, useState } from 'react';
import { Card, Button, Row } from 'react-bootstrap';

import { getAll, redeemCoupon } from '../api';

export const CouponContainer = props => {

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
    if(filterName === filter) {
      setFilter('')
    } else {
      setFilter(filterName)
    }
  }

  useEffect(() => {
    fetchCoupons();
  }, []);

  
  return (
    <>
      <Row>
        <Button>Still Valid</Button>
        <Button>Already Used</Button>
      </Row>
      {coupons.map(coupon =>
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
            <Button onClick={() => { onRedeemClick(coupon.ref.value.id) }} variant="primary">Redeem Now</Button>
          </Card.Footer>
        </Card>

      )
      }
    </>
  


}