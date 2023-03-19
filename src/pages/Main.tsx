import React from "react";
// import {useNavigate} from "react-router-dom";
import {Container} from "react-bootstrap";
import tietoSkyline from "../assets/tietoSkyline.png";
import Card from "react-bootstrap/Card";
import arrowVector from '../assets/arrowVector.png'

import {isMobile} from 'react-device-detect';



const Main = () => {
    // const history = useNavigate();
    function handleClick(path:string){
        // history(path);
        }
return (
    <Container style={{ paddingTop: "3rem " }}>
    <figure className="position-relative" >
        <img src={tietoSkyline} alt="Skyline" className="img-fluid"/>
        <figcaption style={{ width: isMobile ? "100%" : "50%" }}>
            <h2>Quisque velit nisi</h2>
            <p>Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Proin eget tortor risus.</p>
        </figcaption>
    </figure>

    

    <div className ="d-flex flex-fill flex-column flex-md-row justify-content-between">
        <div className="card mb-3" style={{width: "23rem"}}>
            <div className="card-body">
                <h5 className="card-title">Quisque velit nisi</h5>
                <p className="card-text">Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                <div>
                    <a href="#" className="card-link" style ={{color: "black"}}>  Quisque velit nisi</a>
                    <img src={arrowVector} alt="" className= "ml-2"/>
                </div> 

            </div>
        </div>
        <div className="card mb-3" style={{width: "23rem"}}>
            <div className="card-body">
                <h5 className="card-title">Quisque velit nisi</h5>
                <p className="card-text">Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in.</p>
                <a href="#" className="card-link" style ={{color: "black"}}>Quisque velit nisi</a>
                <img src={arrowVector} alt=""/> 
            </div>
        </div>

        <div className="card mb-3" style={{width: "23rem"}}>
            <div className="card-body">
                <h5 className="card-title">Curabitur non nulla 
sit amet</h5>
                <p className="card-text">Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Proin eget tortor risus.</p>
                <div>
                    <a href="#" className="card-link" style ={{color: "black"}}>Quisque velit nisi</a>
                    <img src={arrowVector} alt=""/> 
                </div>


            </div>
        </div>
    </div>

    </Container> 

)
}




    
    {/* <div className="card-container">
        <div className="card">
            <h5 className="card-title">
            Quisque velit nisi
            </h5>
            <p className="card-text">
            Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            </p>
            <a href="#" className="card-link">
            Quisque velit nisi
            </a>
        </div>
        <div className="card">
        <h5 className="card-title">
        Quisque velit nisi
                    </h5>
            <p className="card-text">
            Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in.            </p>
            <a href="#" className="card-link">
            Quisque velit nisi            </a>
        </div>
        <div className="card">
        <h5 className="card-title">
        Curabitur non nulla 
sit amet            </h5>
            <p className="card-text">
            Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Proin eget tortor risus.            </p>
            <a href="#" className="card-link">
            Quisque velit nisi            </a>
        </div> */}
    
    {/* här sätter vi herobanner  */}
    {/* <div style = {{ display: "flex"}}>
    <img src ={} alt="" />
    <div style={{ width: 50%}}
        <h2>hej hej i heading </h2>
    <p> hej brödtext</p>
    </div>

    </div>
    <div style = {{ display: "flex"}}>
    <img src ={} alt="" />
    <div style={{ width: 50%}}
        <h2>hej hej i heading </h2>
    <p> hej brödtext</p>
    </div>
*/}
    {/* </div> */}
    


export default Main