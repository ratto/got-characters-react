import { Card, CardBody, Col, Row, Image, Form } from 'react-bootstrap';
import './style.scss';
import Character from '../../types/Character';

export const CharacterCard = (props: { character: Character }) => {
  const character: Character = props.character;

  return (
    <Card className="character-card">
      <CardBody>
        <Row className="align-items-center">
          <Col sm="3">
            <Image fluid src={character.imageUrl} rounded />
          </Col>
          <Col>
            <Form.Group as={Row} controlId="formPlaintextName">
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly defaultValue={`${character.firstName} ${character.lastName}`} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextTitle">
              <Col sm="12">
                <Form.Control plaintext readOnly defaultValue={`${character.title}`} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextFamily">
              <Form.Label column sm="2">
                Family
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly defaultValue={`${character.family}`} />
              </Col>
            </Form.Group>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
