import * as React from "react";
import {Fragment} from "react";

import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Input from "@material-ui/core/Input/Input";

import Keyboard from "@material-ui/icons/Keyboard";
import Group from "@material-ui/icons/Group";
import Add from "@material-ui/icons/Add";
import Event from "@material-ui/icons/Event";
import Paper from "@material-ui/core/Paper/Paper";

export class BasicAppLayout extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {
        return <Fragment>
            <CssBaseline/>

            {/* Application top bar */}
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit"><Keyboard/></Button>
                    <Typography variant="h6" color="inherit" style={{marginRight: 16}}>
                        Application
                    </Typography>
                    <Group style={{marginRight: 16}}/>
                    {/*
                    {{ flex: 1 }}
                    "application" typography is taking all available space
                    and causing elements to spread right and left
                    */}
                    <Typography variant="caption" color="inherit" style={{marginRight: 16, flex: 1}}>
                        Application
                    </Typography>
                    <IconButton color="inherit">
                        <Add/>
                    </IconButton>
                    <IconButton color="inherit">
                        <Event/>
                    </IconButton>
                    <div>
                        <Input placeholder="Login" disableUnderline={true} style={{
                            color: "black",
                            backgroundColor: "white",
                            borderRadius: 4,
                            paddingLeft: 4,
                            marginRight: 8
                        }}/>
                        <Input placeholder="Password" disableUnderline={true} type="password" style={{
                            color: "black",
                            backgroundColor: "white",
                            borderRadius: 4,
                            paddingLeft: 4,
                            marginRight: 8
                        }}/>
                        <Button variant="outlined" color="inherit">Login</Button>
                    </div>
                </Toolbar>
            </AppBar>

            {/* Application "body", everything inside it will be placed bellow app bar */}
            <main style={{ padding: 24, paddingTop: 8}}>
                    App content
            </main>
        </Fragment>
    }
}
