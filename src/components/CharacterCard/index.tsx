import { Card, CardBody, Col, Row, Image, Form } from 'react-bootstrap';
import './style.scss';
import Character from '../../types/Character';

export const CharacterCard = (props: { character: Character }) => {
  const character: Character = props.character;

  return (
    <Card>
      <CardBody>
        <Row>
          <Col>
            <Image src={character.imageUrl} roundedCircle />
          </Col>
          <Col>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly defaultValue={`${character.firstName} ${character.lastName}`} />
              </Col>
            </Form.Group>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
