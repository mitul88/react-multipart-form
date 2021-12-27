import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';


export class Confirm extends Component {

    continue = e => {
        e.preventDefault();
        // this is where you call backend to submit the form

        this.props.nextStep()
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep()
    }

    render() {

        const { values } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar
                        title="Enter Personal Details"
                    />
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={values.firstName}
                        />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={values.lastName}
                        />
                        <ListItem
                            primaryText="Email"
                            secondaryText={values.email}
                        />
                        <ListItem
                            primaryText="Occupation"
                            secondaryText={values.occupation}
                        />
                        <ListItem
                            primaryText="City"
                            secondaryText={values.city}
                        />
                        <ListItem
                            primaryText="Bio"
                            secondaryText={values.bio}
                        />
                    </List>
                    <br />
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default Confirm
