import React from 'react';
import { Card } from 'react-bootstrap'

export const CouponContainer = props => {
  const { coupons } = props
  return coupons.map(coupon => {
    return (
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
      </Card>
    )
  })


}