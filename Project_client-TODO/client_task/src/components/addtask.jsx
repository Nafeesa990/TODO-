import React from 'react';
import Nav1 from './nav1';
import {Container,Row,Col,Form} from 'react-bootstrap';
import { useState } from 'react';
import AXIOS from 'axios';

function AddTask() {
    const [title,setTitle]=useState("");
    const [des,setDes]=useState("");
    const addDetails=(e)=>{
        e.preventDefault();

        //api connection
        const url="http://localhost:9000/api/addTask"
        AXIOS.post(url,{title,des}).then((response)=>{
            alert(response.data)
        })
    }
    return (
        <div>
            <Nav1/>
           <Container>
            <Row className='justify-content-center mt-5'>
                <Col lg={6} className='p-1 '>
                  <Form onSubmit={addDetails}>
                    <Form.Group>
                        <Form.Control type='text'  style={{ borderRadius: '0' }} placeholder='Title' onChange={(e)=>setTitle(e.target.value)} required/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type='text' style={{ borderRadius: '0' }} placeholder='Description' onChange={(e)=>setDes(e.target.value)} required/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control  style={{ backgroundColor:'whitesmoke', borderRadius: '0' }} type='Submit' value='ADD TASK' required/>
                    </Form.Group>
                  </Form>
                </Col>
            </Row>
           </Container>
        </div>
    );
}

export default AddTask;