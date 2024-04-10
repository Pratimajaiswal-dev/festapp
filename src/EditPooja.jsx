import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
//import { useHistory } from 'react-router-dom';

const EditPooja = ({ pooja }) => {
  const [answers, setAnswers] = useState(pooja.answers);
//const history = useHistory();

  const handleInputChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
     console.log('Edited answers:', answers);
   //history.push('/'); // Redirect to the home page after editing
  };

  return (
    <Container>
      <h1 className="mb-4">Edit Pooja: {pooja.name}</h1>
      <Form>
        {pooja.questions.map((question, index) => (
          <Form.Group key={index}>
            <Form.Label>{question}</Form.Label>
            <Form.Control
              type="text"
              value={answers[index]}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          </Form.Group>
        ))}
        <Button variant="primary" onClick={handleSubmit}>Save</Button>
      </Form>
    </Container>
  );
};

export default EditPooja;
