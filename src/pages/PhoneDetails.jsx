import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPhoneDetailsService } from "../services/phones.services";

function PhoneDetails() {
  const navigate = useNavigate();

  const { phoneId } = useParams();

  const [phoneDetails, setPhoneDetails] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getPhoneDetails();
  }, [phoneId]);

  const getPhoneDetails = async () => {
    try {
      const response = await getPhoneDetailsService(phoneId);
      console.log(phoneId);
      console.log(response.data[0]);
      setPhoneDetails(response.data[0]);
      setIsFetching(false);
    } catch (error) {
      navigate("/error");
    }
  };

  if (isFetching === true) {
    return <h3>...Loading Phone details...</h3>;
  }

  return (
    <div id="phoneDetails">
      <h1>{phoneDetails.name}</h1>
      <img
        src={`/assets/images/${phoneDetails.imageFileName}`}
        alt="imagen"
        width="300px"
      />

      <h4>{phoneDetails.manufacturer}</h4>
      <p>{phoneDetails.description}</p>
      <p>Color: {phoneDetails.color}</p>
      <p>Price: {phoneDetails.price}</p>
      <p>Processor: {phoneDetails.processor}</p>
      <p>Ram: {phoneDetails.ram}</p>
      <p>Screen: {phoneDetails.screen}</p>
    </div>
  );
}

export default PhoneDetails;
