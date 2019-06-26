import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { goToNextPage, goToPrevPage, handleNationality } from '../../../actions/go_live';

export class Nationality extends Component {
    constructor() {
        super();
        this.state = {
            nationality: 'Indonesia',
            isIndonesia: true
        };
    }

    componentDidMount() {
        const { nationality } = this.props;
        this.setState({
            nationality,
            isIndonesia: nationality === 'Indonesia' ? true : false
        });
    }

    handleChange(e) {
        const { handleNationality } = this.props;
        e.preventDefault();
        this.setState({
            nationality: e.target.name,
            isIndonesia: e.target.name === 'Indonesia' ? true : false
        });
        handleNationality(e.target.name);
    }

    render() {
        const { currentScreen, goToNextPage, goToPrevPage } = this.props;
        const { isIndonesia } = this.state;
        return (
            <div>
                <h5>Your Nationality:</h5>
                <Form>
                    <Form.Check>
                        <Form.Check.Input checked={isIndonesia} name="Indonesia" type="radio" onChange={this.handleChange.bind(this)}/>
                        <Form.Check.Label>Indonesia</Form.Check.Label>
                    </Form.Check>
                    <Form.Check>
                        <Form.Check.Input checked={!isIndonesia} name="Foreign" type="radio" onChange={this.handleChange.bind(this)}/>
                        <Form.Check.Label>Foreign</Form.Check.Label>
                    </Form.Check>
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
    nationality: state.goLive.nationality
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    goToNextPage,
    goToPrevPage,
    handleNationality
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Nationality);
