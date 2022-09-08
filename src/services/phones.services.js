import service from "./config.services";

const getPhonesListService = () => {
  return service.get(`phones`);
};

const getPhoneDetailsService = (phoneId) => {
  return service.get(`phones/${phoneId}`);
};



export { getPhonesListService, getPhoneDetailsService };