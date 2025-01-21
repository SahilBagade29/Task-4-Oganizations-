import axios, { AxiosInstance } from "axios";

const API_BASE_URL = "http://localhost:3002";

const ApiService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content_Type": "application/json",
  },
});

export const getEmployeesData = async (endpoint:any) => {
 try {
  const response = await ApiService.get(endpoint);
  return response.data
 } catch (error) {
  console.log(error);
 }
}


