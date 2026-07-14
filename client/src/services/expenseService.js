import API from "./expenseApi";

export const getExpenses = async () => {
  const response = await API.get("/");

  return response.data.data;
};

export const createExpenses = async (expenseData) => {
  const response = await API.post(
    "/",
    expenseData
  );

  return response.data.data;
};

export const deleteExpenses = async (id) => {
  await API.delete(`/${id}`);
};

export const updateExpenses = async (
  id,
  expenseData
) => {
  const response = await API.put(
    `/${id}`,
    expenseData
  );

  return response.data.data;
};