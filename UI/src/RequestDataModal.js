import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {Typeahead} from "react-bootstrap-typeahead";
import {Form} from "react-bootstrap";
import {QuestionCircle} from "react-bootstrap-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import {connect} from "react-redux";
import {postDataRequest} from "./api/APICalls";


class RequestDataModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name:"", account:""};
        this.setName = this.setName.bind(this);
        this.setAccount = this.setAccount.bind(this);
    }

    setName(event) {
        this.setState({name: event.target.value})
    }

    setAccount(event) {
        this.setState({account: event.target.value})
    }

    submitData(onHide) {
        console.log(this.state.name);
        console.log(this.state.account);
        console.log(this.props.selected);
        // Dispatch fetch here
        postDataRequest(this.state.name, this.state.account, this.props.selected);

        onHide()

        this.setState({allData: false, data: [], name: [], account: []})
    }


    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Request Data
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Right for access</h4>
                    <p>
                        According to the current GDPR regulations (Article 15, Recitals 63 & 64 GDPR) you have a right
                        for access to your data. To suitably assist you with the process, please fill in the fields
                        below and we will automatically forward a legally correct request to the concerned company asking
                        to supply you with information about the personal data which they hold about you.
                    </p>
                    <Form>
                        <Form.Group>
                            <Form.Label>Legal Name</Form.Label>
                            <Form.Control type="text" placeholder="your legal name" name="name" onChange={this.setName}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Account Identifier { }
                                <OverlayTrigger overlay={
                                    <Tooltip id="tooltip-disabled">Use your username or associated email address</Tooltip>
                                }>
                        <span className="d-inline-block">
                            <QuestionCircle/>
                        </span>
                                </OverlayTrigger>
                            </Form.Label>
                            <Form.Control type="text" placeholder="your account name" name="account" onChange={this.setAccount}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => this.submitData(this.props.onHide)}>Request Data</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selected: state.company.selected,
    }
}

export default connect(mapStateToProps)(RequestDataModal);
