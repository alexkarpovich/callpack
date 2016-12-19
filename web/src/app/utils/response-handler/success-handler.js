import {ResponseHandler} from './response-handler';


class SuccessHandler extends ResponseHandler {
  handle() {
    if (this.response.status >= 200 && this.response.status < 300) {
      let data = this.response.json();

      if (this.response.status == 204) {
        data = {};
      }

      return Promise.resolve(data);
    } else {
      return this.getSuccessor().handle();
    }
  }
}

export default SuccessHandler;
