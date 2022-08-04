const URL = 'http://localhost:5500/';

export const getProducts = async () => {
  const res = await fetch(`${URL}products/`);
  return res.json();
};

export const getCategory = async ({ queryKey }) => {
  const res = await fetch(`${URL}category/${queryKey[1]}`);
  return res.json();
};

export const getUsers = async ({ queryKey }) => {
  const res = await fetch(`${URL}users/${queryKey[1]}`);
  return res.json();
};
