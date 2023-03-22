import logo from './logo.png';
import './Footer.css';

function Footer(){
    return(
        <footer>
            <div class="row">
                <div class="col-3 footer_logo">
                    <img src={logo}  width="20%" height="20%" alt="Little Lemon Logo"/>
                </div>
                <div class="col-3">
                    <h3>Doormat Navigation</h3>
                    <h5>Home</h5>
                    <h5>About</h5>
                    <h5>Menu</h5>
                    <h5>Reservations</h5>
                    <h5>Order Online</h5>
                    <h5>Login</h5>
                </div>
                <div class="col-3">
                <h3>Contact</h3>
                    <h5>Address</h5>
                    <h5>Phone Number</h5>
                    <h5>Email</h5>
                </div>
                <div class="col-3">
                <h3>Social Media Links</h3>
                    <h5>Instagram</h5>
                    <h5>Facebook</h5>
                    <h5>Twitter</h5>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;