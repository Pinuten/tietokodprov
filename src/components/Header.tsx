import React  from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import logo from "../assets/Vector.png";
import banner from "../assets/bannerImg.png";
import Profile from '../components/Profile';
import Dropdown from 'react-bootstrap/Dropdown';
import {isMobile} from 'react-device-detect';

import NavDropdown from 'react-bootstrap/NavDropdown';


//onClick= {() => navigate("/")}


const Header = () => {

    console.log("är vi i mobil? ", isMobile)

    return (
        // <Container>
          <Navbar id="navigation" expand="lg" variant="light" bg="grey" className ="py-4" >
            <Container>        
              <Navbar.Brand href="#" style={{ paddingRight: "15rem" }}>
                <img 
                    className="navbarLogo d-inline-block align-top"
                    alt = "Acme Loga"
                    src={logo}
                 
                />
              </Navbar.Brand>
                <div id="navbarText" className="row d-flex flex-fill justify-content-between pl-10">

                    {
                        isMobile ? (  
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Dropdown"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="#action/3.1"> SED MAGMA</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">  Ultricies ligula</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Curabitur</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Proin eget torto</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    {   <Profile/> }
                                </NavDropdown.Item>
                            </NavDropdown>
                            ) : 
                            (
                            <>
                                <div className="col-md">
                                <p style={{textDecoration: "underline"}}>
                                    SED MAGMA
                                </p>
                                </div>
                                <div className="col-md">
                                    <p >
                                        Ultricies ligula
                                    </p>
                                </div>
                                <div className="col-md">
                                    <p>
                                        Curabitur
                                    </p>
                                </div> 
                                <div className="col-md">
                                    <p>
                                        Proin eget torto
                                    </p>
                                </div>      
                                <div className="col-md">
                                    <Profile/>
                                </div>
                            </>
        
                            )
                    }
                </div>
            </Container>
          </Navbar>
        // </Cont ainer>
      );
}



const TestHeader = () => {
    // const navigate = useNavigate();

    return (
        // <div>
            <Navbar  bg="dark">
                <Container>
                <Navbar.Brand >
                    <img 
                    className="navbarLogo d-inline-block align-top"
                    alt = "Acme Loga"
                    src={logo}
                    />
                </Navbar.Brand>
                <div className="d-flex flex-fill justify-content-end">
                    {/* <Link className="px-5" to ="/"> */}
                        <a style={{fontFamily:"inter", textDecoration: "underline"}}>
                            SED MAGMA
                        </a>
                    {/* </Link> */}
                    <p style={{fontFamily: "inter"}}>
                    Ultricies ligula

                    </p>
                    <p style={{fontFamily: "inter"}}>
                    Curabitur
                    </p>
                    <p style = {{fontFamily: "inter"}}>
                    Proin eget torto
                    </p>
                    
                </div>
                </Container>    
            </Navbar>
        // </div>
    )
}



export default Header

// const Header = () => {
//     const [expanded, setExpanded] = useState(false);

//     const toggleNavbar = () => {
//         setExpanded(!expanded);
//     }

//     return (
//         <Navbar id="navigation" expand="lg" variant="light" bg="grey" className ="py-4" expand="lg" collapseOnSelect>
//             <Container>        
//                 <Navbar.Brand href="#" style={{ paddingRight: "15rem" }}>
//                     <img 
//                         className="navbarLogo d-inline-block align-top"
//                         alt="Acme Logo"
//                         src={logo}
//                     />
//                 </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleNavbar} />
//                 <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
//                     <Nav className="mr-auto" navbar>
//                         <div id="navbarText" className="row d-flex flex-fill justify-content-between pl-10">
//                             <div className="col-md">
//                                 <Link className="nav-link" to="/">
//                                     SED MAGMA
//                                 </Link>
//                             </div>
//                             <div className="col-md">
//                                 <Link className="nav-link" to="/">
//                                     Ultricies ligula
//                                 </Link>
//                             </div>
//                             <div className="col-md">
//                                 <Link className="nav-link" to="/">
//                                     Curabitur
//                                 </Link>
//                             </div> 
//                             <div className="col-md">
//                                 <Link className="nav-link" to="/">
//                                     Proin eget torto
//                                 </Link>
//                             </div>      
//                             <div className="col-md">
//                                 <Profile/>
//                             </div>                   
//                         </div>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// export default Header;