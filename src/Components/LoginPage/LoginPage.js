import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import inst_image from '../../images/9364675fb26a.svg';
import inst_logo from '../../images/logoinsta.png'; 
import './LoginPage.css'; 
import fb from '../../images/fb.png';
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';
import SignIN from "../SignIn/SignIN";
import SignUp from "../SignUp/SignUp";



class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLogin : true
        }
    }
    changelogin =() => {
        if(this.state.isLogin)
            this.setState({isLogin: false});
            else
            this.setState({isLogin: true});
    }

    render(){
        return(
            <div>
                <Grid container>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <div className="loginpage_main">
                            <div>
                                <img src={inst_image} width = "450"/>
                            </div>
                        <div>
                        <div className="loginpage_rightcomponent">
                                <img className="loginpage_logo" src={inst_logo}/> 
                            <div className="loginpage_signin">

                                {
                                    this.state.isLogin ? <SignIN/> : <SignUp/>
                                }

                            </div>

                            <div className="login_ORD">
                                <div className="login_divider"></div>
                                <div className="login_or">OR</div>
                                <div className="login_divider"></div>
                            </div>
                            <div className="login__fb">
                                <img src={fb} width="15px" style={{ "marginRight":"5px" }} />Log in with Facebook
                            </div>
                            <div className="login_forgt"> Forgot password?</div>
                        </div>
                        <div className="loginpage__signupoption">
                            {
                                this.state.isLogin ? 
                                <div className="loginPage__signin">
                                Don't have an account? <span onClick={this.changelogin} style={{"fontWeight":"bold","color":"#0395F6"}}>Sign up </span>
                            </div> :
                                <div className="loginPage__signup">
                                     Have an account? <span onClick={this.changelogin} style={{"fontWeight":"bold","color":"#0395F6"}}>Sign in </span>
                                 </div> 
                            }
                            
                            <div className="loginPage__downloadSection"> 
                                <div>
                                    Get the app.
                                    </div>
                           
                        <div className="loginPage_options">
                            <img className="loginPage_dwimg" src = {appstore} width = "136px"/>
                            <img className="loginPage_dwimg" src = {playstore} width = "136px"/>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
            </div>
        )
    }
}

export default LoginPage