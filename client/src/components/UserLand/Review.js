import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER_ORDERS } from "../../utils/queries";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const styles = {
  img: {
    maxHeight: "20vh",
  },
  titles: {
    textAlign: "center",
    color: "white",
  },
};

const Review = () => {
  const { loading, data } = useQuery(QUERY_USER_ORDERS);

  let orderId;
  if (data) {
    let lastOrderItem = data.userOrders.length - 1;
    orderId = data.userOrders[lastOrderItem];
  }
  console.log(orderId);

  return (
    <div>
      <h1 style={styles.titles}>Your Upcoming Order!</h1>
      <div className="container row">
        {loading ? (
          <h1>Loading</h1>
        ) : (
          orderId.order_items.map((product) => (
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{product.product_name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{product.item_cost}</ListGroupItem>
              </ListGroup>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default Review;
