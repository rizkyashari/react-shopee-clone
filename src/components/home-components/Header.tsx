import React, { useEffect, useState } from "react";
import { Button, Container, Form, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../interface";
import './Header.css'

function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    password: '',
  })

  useEffect(() => {
    
      let userInLocalStorage = localStorage.getItem("user");     
      if (userInLocalStorage === null) {  
              alert("You have to login first to access this page"); 
              navigate("/login");
              return;
                  }
              let userInLocalStorageObject = JSON.parse(userInLocalStorage) as IUser;  
              setUser(userInLocalStorageObject);
          }, []);

      const logout = () => {
              localStorage.removeItem('user');
              navigate('/login')
      };
    
  return (
    <div>
      <Navbar bg="light">
        <Container fluid>
          <Form className="d-flex" role="search">
            <div className="input-group">
              <span className="input-group-text bg-white" id="basic-addon1">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="search"
                className="form-control"
                placeholder="Dapatkan produk berkualitas... "
                id="input-number"
              />
            </div>
          </Form>
          <Button onClick={logout} variant="danger" size="sm">
            Logout
          </Button>{' '}
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;