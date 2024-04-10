import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PoojaList = ({ poojas }) => {
  return (
    <Container>
      <h1 className="mb-4">Pooja List</h1>
      <div className="d-flex flex-wrap">
        {poojas.map((pooja, index) => (
          <Card key={index} className="m-2" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{pooja.name}</Card.Title>
              <Link to={`/pooja/${pooja.name}`}>
                 <Button style={{height:35, marginRight:10}}  variant="danger">View Details</Button> 
               </Link>
               {/* <Button style={{height:35}} variant="primary">Edit Details</Button> */}

            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default PoojaList;
