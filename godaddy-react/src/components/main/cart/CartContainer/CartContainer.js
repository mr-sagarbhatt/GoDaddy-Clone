import "./cart-container.scss";
import Icon from "../../../../assets/images/svg/GoDaddy-Icon-Black-Logo.wine.svg";
import { FaTrashAlt } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useRef } from "react";

const CartContainer = () => {
  const showPromoRef = useRef(null);
  const hidePromoRef = useRef(null);
  const promoRef = useRef(null);

  const showPromo = () => {
    promoRef.current.style.display = "flex";
  };
  const hidePromo = () => {
    promoRef.current.style.display = "none";
  };

  return (
    //   <!-- root -->
    <div className='user-cart'>
      <div className='container'>
        {/* <!-- <div className="cart-top"> -->
        <!-- headline -->
        <!-- <h3 className="headline">Purchase</h3> -->
        <!-- navigation -->
        <!-- <div className="navigation">
            <a href="#"><strong>Cart</strong></a>
          </div>
          <div className="pb-3"></div>
        </div> --> */}
        {/* <!-- cart-container --> */}
        <div className='cart-main'>
          {/* <!-- title --> */}
          <div className='cart-title'>Your Items</div>
          {/* <!-- cart-card --> */}
          <div className='cart-card'>
            <div className='cart-header'>Starter Linux Hosting with cPanel</div>
            <div className='cart-body'>
              <div className='cart-select'>
                <select className='form-select'>
                  <option selected>1 Month</option>
                  <option value='6'>6Months</option>
                  <option value='12'>12Months</option>
                  <option value='24'>24Months</option>
                  <option value='36'>36Months</option>
                </select>
              </div>
              <div className='cart-price'>
                <span className='fs-6'>&#x20B9;199.00</span>
                <s className='text-black fw-normal'>&#x20B9;199.00</s>
                <span className='fw-normal'>50% off</span>
              </div>
            </div>
            <div className='cart-footer'>
              <div className='cart-renewal text-muted'>
                Renews February 2025 for &#x20B9;179.00/mo (&#x20B9;6,444.00
                total)
              </div>
              <div className='cart-delete'>
                <FaTrashAlt></FaTrashAlt>
              </div>
            </div>
          </div>
          <div className='below-card'>
            <button className='cart-btn text-muted fw-normal text-decoration-underline'>
              View offer disclaimers
            </button>
            <button className='cart-btn fs-6'>
              <FaTrashAlt></FaTrashAlt>
              <span className='text-decoration-underline fw-bold'>
                Empty Cart
              </span>
            </button>
          </div>
          <hr />
          <div className='subtotal'>
            <span className='subtotal-text'>
              Subtotal <span className='currency'>(INR)</span>
            </span>
            <span className='subtotal-price'>&#x20B9;3,763.00</span>
          </div>
          <div className='promo-code'>
            <button
              className='cart-btn fs-6 text-decoration-underline'
              ref={showPromoRef}
              onClick={showPromo}
            >
              Have a promo code?
            </button>
            <div className='promo-code-input' ref={promoRef}>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter a promo code'
                />
                <span className='input-group-text search-icon px-md-5'>
                  Apply
                </span>
              </div>
              <div
                className='hide-input'
                ref={hidePromoRef}
                onClick={hidePromo}
              >
                <FaTimes></FaTimes>
              </div>
            </div>
          </div>
          <hr />
          <div className='order-btn'>
            <div className='above-btn'>
              <img
                className='icon mb-1'
                src={Icon}
                alt='logo'
                height='70px'
                width='25px'
              />
              <span className='fw-bold'>Nice!</span>
              You saved ₹3,600.00 on your order.
            </div>
            <button className='btn btn-dark w-100'>I'm Ready to Pay</button>
          </div>
        </div>
        {/* <!-- basket --> */}
      </div>
    </div>
  );
};

export default CartContainer;
