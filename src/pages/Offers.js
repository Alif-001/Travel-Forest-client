import React, { useEffect, useState } from "react";
import SingleOffer from "./singleOffers";

const Offers = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    fetch("https://morning-everglades-39414.herokuapp.com/courses/add")
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, []);

  return (
    <div className="offer-section pt-5">
      <div className="container">
        {!offers.length ? (
          <div className="text-center"></div>
        ) : (
          <div className="row">
            {offers.map((offer, index) => (
              <SingleOffer
                key={offer._id}
                offer={offer}
                index={index}
              ></SingleOffer>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Offers;