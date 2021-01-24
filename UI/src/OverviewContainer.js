import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {Form} from "react-bootstrap";
import {connect} from "react-redux";
import {set_tab_selected} from "./actions/profileActions";
import RequestDataModal from "./RequestDataModal";
import {Typeahead} from "react-bootstrap-typeahead";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import DeleteDataModal from "./DeleteDataModal";
import LegalThreatModal from "./LegalThreatModal";


class OverviewContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            deleteModalShow: false,
            legalThreatShow: false
        };
    }

    setModalShow(bool) {
        this.setState({modalShow: bool})
    }

    setDeleteModalShow(bool) {
        this.setState({deleteModalShow: bool})
    }

    setLegalThreatShow(bool) {
        this.setState({legalThreatShow: bool})
    }

    setKey(k) {
        console.log(k)
        this.props.dispatch(set_tab_selected(k))

    }

    render() {
        return (
            <Container fluid>
                <RequestDataModal
                    show={this.state.modalShow}
                    onHide={() => this.setModalShow(false)}
                />
                <DeleteDataModal
                    show={this.state.deleteModalShow}
                    onHide={() => this.setDeleteModalShow(false)}
                />
                <LegalThreatModal
                    show={this.state.legalThreatShow}
                    onHide={() => this.setLegalThreatShow(false)}
                />
                <Row>
                    <Col><h1 style={{textAlign: "left", padding: "8px"}}><b>{this.props.profile.url}</b></h1></Col>
                </Row>
                <Row>
                    <Col>
                        <ButtonToolbar>
                            <ButtonGroup>
                                <Button variant="primary" onClick={() => this.setModalShow(true)}>
                                    Request Data Access
                                </Button>
                                <Button variant="secondary" onClick={() => this.setDeleteModalShow(true)}>Request
                                    Deletion of Data</Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col>
                        <Tabs activeKey={this.props.selected}
                              onSelect={(k) => this.setKey(k)}>
                            <Tab eventKey="Data" title="Data">
                                <h4 style={{textAlign: "left"}}>Data Overview</h4>
                                <p style={{textAlign: "left"}}>
                                    Here you can see an overview of the company and the available information which was
                                    extracted from your previous data requests.
                                </p>
                                <Form style={{border: '2px solid #000000', borderRadius: '5px'}}>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm="3">
                                            URL
                                        </Form.Label>
                                        <Col sm="9">
                                            <Form.Control plaintext readOnly defaultValue={this.props.profile.url}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm="3">
                                            Status
                                        </Form.Label>
                                        <Col sm="9">
                                            <Form.Control plaintext readOnly defaultValue={this.props.profile.status}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm="3">
                                            Last communication
                                        </Form.Label>
                                        <Col sm="9">
                                            <Form.Control plaintext readOnly
                                                          defaultValue={this.props.profile.last_comm}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm="3">
                                            Data
                                        </Form.Label>
                                        <Col sm="9">
                                            <Form.Control as="textarea" rows={10} readOnly
                                                          defaultValue={this.props.profile.data}/>
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </Tab>
                            <Tab eventKey="History" title="History">
                                <h4 style={{textAlign: "left"}}>Communication History</h4>
                                <p style={{textAlign: "left"}}>
                                    Below you find a summary of all communication which you had with the company in the
                                    past, including the type of request, date of sending / receipt and the complete
                                    content of the digital communication.
                                </p>
                                <Form>
                                    {
                                        this.props.profile.interaction
                                            .map(entry => (
                                                <div style={{border: '2px solid #000000', marginTop:"10px", borderRadius: '5px'}}>
                                                    <Form.Group as={Row}>
                                                        <Form.Label column sm="3">
                                                            {entry.date}
                                                        </Form.Label>
                                                        <Col sm="9">
                                                            <Form.Control plaintext readOnly
                                                                          defaultValue={entry.type + " (" + entry.iid + ")"}>
                                                            </Form.Control>
                                                            <Form.Control as="textarea" readOnly rows="5"
                                                                          defaultValue={entry.msg}>
                                                            </Form.Control>
                                                        </Col>
                                                    </Form.Group>
                                                </div>
                                            ))
                                    }

                                </Form>
                            </Tab>
                            <Tab eventKey="Legal" title="Legal">
                                <h4 style={{textAlign: "left"}}>Legal Action</h4>
                                <p style={{textAlign: "left"}}>
                                    If the company above has not responded within 30 days, this marks a breach of
                                    the GDPR laws. You are therefore eligible to enforce your rights through taking
                                    legal
                                    actions. We recommend (and assist) with taking the following measures:
                                </p>
                                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                                    <Row>
                                        <Col sm={4}>
                                            <ListGroup>
                                                <ListGroup.Item action href="#link1">
                                                    Send a legal threat
                                                </ListGroup.Item>
                                                <ListGroup.Item action href="#link2">
                                                    Take legal action
                                                </ListGroup.Item>
                                                <ListGroup.Item action href="#link3">
                                                    Join class action lawsuit
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Col>
                                        <Col sm={8}>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="#link1">
                                                    <h4 style={{textAlign: "left"}}>
                                                        Send a legal threat.
                                                    </h4>
                                                    <p style={{textAlign: "left"}}>
                                                        Similarly to requesting data, we have prepared a template which
                                                        you
                                                        can use to threaten the company with legal action. Should they
                                                        be in breach of the law by means of violating the GDPR
                                                        regulations, simply click on the button below, fill in the
                                                        information and we will inform the company on your behalf!
                                                    </p>
                                                    <ButtonToolbar>
                                                        <Button variant="primary"
                                                                onClick={() => this.setLegalThreatShow(true)}>Send Legal
                                                            Threat</Button>
                                                    </ButtonToolbar>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="#link2">
                                                    <h4 style={{textAlign: "left"}}>
                                                        Take individual legal action
                                                    </h4>
                                                    <p style={{textAlign: "left"}}>
                                                        Use our system to compile the communication between you and the
                                                        company into a comprehensive format. We will assist you with
                                                        finding a qualified lawyer who is willing to take on your case
                                                        and represent you against the company. You already have all
                                                        the evidence you need. Now it is time to claim your rights!
                                                    </p>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="#link3">
                                                    <h4 style={{textAlign: "left"}}>
                                                        Join a class action lawsuit.
                                                    </h4>
                                                    <p style={{textAlign: "left"}}>
                                                        Join our efforts for a class action lawsuit against the company.
                                                        Simply export the email communication between you and the
                                                        respective company and send it together with your personal
                                                        details to us. Once we have collected a sufficiently high number
                                                        of GDPR violations, we will launch a class action lawsuit
                                                        on your behalf!
                                                    </p>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Col>
                                    </Row>
                                </Tab.Container>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile.profile,
        selected: state.profile.selected,
        loading: state.profile.loading,
    }
}

export default connect(mapStateToProps)(OverviewContainer);