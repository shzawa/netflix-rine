import axios from "axios";
import { API_BASE_URL } from "../consts/env";

type SuccessResponseType<T> = {
  data: T;
  error: null;
};
type FailedResponseType = {
  data: null;
  error: Error;
};

export const fetchMovieDatabase = async (
  url
): Promise<SuccessResponseType<any> | FailedResponseType> => {
  const axiosFetcher = axios.create({ baseURL: API_BASE_URL });
  try {
    const { data } = await axiosFetcher.get(url);
    return {
      data,
      error: null
    };
  } catch (e) {
    console.error(e);
    if (axios.isAxiosError(e)) {
      return {
        data: null,
        error: e
      };
    }
    throw e;
  }
};
