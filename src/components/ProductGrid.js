// src/components/ProductGrid.js
import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import './ProductGrid.css';

const ProductGrid = () => {
  const products = [
    { id: 1, name: 'Designer Suits', /*price: '$25',*/ image: '/Assets/suit.jpeg' , link: '/products/suits', description: 'Tailored for a sophisticated look.' },
    { id: 2, name: 'Shirts', /*price: '$50',*/ image: '/Assets/shirt.jpeg' , link: '/products/shirts', description: 'Perfect for formal and casual wear.' },
    { id: 3, name: 'T-shirts', /*price: '$50',*/ image: '/Assets/T-shirt.jpeg' , link: '/products/tshirts', description: 'Casual yet trendy designs.' },
    { id: 4, name: 'Trousers', /*price: '$50',*/ image: '/Assets/jeans.jpeg' , link: '/products/trousers', description: 'Comfortable and stylish trousers.' },
    { id: 5, name: 'Jackets', /*price: '$50',*/ image: '/Assets/jacket.jpeg' , link: '/products/jackets', description: 'Stay warm and look sharp.' },
    { id: 6, name: 'Hoodies', /*price: '$75',*/ image: '/Assets/hoodies.jpeg' , link: '/products/hoodies', description: 'Cozy and modern hoodies.'  }
  ];

  return (
    <Container className="products-container mt-5">
      <div className="products-header text-center">
        <h2>Our Latest Collection</h2>
        <p>Explore the finest selection of WINZI COLLECTION products, designed to elevate your style.</p>
      </div>
    <Row className="mt-5">
      {products.map(product => (
        <Col md={4} sm={6} xs={12} key={product.id} className="product-card-col">
          <Card className="product-card">
            <a href={product.link}>
              <Card.Img variant="top" src={product.image} />
            </a>
            <Card.Body>
              <Card.Title className='product-title'>{product.name}</Card.Title>
              <Card.Text className="product-description">{product.description}</Card.Text>
              <Card.Text>{product.price}</Card.Text>
              <Button href={product.link} variant="dark" className="product-button">Check</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  );
}

export default ProductGrid;
