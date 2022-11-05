import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Form } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {

    const navigate = useNavigate()
    const [input, setInput] = useState({
        username: '',
        password: ''
    })

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
  
        try {   
            let user = await axios.get('https://63665a44046eddf1bafe0705.mockapi.io/users', {
                params: {
                    username: input.username,
                    password: input.password
                },
            });

            console.log(user)

            if (user.data.length) {
                localStorage.setItem("user", JSON.stringify({
                    username: user.data[0].username, 
                    email: user.data[0].email,    
                }))
                navigate("/home", {replace: true})
            } else {
                alert("incorrect username or password")
            }


        } catch(error) {
            console.log(error)
        }
    }
    const handleChange= (event: React.FormEvent<HTMLInputElement>) => {

        setInput({
            ...input,
            [event.currentTarget.name]: event.currentTarget.value

        })

    }
    console.log("input", input)
    
  return (
   <div className='register'>
    <Navbar/>
    <Container className='container' style={{marginTop: "5rem"}}>
      <Row className="justify-content-md-center">
        <Col xs lg="2"></Col>
        <Col md="auto">
            <h2 className='mb-3 d-flex justify-content-center'>Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <input className='form-control' type="text" name="username" placeholder="Enter your username..." onChange={handleChange} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <input className='form-control' type="password" name="password" placeholder="Enter password..." onChange={handleChange} required/>
                </Form.Group>
                <div className='d-grid gap-2'>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </div>
                <div className='mt-3 d-flex justify-content-center'>
                    <p className="small-text">
                    Don't have an account?{""}
                    <Link to="/register" className="text-black">Sign Up</Link>
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

export default Login;