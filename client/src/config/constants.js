const PROD_URL = "https://gacdemo.herokuapp.com";
const DEV_URL = "http://localhost:8080";

export const ROOT_URL = process.env.REACT_APP_ENV === 'prod'
  ? PROD_URL
  : DEV_URL;
