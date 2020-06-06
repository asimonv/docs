import { fileConstants } from '../constants';


const rejectResponse = data => ({
  type: fileConstants.FILE_UPLOAD_REJECTED,
  payload: data.error,
  data,
});

export const recieveFile = res => (dispatch) => {
  if (!res.error) {
    dispatch({
      type: fileConstants.FILE_UPLOAD_FULLFILED,
      payload: res,
    });
  } else {
    dispatch(rejectResponse(res));
  }
};

export default { recieveFile };
