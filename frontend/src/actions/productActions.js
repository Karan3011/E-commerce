import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAIL} from "../constants/productConstants"
import axios from 'axios';
const listProducts = () => async (dispatch) => {

try{
  dispatch({type:PRODUCT_LIST_REQUEST});
    const {data} = await axios.get("/api/products")
    dispatch({type:PRODUCT_LIST_SUCCESS, payload: data});
}
catch(error){
     dispatch({type:PRODUCT_LIST_FAIL, payload: error.message});
}
}

const detailsProduct = (productID) => async (dispatch) => {
  try {
    dispatch({type: PRODUCT_DETAILS_REQUEST, payload: productID});
    const {data} = await axios.get("/api/products/" + productID);
    dispatch({type: PRODUCT_DETAILS_SUCCESS, payload:data});
      } catch (error) {
        dispatch({type:PRODUCT_DETAILS_FAIL, payload:error.message});
    
  }
}
export { listProducts,detailsProduct}