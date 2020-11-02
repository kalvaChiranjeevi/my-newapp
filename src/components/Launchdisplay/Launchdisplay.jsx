import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import './styles.css';


  
  
export class Launchdisplay extends React.Component{

    state = {
        info :{
            links:{
                flickr_images:[]
            }
        }
    }
    componentDidMount = () => {

        const fnumber = this.props.match.params.flight_number;
        this.getsinglelaunch(fnumber);
    }

    getsinglelaunch = (fnumber) =>{

        axios.get('https://api.spacexdata.com/v3/launches/'+ fnumber).then(response =>{
           
            this.setState({
                info: response.data
              });
              
              console.log(this.state.info.links.flickr_images);
              
        }).catch((error)=>{
            console.log('error');
        })

       
    }


    misionAttibutes = (title, value) =>{
        return(<div>
            <h1>{title}:</h1>
            <p>{value}</p>
        </div>);
       } 

       
    render(){
        const single_launch = {
            padding:'10px',
            background:'white',
            marginTop:'20px',
            boxShadow:'2px 2px 10px 2px grey',
            borderRadius:'4px',
        }

        const images = this.state.info.links.flickr_images.length > 0 ;
        const Slideshow = () => {
            return (
              <div className="slide-container">
               { images && ( <Zoom scale={0.4}>
                  {
                    this.state.info.links.flickr_images.map((each, index) => <img alt='flikrimage' key={index} style={{width: "100%"}} src={each} />)
                  }
                </Zoom>)
                 }
              </div>
            )
        }

        return(
            <div className="single-launch" style={single_launch}>
                { this.misionAttibutes('Mission Name', this.state.info.mission_name) }

                
                    { Slideshow()}
                 
 

                { this.misionAttibutes('Mission Details', this.state.info.details) }
                { this.misionAttibutes('Launch Date', this.state.info.launch_date_local) }
                { this.misionAttibutes('Racket Name', this.state.info.rocket_name) }
                { this.misionAttibutes('Flight_id', this.state.info.roflight_idcket_name) }

                { this.misionAttibutes('Customer', this.state.info.customer) }
                { this.misionAttibutes('Launch_success', this.state.info.launch_success) }
                { this.misionAttibutes('Article_link', this.state.info.article_link) }



           </div>
        );
    }
}



export default withRouter(Launchdisplay);




   