import React from 'react';
import {Launch} from '../Launch/Launch.jsx';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './styles.css';
export class Lanches extends React.Component{

    state = {
        lanches :[]
    }
    componentDidMount = () =>{
        this.getLaunch();
    }

    getLaunch= ()=>{
        axios.get('https://api.spacexdata.com/v3/launches').then(response =>{
           
            this.setState({
                lanches: response.data
              });
        
              
        }).catch((error)=>{
            console.log('error');
        })

      }

      launchList = () =>{
         const comnentLanchlist =  this.state.lanches.map((launch, index) => {
             const img = launch.links.flickr_images.length === 0 ? 'https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg':launch.links.flickr_images[0]
              const description =  launch.details == null ? 'Hi this is my first react app': launch.details;
             return <Link  key= {'launch'+index}
                            to={'/launchinfo/'+ launch.flight_number}>
                        <Launch  title={launch.mission_name} 
                        launchDate={launch.launch_date_local} 
                        description={description}
                        imgBanner={img} />
                </Link> 
          })
          return comnentLanchlist;
      }
    render(){
            
        return(
            <div className='launch-list'>
                {this.launchList()}
              
            </div>
        );

    }
}