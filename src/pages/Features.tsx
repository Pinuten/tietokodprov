import React from "react";
import Container from 'react-bootstrap/Container';
import c1 from "../assets/circle1.png";
import c2 from "../assets/circle2.png";
import c3 from "../assets/circle3.png";
import {isMobile} from 'react-device-detect'

const Features = () => {
return (
    <Container> 
    {/* <div  style={{display:flex;justify-content:center;align-items:center;}"> */}
    <div style={{display:"grid", gridAutoColumns: "1fr"}}>
        <div style = {{display:"flex", justifyContent: "center"}}>
            <div style = {{width: isMobile ? "10%": "auto"}}>
                <img src={c1} className ="featureImg" alt=""  />
            </div>
            <div style={{width: "50%", display: "flex", alignItems: "center"}}>
                <div style={{ padding: "2rem" }}>
                    <h2> Proin eget tortor risus?</h2>
                    <p> Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Proin eget tortor risus.</p>   
                </div> 
            </div>
        </div>
        <div style = {{display:"flex", justifyContent: "center"}}>
            <div style={{width: "50%", display: "flex", alignItems: "center"}}>
                <div style={{ padding: "2rem" }}>
                    <h2> Proin eget tortor risus?</h2>
                    <p> Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Proin eget tortor risus.</p>   
                </div> 
            </div>
            <div style = {{width: isMobile ? "10%": "auto"}}>
                <img src={c2} className ="featureImg" alt=""  />
            </div>
        </div>
        <div style = {{display:"flex", justifyContent: "center"}}>
        <div style = {{width: isMobile ? "10%": "auto"}}>
                <img src={c3} className ="featureImg" alt=""  />
            </div>
            <div style={{width: "50%", display: "flex", alignItems: "center"}}>
                <div style={{ padding: "2rem" }}>
                    <h2> Proin eget tortor risus?</h2>
                    <p> Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Proin eget tortor risus.</p>   
                </div> 
            </div>
        </div>
    </div>
    
    </Container>    
    )
}
export default Features; 