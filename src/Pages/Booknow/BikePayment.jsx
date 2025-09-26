import React, { useState } from "react";
import axios from "axios";

function BikePayment() {
  const [orderId, setOrderId] = useState("");
  const [amount, setAmount] = useState("");

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/payment/pay`,
        { orderId, amount }
      );
      document.write(response.data);
      // const { encRequest, accessCode, merchantId } = response.data;
      // console.log("response.data", response.data);
      // const form = document.createElement("form");
      // form.method = "post";
      // // form.action = `https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction&encRequest=${encRequest}&access_code=${accessCode}&request_type=XML&response_type=XML&version=1.1`;
      // form.action =
      //   "https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction";
      // // form.target = "_blank";

      // const encRequestInput = document.createElement("input");
      // encRequestInput.type = "hidden";
      // encRequestInput.name = "encRequest";
      // encRequestInput.value = encRequest;
      // form.appendChild(encRequestInput);

      // const accessCodeInput = document.createElement("input");
      // accessCodeInput.type = "hidden";
      // accessCodeInput.name = "access_code";
      // accessCodeInput.value = "AVFR91LF42AH28RFHA";
      // form.appendChild(accessCodeInput);

      // document.body.appendChild(form);
      // form.submit();
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };

  return (
    <div className="App">
      <h1>CCAvenue Payment Integration</h1>
      <form onSubmit={handlePayment}>
        <div>
          <label>Order ID:</label>
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}

export default BikePayment;
