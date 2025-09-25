import IStatus from "./IStatus";
import IParamError from "@/models/IParamError";

export default interface IResponse<T> {
  status?: IStatus,
  data?: T,
}

function createSuccessResponse<T>(data: T): IResponse<T> {
  return {
    data: data,
  };
}

// noinspection JSAnnotator
function createFailResponse<T>(code: string, messageParams?: string[], errors?: IParamError[]): IResponse<T> {
  return {
    status: {
      code: code,
      messageParams: messageParams,
      params: errors,
    },
  };
}

export {
  createSuccessResponse,
  createFailResponse,
}