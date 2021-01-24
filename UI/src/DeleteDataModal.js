import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {Typeahead} from "react-bootstrap-typeahead";
import {Form} from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import {QuestionCircle} from "react-bootstrap-icons";
import {connect} from "react-redux";
import {DATA_CATEGORIES_FACEBOOK} from "./constants/const";


class DeleteDataModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {allData: false, data: [], name: [], account: []};
        this.setName = this.setName.bind(this);
        this.setAccount = this.setAccount.bind(this);
        this.setData = this.setData.bind(this);
    }

    changeAllData() {
        this.setState({allData: !this.state.allData});
    }

    setName(event) {
        this.setState({name: event.target.value})
    }

    setAccount(event) {
        this.setState({account: event.target.value})
    }

    setData(event) {
        this.setState({data: event})
    }

    submitData(onHide) {
        console.log(this.state.name);
        console.log(this.state.account);
        console.log(this.state.data);
        console.log(this.state.allData);
        console.log(this.props.selectedCompany);
        let options = [];
        if (this.state.data.length > 0) {
            options = this.state.data.map((i) => (i.name));
        } else {
            options = [];
        }
        console.log(options);
        // Dispatch fetch here
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
                        for the erasure of your data. To suitably assist you with the process, please fill in the fields
                        below and we will automatically forward a legally correct request to the concerned company. You
                        have
                        the option to select which types of data you would like erased.
                    </p>
                    <Form>
                        <Form.Group>
                            <Form.Label>Legal Name</Form.Label>
                            <Form.Control type="text" placeholder="your legal name" onChange={this.setName}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Account Identifier {}
                                <OverlayTrigger overlay={
                                    <Tooltip id="tooltip-disabled">Use your username or associated email
                                        address</Tooltip>
                                }>
                        <span className="d-inline-block">
                            <QuestionCircle/>
                        </span>
                                </OverlayTrigger>
                            </Form.Label>
                            <Form.Control type="text" placeholder="your account name" onChange={this.setAccount}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Types of Data {}
                                <OverlayTrigger overlay={
                                    <Tooltip id="tooltip-disabled">Select the types of data which apply, make your own
                                    specifications or select all data.</Tooltip>
                                }>
                        <span className="d-inline-block">
                            <QuestionCircle/>
                        </span>
                                </OverlayTrigger>
                            </Form.Label>
                            <Typeahead
                                allowNew
                                labelKey="name"
                                multiple
                                disabled={this.state.allData}
                                positionFixed
                                options={DATA_CATEGORIES_FACEBOOK}
                                placeholder="Select types of data to be requested..."
                                onChange={this.setData}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Check
                                key={"All Data"}
                                label={"All Data"}
                                onChange={() => this.changeAllData()}
                                type="checkbox"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => this.submitData(this.props.onHide)}>Request Deletion of Data</Button>
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

export default connect(mapStateToProps)(DeleteDataModal);