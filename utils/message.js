import moment from "moment";
import {v4 as uuid} from 'uuid';



function formatMessage(user, text) {
  return {
    user,
    text,
    time: moment().format('h:mm a'),
    id: uuid()
  };
}

export default formatMessage;