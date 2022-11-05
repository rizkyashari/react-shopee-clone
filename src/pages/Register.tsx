import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Form } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import { UsersDispatch } from '../redux/actions/register/typesActions';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { IUser } from '../interface';
import { postUser } from '../redux/actions/register/registerActions';
import axios from 'axios';

function Register() {
    const dispatch: UsersDispatch = useDispatch();
    const navigate = useNavigate();
  
    const [input, setInput] = useState({
      username: '',
      password: '',
      email: '',
    })
  
    const handleChange = (event: FormEvent<HTMLInputElement>) => {
      console.log(event.currentTarget);
      setInput({
        ...input,
        [event.currentTarget.name]: event.currentTarget.value,
      })
    }
  
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
            let user = await axios.get('http://localhost:4000/users', {
                params: {
                    username: input.username
                },
            });

            console.log(user)

            if (user.data.length) {
                alert("Username already exists")
                return
            }

            const newUser: IUser = {
            username: input.username,
            password: input.password,
            email: input.email,
            id: 0,
            };

            await dispatch(postUser(newUser));
            navigate('/login')

        } catch(error) {
            console.log(error)
        }
    }

  return (
   <div className='register'>
    <Navbar/>
    <Container className='container' style={{marginTop: "5rem"}}>
      <Row className="justify-content-md-center">
        <Col xs lg="2"></Col>
        <Col md="auto">
            <h2 className='mb-3 d-flex justify-content-center'>Register</h2>
            <Form onSubmit={(event) => handleSubmit(event)}>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <input className='form-control' type="text" name="username" placeholder="Enter your username..." onChange={(event) => handleChange(event)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <input className='form-control' type="password" name="password" placeholder="Enter password..." onChange={(event) => handleChange(event)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <input className='form-control' type="email" name="email" placeholder="Enter your email..." onChange={(event) => handleChange(event)}/>
                </Form.Group>
                <div className='d-grid gap-2'>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </div>
                <div className='mt-3 d-flex justify-content-center'>
                  <p className="small-text">
                    Already have an account?{""}
                    <Link to="/login" className="text-black">Login</Link>
                  </p>
                </div>
            </Form>
        </Col>
        <Col xs lg="2"></Col>
      </Row>
    </Container>
   </div>
  );
}

export default Register;