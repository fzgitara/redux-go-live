import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { goToNextPage, goToPrevPage, handleUser } from '../../../actions/go_live';

export class UserDetails extends Component {
    constructor() {
        super();
        this.state = {
            full_name: '',
            location: ''
        };
    }

    componentDidMount() {
        const { user } = this.props;
        this.setState({
            full_name: user.full_name,
            location: user.location
        });
    }

    handleChange(e) {
        const { full_name, location } = this.state;
        const { handleUser } = this.props;
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
        const user = {
            full_name,
            location
        };
        handleUser(user);
    }

    render() {
        const { full_name, location } = this.state;
        const { currentScreen, goToNextPage, goToPrevPage } = this.props;
        return (
            <div>
                <h5>Your Business Details</h5>
                <Form>
                    <Form.Group controlId="full_name">
                        <Form.Label>Full name</Form.Label>
                        <Form.Control type="text" value={full_name} name="full_name" placeholder="your full name" onChange={this.handleChange.bind(this)}/>
                    </Form.Group>
                    <Form.Group controlId="location">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" value={location} name="location" placeholder="your location" onChange={this.handleChange.bind(this)}/>
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
    user: state.goLive.user
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    goToNextPage,
    goToPrevPage,
    handleUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
