import { Grid } from "@material-ui/core";
import React, {Component} from "react";
import MainPage from "../MainPage/MainPage";
import StatusBar from "../StatusBar/StatusBar";
import '../MainContent/MainContent.css';
import InfoSection from "../InfoSection/InfoSection";
import Suggestion from "../Suggestion/Suggestion";


class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render(){
        return(
            <div>
                <Grid container>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={6}>
                        <div>
                            <StatusBar/>
                            <MainPage/>
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <InfoSection/>
                        <Suggestion/>
                    </Grid>
                    <Grid item xs={2}>
                        
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default MainContent;