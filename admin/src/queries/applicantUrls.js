// import request from "utils/request";

// const getApplicants = async ({ page, perPage, sortBy, order, search }) => {
//   const queryParams = new URLSearchParams({
//     page,
//     perPage,
//     sortBy,
//     order,
//     search,
//   }).toString();

//   const response = await request(`/job-applications?${queryParams}`, "GET");
//   return response;
// };

// const editApplicant = async ({ applicationId, newStatus }) =>
//   request(`/job-applications/${applicationId}`, "PUT", { newStatus });

// export { getApplicants, editApplicant };


import request from "utils/request";

const getApplicants = async ({ page, perPage, sortBy, order, search }) => {
  const queryParams = new URLSearchParams({
    page,
    perPage,
    sortBy,
    order,
    search,
  }).toString();

  return request(`/job-applications?${queryParams}`, "GET");
};

const editApplicant = async ({ applicationId, newStatus }) =>
  request(`/job-applications/${applicationId}`, "PUT", { newStatus });

const downloadAllCVs = async () =>
  request(`/job-applications/download-all-cvs`, "GET", null, {
    responseType: "blob",
  });

export { getApplicants, editApplicant, downloadAllCVs };
