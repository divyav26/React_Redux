import React, { useState } from 'react'
import { Card, Container, Row ,Col, ListGroup} from 'react-bootstrap'
import DisplayCount from './DisplayCount'
import {connect} from 'react-redux'

import { deleteTodo } from '../redux/actions/todo'
const DisplayTodo = ({todos,deleteTodo}) => {
    
  return (
    <Container>
      <Row>
        <Col>
        <Card className='mt-3 shadow-sm'>
            <Card.Body>
                <h1>All todos here!!!</h1>
                <DisplayCount />
                <ListGroup>
                    {
                        todos.map((todo, index)=>{
                            return(
                            <ListGroup.Item key={index}>
                                <h4>{todo.title}</h4>
                                <p>{todo.description}</p>
                               <button onClick={event=>deleteTodo(todo.id)} className='btn btn-danger'>
                                Delete
                               </button>
                            </ListGroup.Item>)
                        })
                    }
                </ListGroup>
            </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = (state)=>{
    return {todos:state.todos}
}

const mapDispatchToProps = (dispatch)=>({
    deleteTodo:(id) => (dispatch(deleteTodo(id)))
})

export default connect (mapStateToProps, mapDispatchToProps) (DisplayTodo)
