import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


//import Card from './Card';

function App() {
const ProductCard = (props) => {
  return (
    <div className="card">
      <div className="image-container">
        <div className="first">
          <div className="d-flex justify-content-between align-items-center">
            <span className="discount">{props.discount}</span>
            <span className="wishlist"><i className="fa fa-heart-o"></i></span>
          </div>
        </div>
        <img src={props.imageUrl} className="img-fluid rounded thumbnail-image" />
      </div>

      <div className="product-detail-container p-2">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="dress-name">{props.productName}</h5>
          <div className="d-flex flex-column mb-2">
            <span className="new-price">{props.newPrice}</span>
            <small className="old-price text-right">{props.oldPrice}</small>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center pt-1">
          <div className="color-select d-flex ">
            {props.colors.map((color) => (
              <input type="button" name={color.name} className={`btn ${color.name}`} />
            ))}
          </div>
          <div className="d-flex ">
            {props.sizes.map((size) => (
              <span className="item-size mr-2 btn" type="button">{size}</span>
            ))}
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center pt-1">
          <div>
            <i className="fa fa-star-o rating-star"></i>
            <span className="rating-number">{props.rating}</span>
          </div>

          <span className="buy">{props.buyLabel}</span>
        </div>
      </div>
    </div>
  );
};

const VoucherCard = (props) => {
  return (
    <div className="card vouchers mt-3">
      <div className="voucher-divider">
        <div className="voucher-left text-center">
          <span className="voucher-name">{props.voucherName}</span>
          <h5 className="voucher-code">{props.voucherCode}</h5>
        </div>
        <div className="voucher-right text-center border-left">
          <h5 className="discount-percent">{props.discountPercent}</h5>
          <span className="off">{props.offLabel}</span>
        </div>
      </div>
      </div>
  )
 }
}

export default App;
