import axios from "axios";

const options = {
  baseURL: "https://api.teamkinetic.co.uk/techtest/",
  headers: {
    Accept: "application/json,text/plain,*/*",
    "Content-Type": "application/json",
    key: "16F1D714-C22F-4464-84F4-C463S657GAAF",
    pwd: "kAjj9rPrxE6QYzj/47/oyQ==",
    // appNumber: 23,
  },
};

const request = axios.create(options);

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const searchOpportunities = async (search, showShared) => {
  try {
    const url = `opps.htm?search=${search}&showShared=${showShared}`;
    const response = await request.get(url);
    return response?.data;
  } catch (err) {
    if (err?.response?.data?.data?.message) {
      throw new Error(err.response.data.data.message.join("\n\n"));
    }
    const error = err?.response?.data?.message || err?.message;
    throw new Error(error);
  }
};

export const getUserProfile = async () => {
    try {
      const url = `volunteer.htm?action=getProfile&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9`;
      const response = await request.get(url);
      return response?.data;
    } catch (err) {
      if (err?.response?.data?.data?.message) {
        throw new Error(err.response.data.data.message.join("\n\n"));
      }
      const error = err?.response?.data?.message || err?.message;
      throw new Error(error);
    }
  };