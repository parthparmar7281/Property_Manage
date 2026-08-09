import apiClient from "./apiClient";

export const propertyApi = {
  addProperty: (propertyData) => apiClient.post("/Property/AddProperty", propertyData),
  getAllProperties: (sellerId) => apiClient.get("/Property", { params: sellerId ? { sellerId } : {} }),
};
