import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const AppBar = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <h3>Countries</h3>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style={{ marginLeft: 10 }}>
            <h6>All</h6>
          </Navbar.Text>
          <Navbar.Text style={{ marginLeft: 10 }}>
            <h6>Asia</h6>
          </Navbar.Text>
          <Navbar.Text style={{ marginLeft: 10 }}>
            <h6>Europe</h6>
          </Navbar.Text>
          <Navbar.Text style={{ marginLeft: 10, marginTop: -25 }}>
            <Button size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default AppBar;
