import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import DisplayCount from './DisplayCount'
import { addTodo } from '../redux/actions/todo'
import {connect} from 'react-redux';
import { v4 } from 'uuid';

const AddTodo = ({addTodo}) => {
    const [todo, setTodo] = useState({title:'', description:''})

    const handlesubmit = (event)=>{
        event.preventDefault()

        //add todo in store
        addTodo({...todo, id:v4()})
        console.log(todo)

        setTodo({
            title:'',
            description:'',
            id:''
        })
    }
  return (
    <Container>
        <Row>
            <Col md={12}>
                <Card className='shadow-sm'>
                    <Card.Body>
                        <h3>Add Todo Here!!</h3>
                        <DisplayCount />
                        <Form onSubmit={handlesubmit}>
                            <Form.Group>
                                <Form.Label>Todo Title</Form.Label>
                                <Form.Control type='text' placeholder='Enter Here'
                                value={todo.title}
                                onChange={event=>setTodo({...todo, title:event.target.value})}
                                />
                            </Form.Group>

                            <Form.Group className='mt-3'>
                                <Form.Label>Todo Description</Form.Label>
                                <Form.Control type='text' placeholder='Enter Description'
                                value={todo.description}
                                onChange={event=>setTodo({...todo, description:event.target.value})}
                                />
                            </Form.Group>

                            <Container>
                                <Button className='mt-3' type='submit'>
                                    Add Todo
                                </Button>
                            </Container>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
      
    </Container>
  )
}

const mapStateToProps = (state) =>({})

const mapDispatchToProps = (dispatch) =>({
    addTodo:(todo)=>(dispatch(addTodo(todo)))
})

export default connect(mapStateToProps, mapDispatchToProps) (AddTodo)
