import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (msg, alertType) => dispatch => {
  const id = Math.floor(Math.random() * 999);

  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });
}

export default alert;
