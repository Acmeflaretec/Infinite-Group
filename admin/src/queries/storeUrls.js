import request from "utils/request";

const addBlogs = async (data) => request(`/blogs`, 'POST', data)
const editBlogs = async (data) => request(`/blogs`, 'PATCH', data)
const deleteBlogs = async (data) => request(`/blogs/${data?._id}`, 'DELETE', data)
const getBlogs = async (data) => request(`/blogs?page=${data?.pageNo}&perpageitems=${data?.pageCount}`, 'GET', data)
const getBlogsById = async (data) => request(`/blogs/${data?.id}`, 'GET', data)





const editUsers = async ({ userId, newStatus }) => request('/contact/update-status', 'PUT', {userId, newStatus})
const getUsers = async ({ page, perPage, sortBy, order, search , status }) => {
  const queryParams = new URLSearchParams({
    page,
    perPage,
    sortBy,
    order,
    search,
    status
  }).toString();

  const response = await request(`/contact/getAllContacts?${queryParams}`, 'GET');
  return response;
};

export { 
    addBlogs,
    editBlogs,
    deleteBlogs,
    getBlogs,
    getBlogsById,
    getUsers,
    editUsers
  };
