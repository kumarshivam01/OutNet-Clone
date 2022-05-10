import "../Style/PaymentWay.css"
// import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";
// import {addCart} from '../Redux/action'
export const PaymentWay = () => {
    return (
    <>

        <div className="container">

            <form action="">

                <div className="row">

                    <div className="col">

                        <h3 className="title">billing address</h3>

                        <div className="inputBox">
                            <span>full name :</span>
                            <input type="text" placeholder="john deo" />
                        </div>
                        <div className="inputBox">
                            <span>email :</span>
                            <input type="email" placeholder="example@example.com" />
                        </div>
                        <div className="inputBox">
                            <span>address :</span>
                            <input type="text" placeholder="room - street - locality" />
                        </div>
                        <div className="inputBox">
                            <span>city :</span>
                            <input type="text" placeholder="mumbai" />
                        </div>

                        <div className="flex">
                            <div className="inputBox">
                                <span>state :</span>
                                <input type="text" placeholder="india" />
                            </div>
                            <div className="inputBox">
                                <span>zip code :</span>
                                <input type="text" placeholder="123 456" />
                            </div>
                        </div>

                    </div>

                    <div className="col">

                        <h3 className="title">payment</h3>

                        <div className="inputBox">
                            <span>cards accepted :</span>
                            <img src="../card_img.png" alt="" />
                        </div>
                        <div className="inputBox">
                            <span>name on card :</span>
                            <input type="text" placeholder="mr. john deo" />
                        </div>
                        <div className="inputBox">
                            <span>credit card number :</span>
                            <input type="number" placeholder="1111-2222-3333-4444" />
                        </div>
                        <div className="inputBox">
                            <span>exp month :</span>
                            <input type="text" placeholder="january" />
                        </div>

                        <div className="flex">
                            <div className="inputBox">
                                <span>exp year :</span>
                                <input type="number" placeholder="2022" />
                            </div>
                            <div className="inputBox">
                                <span>CVV :</span>
                                <input type="text" placeholder="1234" />
                            </div>
                        </div>

                    </div>

                </div>

                <button style={{backgroundColor:"green"}} submit-btn><Link to="/success">Submit</Link></button>

            </form>

        </div>
    </>
    )

}


