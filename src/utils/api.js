import axios from 'axios';

const BASE_URL = 'https://64579cdc0c15cb14820cace3.mockapi.io/users';

export async function getUsers(page) {
  try {
    const config = {
      method: 'GET',
      url: BASE_URL,
      params: {
        page: page,
        limit: 3,
      },
    };
    const res = await axios(config);
    return res.data;
  } catch (error) {
    alert(`We are sorry, unable to get data. Error message:${error.message}`);
  }
}

export async function updateUserFollowers(id, newFollowers) {
  try {
    const config = {
      method: 'PUT',
      url: BASE_URL + `/${id}`,
      data: { followers: newFollowers },
    };
    const res = await axios(config);
    return res.data;
  } catch (error) {}
}
