import axios from 'axios';

const Api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const UserApi = {
  getById: (id: number) =>
    Api.get(`/user`, {
      params: {
        id,
      },
    }),

  update: (user: Partial<User>) => Api.put('/update-user', user),
};
