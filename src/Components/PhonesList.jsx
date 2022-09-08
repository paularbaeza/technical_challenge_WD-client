import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"

import { getPhonesListService } from "../services/phones.services";

function Home() {
  const navigate = useNavigate();

  const [phonesList, setPhonesList] = useState([]);
  const [isFetching, setIsFetching] = useState(true);


  useEffect(() => {
    getPhonesList();
  },[]);

  const getPhonesList = async () => {
    try {
      const response = await getPhonesListService();
      console.log(response.data)
      setPhonesList(response.data);
      setIsFetching(false);

    } catch (error) {
      navigate("/error");
    }
  };

  if (isFetching === true) {
    return <h3>...Loading List of phones...</h3>;
  }

  return (
    <div id="phonesList">
  {phonesList.map((eachPhone) => {
    return <div id="each-phone"><li><Link to={`/phones/${eachPhone.id}`} className="no-decoration">{eachPhone.name}</Link></li></div>
  })}
  </div>
  )
}

export default Home;
