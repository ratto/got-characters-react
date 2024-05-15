import { Card, CardBody, Col, Row, Image, Form } from 'react-bootstrap';
import './style.scss';
import Character from '../../types/Character';

export const CharacterCard = (props: { character: Character }) => {
  const character: Character = props.character;

  return (
    <Card className="character-card">
      <CardBody>
        <Row className="align-items-center">
          <Col xs={12} sm={4} md={5} xl={4}>
            <Image fluid src={character.imageUrl} rounded />
          </Col>
          <Col>
            <Form.Group as={Row} controlId="formPlaintextName">
              <Form.Label column xs={3} lg={4} xl={3}>
                Name
              </Form.Label>
              <Col xs={9} lg={8} xl={9}>
                <Form.Control plaintext readOnly defaultValue={`${character.firstName} ${character.lastName}`} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextTitle">
              <Col sm={12}>
                <Form.Control plaintext readOnly defaultValue={`${character.title}`} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPlaintextFamily">
              <Form.Label column xs={3} lg={4} xl={3}>
                Family
              </Form.Label>
              <Col xs={9} lg={8} xl={9}>
                <Form.Control plaintext readOnly defaultValue={`${character.family}`} />
              </Col>
            </Form.Group>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
