import apiClient from "./apiClient";

export const propertyApi = {
  addProperty: (propertyData) => apiClient.post("/Property/AddProperty", propertyData),
  getAllProperties: () => apiClient.get("/Property"),
};
