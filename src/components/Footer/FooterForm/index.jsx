import { Button, Form } from "react-bootstrap";

const index = ({ size, marginBottom }) => {
  return (
    <>
      <Form>
        <Form.Group className={marginBottom}>
          <Form.Control size={size} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className={marginBottom}>
          <Form.Control size={size} type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className={marginBottom}>
          <Form.Control size={size} type="text" placeholder="Enter Mobile" />
        </Form.Group>

        <Form.Group className={marginBottom}>
          <Form.Control size={size} type="text" placeholder="Enter Title" />
        </Form.Group>

        <Form.Group className={marginBottom}>
          <Form.Control
            size={size}
            as="textarea"
            rows={3}
            placeholder="Enter Message"
          />
        </Form.Group>

        <Form.Group className={marginBottom}>
          <Form.Control size={size} type="file" />
        </Form.Group>

        <Button size={size} variant="dark" type="submit" className="w-100">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default index;
