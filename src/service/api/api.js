import { axiosInstance } from "../axios_instances/axiosInstance";

// get all branches
export const getAllCategory = async () => {
  try {
    const response = await axiosInstance.get("/get_allcategory");
    return response.data;
  } catch (error) {
    throw error;
  }
};

// get all Banners
export const getAllBanners = async () => {
  try {
    const response = await axiosInstance.get(`get_allwallpapper?BranchID=1`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// get all products
export const getAllProducts = async () => {
  try {
    const response = await axiosInstance.get("/get_allproduct?BranchID=1");
    return response.data;
  } catch (error) {
    throw error;
  }
};

// get all porduct by id
export const getProductDetailsById = async (ItemId) => {
  try {
    const response = await axiosInstance.get(
      `/get_productByID?ItemID=${ItemId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllExculsiveProducts = async () => {
  try {
    const response = await axiosInstance.get(
      "/get_exclusiveproducts?BranchID=1"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// get all schemes
export const getAllSchems = async () => {
  try {
    const response = await axiosInstance.get("/get_allScheme?BranchID=1");
    return response.data;
  } catch (error) {
    throw error;
  }
};

// get todays gold rate
export const getTodaysGoldRate = async () => {
  try {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];

    const response = await axiosInstance.get(
      `/get_todayRate?EntryDate=${formattedDate}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

//kyc update
export const kycUpdate = async (data) => {
  try {
    const jsonData = JSON.stringify(data);
    const kycData = `data=${jsonData}`;

    const response = await axiosInstance.post("/add_Customer", kycData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getIndividualScheme = async (id) => {
  try {
    const response = await axiosInstance.get(`get_SchemeByID?SchemeID=${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

