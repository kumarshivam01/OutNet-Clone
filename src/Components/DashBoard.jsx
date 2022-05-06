
import "../Style/DashBoard.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCardIcon from '@mui/icons-material/AddCard';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import EmailIcon from '@mui/icons-material/Email';
const name="GYAN"
export const DashBoard=()=>{


 return (


    <div className="dashmain">
<p>`GOOD AFTER NOON {name}`</p>
<h1>Welcome to your Account</h1>
<div className="dashBoardContainer">

    <div className="dashmin"> 
    <span><AddShoppingCartIcon/></span> <span>My Order</span>
        
        <p>Track Your order or create a return</p>

    </div>
    <div className="dashmin"><span><FavoriteIcon/></span> <span>Wish List</span>
    <p>Save the items you love for later and make sure you don't miss out !</p>
    </div>
    <div className="dashmin"><span><HomeIcon/></span> <span>Address Book</span> <p>Manage your addresses</p> </div>
    <div className="dashmin"><span><AccountCircleIcon/></span> <span>Account Details</span> <p>Change your sign in information</p></div>
    <div className="dashmin"><span><AddCardIcon/></span> <span>Saved Cards</span> <p>View and delete your payment details</p> </div>
    <div className="dashmin"><span><LoyaltyIcon/></span> <span>Store Credit</span> <p>Check your balance and transactions</p> </div>
    <div className="dashmin"><span><EmailIcon/></span> <span>Marketing Preferences</span> <p>Tailor your email from us</p> </div>

</div>

    </div>


 )

}