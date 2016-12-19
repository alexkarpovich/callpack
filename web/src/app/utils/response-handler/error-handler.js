import {ResponseHandler} from './response-handler';
import Auth from '../auth';


class AuthStateHandler extends ResponseHandler {
  handle() {
    Auth.removeToken();

    return this.response.json().then(data => {
      return Promise.reject(data)
    })
  }
}

class DefaultStateHandler extends ResponseHandler {
  handle() {
    return this.response.json().then(data => {
      return Promise.reject(data)
    })
  }
}

class ErrorHandler extends ResponseHandler {
  handle() {
    let handler;

    switch (+this.response.status) {
      case 401:
        handler = new AuthStateHandler(this.response);
        break;
      default:
        handler = new DefaultStateHandler(this.response);
    }

    return handler.handle();
  }
}

export default ErrorHandler;
