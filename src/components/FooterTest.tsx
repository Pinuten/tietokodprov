import footerImg from '../assets/footerImg.png'
import { Container } from 'react-bootstrap'

const FooterTest = () => {
    return (
        <div style={{ backgroundImage: `url(${footerImg})`, height: "100%"}}>
            <div style={{ display: "flex", justifyContent: "center", padding: "3rem" }}>
                <div>
                    <h3>HJE HEJ</h3>
                    <p>HJE HEJ</p>
                    <p>HJE HEJ</p>
                    <p>HJE HEJ</p>
                </div>
                <div>
                    <h3>HJE HEJ</h3>
                    <p>HJE HEJ</p>
                    <p>HJE HEJ</p>
                    <p>HJE HEJ</p>
                </div>
            </div>

        </div>

    )
}

export default FooterTest