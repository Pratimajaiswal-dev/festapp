import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const PoojaDetails = ({ poojas }) => {
  const { poojaName } = useParams();
  const pooja = poojas.find(p => p.name === poojaName);
  const navigate = useNavigate();

  if (!pooja) {
    return <h1>Pooja not found</h1>;
  }

  const handleBookNowClick = () => {
    navigate(`/booking/${pooja.name}`);
  };

  return (
    <Container>
      <Card style={{ backgroundColor: 'pink' }}>
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-3 mt-2">
            <div>
              <h1>{pooja.name}</h1>
              <p className="mb-0">{pooja.des}</p>
            </div> 
            <Button variant="dark" className="text-light" onClick={handleBookNowClick}>Book Now</Button>
 
          </div>
          {pooja.questions.map((question, index) => (
            <div key={index}>
              <h5>{question}</h5> <li>{pooja.answers[index]}</li>
            </div>
          ))}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PoojaDetails;
