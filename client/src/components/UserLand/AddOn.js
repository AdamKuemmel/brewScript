import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";

import { QUERY_ALL_PRODUCTS, QUERY_USER_ORDERS } from "../../utils/queries";
import { ADD_PRODUCT } from "../../utils/mutations";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const styles = {
  img: {
    float: "left",
    width: "100%",
    height: "200%",
    objectFit: "cover",
  },
  titles: {
    justifyContent: "center",
    textAlign: "center",
    color: "white",
  },
  words: {
    text: "monospace",
    color: "white",
  },
  words1: {
    color: "brown",
    fontSize: "19px",
    textOverflow: "ellipsis",
  },
  words2: {
    textOverflow: "ellipsis",
    text: "monospace",
    color: "white",

    /* Required for text-overflow to do anything */
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
};

const AddOn = () => {
  const [productId, setProduct] = useState("");

  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
  const orderData = useQuery(QUERY_USER_ORDERS);
  const [addProduct, { error }] = useMutation(ADD_PRODUCT);
  let orderId;

  if (orderData.data) {
    let lastOrderItem = orderData.data.userOrders.length - 1;
    console.log(orderData.data.userOrders[lastOrderItem]._id);
    orderId = orderData.data.userOrders[lastOrderItem]._id;
  }

  const products = data?.allProducts || [];
  console.log(products);
  let randomProductArray = [];
  if (data?.allProducts) {
    const arrayCopy = [...products];
    randomProductArray = arrayCopy.sort(() => Math.random() - 0.5).slice(0, 4);
    console.log(randomProductArray);
  }

  const handleAddItem = async (productId) => {
    try {
      const data = await addProduct({
        variables: { orderId, productId },
      });
      setProduct("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 style={styles.titles}>Anything to add to your next order?</h1>
      <div className="row row-cols-1 row-cols-md-2 justify-content-center">
        {loading ? (
          <h1>Loading</h1>
        ) : (
          randomProductArray.map((product) => (
            <Card style={{ width: "18rem", height: "100%" }}>
              <Card.Img
                variant="top"
                style={{ minHeight: "220px", maxHeight: "220px" }}
                src={"/images/" + product.image[0]}
              />
              <Card.Body>
                <Card.Title style={styles.words}>
                  {product.product_name}
                </Card.Title>
                <Card.Text style={styles.words2}>
                  {product.description[0]}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem style={styles.words1}>
                  {product.item_cost}
                </ListGroupItem>
              </ListGroup>
              <Card.Body>
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    handleAddItem(event.target.value);
                  }}
                  value={product._id}
                >
                  Add to my next order!
                </button>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default AddOn;
