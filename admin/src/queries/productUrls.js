import request from "utils/request";

const addCategory = async (data) => request(`/category`, 'POST', data)
const editCategory = async (data) => request(`/category`, 'PATCH', data)
const deleteCategory = async (data) => request(`/category/${data?._id}`, 'DELETE', data)
const getCategoryById = async (data) => request(`/category/${data?.id}`, 'GET', data)
const addCareers = async (data) => request(`/careers`, 'POST', data)
const addVariantProduct = async (data) => request(`/products/variantproduct`, 'POST', data)
const updateCareers = async (data) => request(`/careers`, 'PATCH', data)
const deleteCareers = async (data) => request(`/careers/${data?._id}`, 'DELETE', data)
const getCategory = async (data) => request(`/category?page=${data?.pageNo}&perpageitems=${data?.pageCount}`, 'GET', data);
const getTagProducts = async (data) => request(`/products/tagProducts?page=${data?.pageNo}&perpageitems=${data?.pageCount}`, 'GET', data)
const getSimilarProducts = async (data) => request(`/products/similrProducts?page=${data?.pageNo}&perpageitems=${data?.pageCount}`, 'GET', data)
const getCareersById = async (data) => request(`/careers/${data?.id}`, 'GET', data)

const getCoupon = async (data) => request(`/coupons?page=${data?.pageNo}&perpageitems=${data?.pageCount}`, 'GET', data)
const getCoinCoupon = async (data) => request(`/coupons/coincoupon?page=${data?.pageNo}&perpageitems=${data?.pageCount}`, 'GET', data)
const addCoupon = async (data) => request(`/coupons`, 'POST', data)
const deletecoupons = async (data) => request(`/coupons/${data?._id}`, 'DELETE', data)
const couponStatus = async (data) => request(`/coupons/status/${data?._id}`, 'PATCH', data)
const updateCoupon = async (data) => request(`/coupons`, 'PATCH', data)
const getCouponById = async (data) => request(`/coupons/${data?.id}`, 'GET', data)


const getCareers = async ({ page, perPage, sortBy, order, search }) => {
  const queryParams = new URLSearchParams({
    page,
    perPage,
    sortBy,
    order,
    search,
  }).toString();

  const response = await request(`/careers/adminCareers?${queryParams}`, 'GET');
  return response;
};
const getFilterCategory = async ({ page, perPage, sortBy, order, search }) => {
  const queryParams = new URLSearchParams({
    page,
    perPage,
    sortBy,
    order,
    search,
  }).toString();

  const response = await request(`/category/adminCategory?${queryParams}`, 'GET');
  return response;
};

  export {
    addCategory,
    getCategoryById,
    editCategory,
    deleteCategory,
    addCareers,
    addVariantProduct,
    updateCareers,
    deleteCareers,
    getCategory,
    getFilterCategory,
    getCareers,
    getCareersById,
    getTagProducts,
    getSimilarProducts,
    getCoupon,
    addCoupon,
    couponStatus,
    updateCoupon,
    getCouponById,
    deletecoupons,
    getCoinCoupon
  };
