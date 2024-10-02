import React from "react";
import Barcode from "react-barcode";

const BarcodeInvoicer = () => {
  const generateRandomNumber = (digit) => {
    let number_digit = "1";
    let multiplier = "9";

    for (let index = 1; index < digit; index++) {
      number_digit += "0";
      multiplier += "9";
    }
    let generatedNumber = Math.floor(
      Number(number_digit) + Math.random() * Number(multiplier)
    );
    return String(generatedNumber).substring(0, digit);
  };
  let randomNumber = generateRandomNumber(12);
  return (
    <>
      <div className="w-48">
        <Barcode value={"DTLS" + randomNumber} className="w-full" />
      </div>
    </>
  );
};
export default BarcodeInvoicer;
