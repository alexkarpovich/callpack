export class ResponseHandler {
  constructor(response) {
    this.response = response;
    this.successor = null;
  }

  getSuccessor() {
    return this.successor;
  }

  setSuccessor(successor) {
    this.successor = successor;

    return this.getSuccessor();
  }
}
