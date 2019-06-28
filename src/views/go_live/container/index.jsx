import React, { Component } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import '../style.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTranslation, Translation, Trans } from 'react-i18next';
import { goToNextPage } from '../../../actions/go_live';

import Nationality from '../components/nationality';
import BusinessDetails from '../components/businessDetails';
import UserDetails from '../components/userDetails';
import Confirmation from '../components/confirmation';

export class GoLive extends Component {
    handleChange(e) {
        const { i18n } = this.props;

        console.log("selected val is ", e.target.value);
        let newlang = e.target.value;
        this.setState(prevState => ({ value: newlang }));
        console.log("state value is", newlang);
        i18n.changeLanguage(newlang);
    }

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
        const { currentScreen, t } = this.props;
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
                    <Form>
                        <Form.Check>
                            <Form.Check.Input value="id" type="radio" onChange={this.handleChange.bind(this)}/>
                            <Form.Check.Label>Indonesia</Form.Check.Label>
                        </Form.Check>
                        <Form.Check>
                            <Form.Check.Input value="en" type="radio" onChange={this.handleChange.bind(this)}/>
                            <Form.Check.Label>English</Form.Check.Label>
                        </Form.Check>
                    </Form>
                </Card>
                <Card className="container">
                    <h2>{t('Activate Your Account')}</h2>
                    <h4>{t('Page')} {currentScreen}</h4>
                    <p>{t('Ready to process real transactions with us? Great!')}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(GoLive));
