import React, {Component} from "react";
import '../StatusBar/StatusBar.css';
import Avatar from '@material-ui/core/Avatar';
import statusimg from '../images/pp1.png';


class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusList: []
        }

    }
    componentDidMount(){
        this.getData();
    }
    getData=() =>{
        let data=[
            {
                "username": "odoom",
                "imageURL":'../images/pp1.png'
            },
            {
                "username": "Ranford",
                "imageURL":'../images/pp1.png'
            }
            ,
            {
                "username": "Caleb",
                "imageURL":'../images/pp1.png'
            }
            ,
            {
                "username": "Danny",
                "imageURL":'../images/pp1.png'
            }
            ,
            {
                "username": "Maxwell",
                "imageURL":'../images/pp1.png'
            },
            {
                "username": "Gosh",
                "imageURL":'../images/pp1.png'
            },
            {
                "username": "Backup",
                "imageURL":'../images/pp1.png'
            },
            {
                "username": "Pendrive",
                "imageURL":'../images/pp1.png'
            },
            {
                "username": "Sharp",
                "imageURL":'../images/pp1.png'
            },
            {
                "username": "Shooter",
                "imageURL":'../images/pp1.png'
            }
        ]
        this.setState({statusList: data});
    }

    render(){
        return(
            <div>
                <div className="statusbar__container">
                    {
                        this.state.statusList.map((item,index)=>(
                            <div className="status">
                            <Avatar className="statusbar__status" src={statusimg}/>
                            <div className="statusbar__text">{item.username}</div>
                            </div>
                        ))
                    }

                </div>
            </div>
        );
    }
}
export default StatusBar;