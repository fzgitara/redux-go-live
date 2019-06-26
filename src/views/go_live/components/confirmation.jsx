import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Confirmation extends Component {
    constructor() {
        super();
        this.state = {
            nationality: '',
            business: {},
            user: {}
        };
    }

    componentDidMount() {
        const { nationality, business, user } = this.props;
        this.setState({
            nationality,
            business,
            user
        });
    }

    render() {
        const { nationality, business, user } = this.state;

        return (
            <div>
                <h2>Your Data</h2>
                <h3>Nationality</h3>
                <p><strong>{nationality}</strong></p>
                <h3>Business Details</h3>
                <h4>Business Name</h4>
                <p>{business.name}</p>
                <h4>Business Email</h4>
                <p>{business.email}</p>
                <h4>Business Phone</h4>
                <p>{business.phone}</p>
                <h3>User Details</h3>
                <h4>Full Name</h4>
                <p>{user.full_name}</p>
                <h4>Location</h4>
                <p>{user.location}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
   nationality: state.goLive.nationality,
   business: state.goLive.business,
   user: state.goLive.user 
});

export default connect(mapStateToProps, null)(Confirmation)
