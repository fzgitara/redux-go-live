import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { goToNextPage, goToPrevPage, handleBusiness } from '../../../actions/go_live';

export class BusinessDetails extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            phone: ''
        };
    }

    componentDidMount() {
        const { business } = this.props;
        this.setState({
            name: business.name,
            email: business.email,
            phone: business.phone
        });
    }

    handleChange(e) {
        const { name, email, phone } = this.state;
        const { handleBusiness } = this.props;
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
        const business = {
            name,
            email,
            phone
        };
        handleBusiness(business);
    }

    render() {
        const { name, email, phone } = this.state;
        const { currentScreen, goToNextPage, goToPrevPage } = this.props;
        return (
            <div>
                <h5>Your Business Details</h5>
                <Form>
                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email} name="email" placeholder="name@example.com" onChange={this.handleChange.bind(this)}/>
                    </Form.Group>
                    <Form.Group controlId="name">
                        <Form.Label>Business name</Form.Label>
                        <Form.Control type="text" value={name} name="name" placeholder="your business name" onChange={this.handleChange.bind(this)}/>
                    </Form.Group>
                    <Form.Group controlId="phone">
                        <Form.Label>Business phone</Form.Label>
                        <Form.Control type="number" value={phone} name="phone" placeholder="08xxxxxxxxxxxx" onChange={this.handleChange.bind(this)}/>
                    </Form.Group>
                </Form>
                <br />
                <Button variant="primary" size="lg"
                    onClick={() => goToPrevPage(currentScreen)}
                >Prev</Button>
                <Button variant="primary" size="lg" style={{float: 'right'}}
                    onClick={() => goToNextPage(currentScreen)}
                >Next</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentScreen: state.goLive.currentScreen,
    business: state.goLive.business
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    goToNextPage,
    goToPrevPage,
    handleBusiness
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BusinessDetails);
