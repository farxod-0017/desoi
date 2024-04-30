import React, { useState } from 'react'
import '../style/bag.css'
import product1 from '../images/product1.svg'
import prdcMobile from '../images/prdcmobile.svg'
import sending_gift from '../images/sending_gift.svg'
import send_funkin from '../images/send_funkin.svg'
import protect from '../images/protect.svg'
import more_info from '../images/more_info.svg'
import iconBagM from '../images/iconBagM.svg'
import arrowBag from '../images/ArrowBag.svg'
import { Switch } from 'antd'

function Bag() {
    const[qty, setQty] = useState(1)
    const[qtyA, setQtyA] = useState(1)

    const[total, setTotal] = useState(28)
    const[totalA, setTotalA] = useState(35.59)

    function One(e) {
        if(e.target.id === "minus" & qty>1) {
            setQty(qty-1)
            setTotalA(Math.ceil(qty-1)*35+(qty-1)*0.59)
        }else if(e.target.id === "plus") {
            setQty(qty+1)
            setTotalA(Math.ceil(qty+1)*35+(qty+1)*0.59)
        }
    }
    function OneA(e) {
        if(e.target.id === "minus" & qtyA>1) {
            setQtyA(qtyA-1)
            setTotal((qtyA-1)*28)
        }else if(e.target.id === "plus") {
            setQtyA(qtyA+1)
            setTotal((qtyA+1)*28)
        }
    }
  return (
    <section className='bag'>
        <div className="container_bag">
            <h1>My Bag</h1>
            <div className="indicators">
                <h4>Product</h4>
                <div className="i_num">
                    <h4>Price</h4>
                    <h4 className='qty'>QTY</h4>
                    <h4>Total</h4>
                </div>
            </div>
            <div className="product1">
                <div className="product">
                    <img src={product1} alt="" />
                    <ul>
                        <h3>Medium-bodied</h3>
                        <li><span>{qtyA}</span> bottle</li>
                        <li>Delivery every 1 month </li>
                        <li>Remove</li>
                    </ul>
                </div>
                <div className="product_price">
                    <h5>$28.00 <p>$30.00</p></h5>
                    <div className="qty" onClick={(e)=>OneA(e)}>
                        <span id='minus'>-</span>
                        <span>{qtyA}</span>
                        <span id='plus'>+</span>
                    </div>
                    <h5>$ <span>{total}</span></h5>
                </div>              
            </div>
            <div className="product1_mobile">
                <img src={prdcMobile} alt="" />
                <div className="indicMobile">
                    <h3>Medium-bodied</h3>
                    <p>{qtyA} bottle</p>
                    <p>Delivery every month</p>
                    <div className="qty" onClick={(e)=>OneA(e)}>
                        <span id='minus'>-</span>
                        <span>{qtyA}</span>
                        <span id='plus'>+</span>
                    </div>
                </div>
                <ul>
                    <li>$28.00</li>
                    <li><p>$30.00</p></li>

                    <span>Remove</span>
                </ul>
            </div>
            <div className="product1">
                <div className="product">
                    <img src={product1} alt="" />
                    <ul>
                        <h3>Light-bodied</h3>
                        <li><span>{qty}</span> bottle</li>
                        
                        <li>Remove</li>
                    </ul>
                </div>
                <div className="product_price">
                    <h5>$35.59</h5>
                    <div className="qty" onClick={(e)=>One(e)}>
                        <span id='minus'>-</span>
                        <span>{qty}</span>
                        <span id='plus'>+</span>
                    </div>
                    <h5>$ <span>{totalA}</span></h5>
                </div>               
            </div>
            <div className="product1_mobile">
                <img src={prdcMobile} alt="" />
                <div className="indicMobile">
                    <h3>Light-bodied</h3>
                    <p>{qty} bottle</p>
                    <p></p>
                    <div className="qty" onClick={(e)=>One(e)}>
                        <span id='minus'>-</span>
                        <span>{qty}</span>
                        <span id='plus'>+</span>
                    </div>
                </div>
                <ul>
                    <li>$ 35.59</li>
                    <li><p></p></li>

                    <span>Remove</span>
                </ul>
            </div>
            <div className="end_of_bag">
                <div className="end_left">
                    <div className="sent_gift">
                        <div className="s_g_top">
                            <div className="s_g_card">
                                <img src={sending_gift} alt="" />
                                <h5>Sending a gift?</h5>
                            </div>                           
                            <p>Remove</p>
                        </div>
                        <form className='input_message'>
                            <div className="message_box">
                                <p>Happy 25th Birthday Eddie! Hope you have a wonderful celebration!!!</p>
                            </div>
                            <button>save message</button>
                        </form>
                        <a href='#!'>Cancel</a>
                    </div>
                    <div className="send_gift_mobile">
                        <div className="send_gift_mobile_left">
                            <img src={iconBagM} alt="" />
                            <h6>Sending a gift?</h6>
                        </div>
                        <div className="send_gift_mobile_right">
                            <h6>Add message</h6>
                            <img src={arrowBag} alt="" />
                        </div>
                    </div>
                    <div className="sent_also">
                        <h6>You might also like</h6>
                        <div className="send_also_wrap">
                            <img src={send_funkin} alt="" />
                            <div className="send_also_card">
                                <div className="sent_also_card_top">
                                    <h4>Full-bodied </h4>
                                    <p>$35.59</p>
                                </div>                               
                                <span>1 bottle</span>
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="end_right">
                    <div className="end_right_top">
                        <h2>Subtotal </h2>
                        <h2>{Math.round((total+totalA)*100)/100}</h2>
                    </div>                  
                    <p>Shipping & tax calculated at checkout</p>
                    <div className="shipping">
                        <div className="range" style={total+totalA>104.18 ? {width:`100%`} : {width:`${(total+totalA)*100/104.18}%`}}></div>
                    </div>
                    
                    <h5><span>${total+totalA<104.18 ? Math.round((104.18-total-totalA)*100)/100 :`0`}</span> away from free shipping</h5>
                    <div className="package">
                        <div className="protection">
                            <div className="protac_top">
                                <img src={protect} alt="" />
                                <h2>Package protection </h2>
                                <img src={more_info} alt="" />
                            </div>                           
                            <h3>For damage, lost & theft for <span>$0.99</span></h3>
                        </div>
                       <Switch checkedChildren="on" unCheckedChildren="off"/>
                    </div>
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Bag