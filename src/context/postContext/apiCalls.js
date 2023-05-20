import axios from "axios";
import {
  deletePOSTFailure,
  deletePOSTStart,
  deletePOSTSuccess,
  getPOSTFailure,
  getPOSTStart,
  getPOSTSuccess,
} from "./PostActions";

export const getPosts = async (id, data, dispatch) => {

  try {
    dispatch(getPOSTStart());
    const res = await axios.get("/posts/profile/" + id
    );
    dispatch(getPOSTSuccess(data));
  } catch (err) {
    // dispatch(getPOSTFailure());
  }
};

//delete
export const deletePost = async (id, dispatch) => {
  // dispatch(deletePOSTStart());
  try {
    await axios.delete("/posts/" + id
    );
    dispatch(deletePOSTSuccess(id));
  } catch (err) {
    // dispatch(deletePOSTFailure());
  }
};
