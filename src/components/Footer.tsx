import footerImg from '../assets/footerImg.png'
import { Container } from 'react-bootstrap'
import {isMobile} from 'react-device-detect';

const Footer = () => {
    return (
        <div style={{ paddingTop: "5rem" }}>
        <footer className="bg-dark text-light py-3" style={{ backgroundImage: `url(${footerImg})`,backgroundSize:'100%'}}>

            <div className="container">
                <div className="row">
                    <div className="col-md" style={{fontSize:16}}>
                        <p>EGET MALESUADA</p>
                        <p>Sed magna dictum porta</p>
                        <p>Cras ultricies ligula</p>
                        <p>Curabitur</p>
                        <p>Pretium</p>
                        <p>Proin eget torto</p>   
                    </div>
                     {isMobile && <hr style ={{ background: 'white', color: 'white', height: "5px"}}/>}
                    <div className="col-md" style={{fontSize:16}}>
                        <p>PRETIUM</p>
                        <p>Sed magna dictum porta</p>
                        <p>Cras ultricies ligula</p>
                        <p>Curabitur</p>
                        <p>Pretium</p>
                    </div>  

                    <div className="col-md">
                        <form>
                            <div className="form-group">
                                <label htmlFor="selectControl"> <p>TORTOR RISUS</p></label>
                                <select className="form-control" id="selectControl">
                                    <option>Hej</option>
                                    <option>Tieto</option>
                                    <option>Jag</option>
                                    <option>Är</option>
                                    <option>Axel</option>
                                </select>
                            </div>
                            <div className="form-group" style={{ paddingTop: "1rem" }}>
                                <textarea className="form-control" id="textArea" rows={3} ></textarea>
                                <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "1rem", alignItems: "center" }}>
                                    <div>
                                        <input className="form-check-input" type="checkbox" value="" id="checkbox1" />
                                        <label className="form-check-label" htmlFor="checkbox1">
                                            Proins egur tortur
                                        </label>
                                    </div>
                                    <button id="grey-button" onClick={() => alert("Submitted")}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div> 

                </div>
            
            </div>
        </footer>
    </div>
    )
}
        

export default Footer