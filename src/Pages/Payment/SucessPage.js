import { React, useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import "./paymentpage.css";
import axios from "axios";
import TrackingHeader from "./TrackingHeader";

const SuccessPage = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://backend123.azurewebsites.net/infovision/cart?cartId=dec5ac08-14c2-4d61-bf6a-fc12eaa2597f"
      )
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 text-center">
          <div className="d-flex justify-content-center  mr-4">
            <div>
              <img
                src="https://miro.medium.com/max/444/1*HAyEcz9idnSOTPICgWuuPg.gif"
                alt="BackGround"
                className="backImage"
              />
            </div>

            <div>
              <p className="sucess-pay mt-5 pt-3">Order Placed Successfully</p>
            </div>
          </div>

          <h2 className="suces-thank">Thank You User</h2>
          <p className="suces-order">
            Sit back and relax, your order is on the way !
          </p>
          <TrackingHeader />

          {data.map((prod) => (
            <div key={prod.restaurantItem.itemId}>
              <div className="d-flex justify-content-between mt-2 mb-5 cont">
                <div>
                  <Image
                    src={prod.restaurantItem.imageUrl}
                    className="succes-img"
                    alt="image"
                    fluid
                    rounded
                  />
                </div>
                <div className="mt-5">
                  <h1 className="succes-head">
                    {prod.restaurantItem.itemName}
                  </h1>
                </div>
                <div className="mt-5 mr-5 pr-5">
                  <p className="succes-para">
                    ₹ {prod.restaurantItem.itemprice}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
