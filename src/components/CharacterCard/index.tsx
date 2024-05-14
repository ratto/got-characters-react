import { Button, Card, CardBody } from 'react-bootstrap';
import './style.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CharacterCard = (props: { count: number; setCountFn: any }) => {
  const count = props.count;
  const setCountFn = props.setCountFn;

  return (
    <Card>
      <CardBody className="d-flex flex-column align-items-center">
        <Button variant="light" onClick={setCountFn}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </CardBody>
    </Card>
  );
};
