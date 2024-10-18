import React from 'react';
import Nav1 from './nav1';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import AXIOS from 'axios';
import { useParams } from 'react-router-dom';

function Updatetask() {
  const param = useParams();
  const [t, setT] = useState("");
  const [d, setD] = useState("");

  const editData = (e) => {
    e.preventDefault();
    const idn = param.id;
    const url = "http://localhost:9000/api/taskupdate";
    AXIOS.post(url, { t, d, idn }).then((res) => {
      alert(res.data);
    });
  };

  useEffect(() => {
    const idn = param.id;
    const url = `http://localhost:9000/api/findItemByid/${idn}`;
    AXIOS.get(url).then((res) => {
      const data = res.data.result[0].fullname;
      setT(data);
    });
  }, [param.id]);

  return (
    <div>
      <Nav1 />
      <Container>
        <Row className='justify-content-center mt-5'>
          <Col lg={6} className='p-1 '>
            <Form onSubmit={editData}>
              <Form.Group>
                <Form.Control
                  type='text'
                  className='custom-input'
                  placeholder='Title'
                  onChange={(e) => setT(e.target.value)}
                  value={t}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  type='text'
                  className='custom-input'
                  placeholder='Description'
                  onChange={(e) => setD(e.target.value)}
                  value={d}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  className='custom-button'
                  style={{ backgroundColor: 'whitesmoke' }}
                  type='submit'
                  value='UPDATE TASK'
                  required
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Updatetask;
