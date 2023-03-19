import profile from '../assets/profileSymbol.png'
import Button from 'react-bootstrap/Button'

const Profile = () => {
    return(
            <button id="grey-button"><img src={profile} />SUSCIPIT</button>
        // <div className='button-container'>
        //     <div className ="text-overlay">
        //         <img src = {profile}>
        //         </img> 
        //          <p>SUSCIPIT</p>
        //     </div>
        // </div>
    )
}
export default Profile  