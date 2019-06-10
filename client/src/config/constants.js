const PROD_URL = 'https://gacdemo.herokuapp.com';
const DEV_URL = 'http://localhost:8080';
const ROOT_URL = (process.env.NODE_ENV !== 'production') ? DEV_URL : PROD_URL;

export default ROOT_URL;
