import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import {connect} from "react-redux";
import {get_companies, set_companies_selected} from "./actions/companiesActions";
import Col from "react-bootstrap/Col";
import {Form} from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import {fetchCompanies} from "./api/APICalls";
import Button from "react-bootstrap/Button";
import {ArrowRepeat} from "react-bootstrap-icons";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Row from "react-bootstrap/Row";


class SiteList extends React.Component {


    selectOption(entry) {
        console.log(entry);
        this.props.dispatch(set_companies_selected(entry));
    }

    selectRefresh() {
        console.log("Refresh");
        fetchCompanies(this.props.dispatch);
    }

    loadingSpinner(loading) {
        if (this.props.loading) {
            return <Spinner animation="border"/>
        }
    }

    render() {

        return (
            <Container fluid>
                <Row>
                    <Col>
                <h5 style={{textAlign:"left", paddingTop: "8px"}}>
                    <b>Available Companies</b>
                </h5>
                    </Col>
                </Row>
                <ButtonToolbar>
                <Button onClick={() => this.selectRefresh()} variant="link">Refresh <ArrowRepeat/></Button>
                {this.loadingSpinner(this.props.loading)}
                </ButtonToolbar>
                <ListGroup>
                    {
                        this.props.companies
                            .map(entry => (
                                <ListGroup.Item
                                    style={{textAlign:"left"}}
                                    action onClick={() => this.selectOption(entry.id)}
                                                active={this.props.selected === entry.id}>{entry.url}</ListGroup.Item>
                            ))
                    }
                </ListGroup>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        companies: state.company.companies,
        selected: state.company.selected,
        loading: state.company.loading,
    }
}

export default connect(mapStateToProps)(SiteList);