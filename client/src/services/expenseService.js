import API from './expenseApi'

export const getExpenses = async() => {

    const response = await API.get('/expenses');

    return response.data.data
}

export const createExpenses = async(expenseData) => {

    const response = await API.post(
        '/expenses',
        expenseData
    )

    return response.data.data
}

export const deleteExpenses = async(id) => {

    const response = await API.delete(`/expenses/${id}`)
}

export const updateExpense = async (id, expenseData) => {
  const response = await API.put(
    `/expenses/${id}`,
    expenseData
  );

  return response.data.data;    
};