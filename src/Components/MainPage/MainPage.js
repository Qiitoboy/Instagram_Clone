import React, {Component} from "react";
import '../MainPage/MainPage.css';
import Post from "../Post/Post";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postArray:[]
         }
    }

    componentDidMount(){
        this.getPost();
    }

    getPost=()=>{
        let data =[
            { 
            "postid": "01254",
            "username":"Caleb",
            "postImageURl":"https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_1280.jpg",
            "timeStamp" : "4578",
            "likes":"2468"
            },
            { 
                "postid": "0587",
                "username":"Ransford",
                "postImageURl":"https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_1280.jpg" ,
                "timeStamp" : "4578",
                "likes":"2468"
            },
            { 
                "postid": "0753",
                "username":"Maxwell",
                "postImageURl":"https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_1280.jpg",
                "timeStamp" : "4578",
                "likes":"2468"
            },
            { 
                "postid": "08745",
                "username":"Danny",
                "postImageURl":"https://cdn.pixabay.com/photo/2014/01/22/19/44/flower-field-250016_1280.jpg",
                "timeStamp" : "4578",
                "likes":"2468"
            }
        ];
        this.setState({postArray: data});
    }

    render(){
        return(
            <div>
                {
                    this.state.postArray.map((item, index)=>(
                        <Post id={item.postid} username={item.username} postimage={item.postImageURl} likes={item.likes}/>
                    ))
                }

            </div>
        );
    }
}
export default MainPage;