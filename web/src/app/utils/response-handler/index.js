import SuccessHandler from './success-handler';
import ErrorHandler from './error-handler';


export default (response) => {
  const handler = new SuccessHandler(response);

  handler.setSuccessor(new ErrorHandler(response));

  return handler.handle();
};
