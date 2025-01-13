import { toast } from "react-toastify";
import { api } from "../../config/apiConfig";
import { SUBMIT_REVIEW_FAILURE, SUBMIT_REVIEW_REQUEST, SUBMIT_REVIEW_SUCCESS } from "./ActionType";


export const submitReview = (review) => async (dispatch) => {
    console.log(review)
    try {
        dispatch({ type: SUBMIT_REVIEW_REQUEST });

      
        const response = await api.post('/api/reviews/create', review);

        console.log(response)

        dispatch({
            type: SUBMIT_REVIEW_SUCCESS,
            payload: response,
        });
        toast.success('Review submitted successfully!')
        // alert("Review submitted successfully!");
    } catch (error) {
        dispatch({
            type: SUBMIT_REVIEW_FAILURE,
            payload: error.response?.data?.message || error.message,
        });

    }
};