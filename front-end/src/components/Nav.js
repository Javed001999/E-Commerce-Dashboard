import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


const Nav = () => {
    //   Update Navbar with logout and Signup Menu
    const auth = localStorage.getItem("user");
    // Make a function for logout
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }

    // return (
    //     <div>

    //           <ul className="nav-ul">
    //             <li><Link to="/" >Products</Link></li>            {/* Make Links  OR alternate to Anchor Tag*/}
    //             <li><Link to="/add" >Add Product</Link></li>
    //             <li><Link to="/update" >Update Product</Link></li>
    //             <li><Link to="/profile" >Profile</Link></li> 

    //             {/*   Update Navbar with logout and Signup Menu */}
    //     {/* <li>{auth ? <Link onClick={logout} to="/signup" >Logout</Link> : <Link to="/signup" >Sign Up</Link>} </li>

    //             <li><Link to="/login" >Login</Link></li> */}

    //                              {/* OR */}
    //             {
    //                 auth ? <li><Link onClick={logout} to="/signup" >Logout</Link> </li>
    //                 :<>
    //                 <li> <Link to="/signup" >Sign Up</Link></li>
    //                 <li> <Link to="/login" >Login</Link></li>
    //                 </>
    //             }
    //         </ul> 
    //     </div>

    // );  

                                // OR UPDATE NAVBAR
    return (
        <div>
           <img
            alt="logo"
            className="logo"
            src='https://p1.hiclipart.com/preview/234/537/305/digital-marketing-ecommerce-shopping-cart-software-online-shopping-drop-shipping-web-design-retail-business-png-clipart.jpg' />
            
            {
            auth ? <ul className="nav-ul">
                <li><Link to="/" >Products</Link></li>            {/* Make Links  OR alternate to Anchor Tag*/}
                <li><Link to="/add" >Add Product</Link></li>
                <li><Link to="/update" >Update Product</Link></li>
                <li><Link to="/profile" >Profile</Link></li>
                                               {/* Show Log-in User Name in Navbar */}
                <li><Link onClick={logout} to="/signup" >Logout ({JSON.parse(auth).name}) </Link> </li>
                </ul>
                :
                <ul className="nav-ul nav-right">
                    <li> <Link to="/signup" >Sign Up</Link></li>
                    <li> <Link to="/login" >Login</Link></li>
                </ul>
            }
        </div>
    )
}
export default Nav;





