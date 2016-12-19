import {ResponseHandler} from './response-handler';

class ErrorHandler extends ResponseHandler {
  handle() {
    this.response.json().then(data => {
      return Promise.reject(data)
    })
  }
}

export default ErrorHandler;
