import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import '../style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { goToNextPage } from '../../../actions/go_live';

import Nationality from '../components/nationality';
import BusinessDetails from '../components/businessDetails';
import UserDetails from '../components/userDetails';
import Confirmation from '../components/confirmation';

export class GoLive extends Component {
    firstScreen() {
        const { goToNextPage, currentScreen } = this.props;
        return (
            <div>
                <Button variant="primary" size="lg"
                    onClick={() => goToNextPage(currentScreen)}
                >Next</Button>
            </div>
        );
    }

    render() {
        const { currentScreen } = this.props;
        let screen;

        switch (currentScreen) {
            case 0:
                screen = this.firstScreen()
                break;
            case 1:
                screen = <Nationality />
                break;
            case 2:
                screen = <BusinessDetails />
                break;
            case 3:
                screen = <UserDetails />
                break;
            case 4:
                screen = <Confirmation />
                break;
            default:
                break;
        }

        return (
            <div className="container">
                <Card className="container">
                    <h2>Activate Your Account</h2>
                    <h4>Page {currentScreen}</h4>
                    <p>Ready to process real transactions with us? Great!</p>
                    <p>There are just a few simple steps we need to go through, in order for you to do so.</p>
                </Card>
                <Card className="container">
                    {screen}
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentScreen: state.goLive.currentScreen
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    goToNextPage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GoLive);
