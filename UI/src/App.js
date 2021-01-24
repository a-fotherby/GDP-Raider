import logo from './logo.svg';
import './App.css';
import SiteList from './SiteList.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OverviewContainer from "./OverviewContainer";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          GDPRaider
        </p>
      </header>
        <Container fluid>
            <Row>
                <Col sm={3}>
                    <SiteList/>
                </Col >
                <Col sm="9">
                    <OverviewContainer/>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default App;
