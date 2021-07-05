import axios from 'axios';
import { User } from '../types/User.model';
import { UserState } from '../types/UserState.enum';

const BASE_URL = '/api';

export const addUser = async (name: string): Promise<string> => {
  const response = await axios.post(`${BASE_URL}/user/new`, { name });

  return response.data.id;
};

export const getUser = async (id: string): Promise<User> => {
  const response = await axios.get(`${BASE_URL}/user/info`, { params: { id }});

  return response.data;
};

export const getUserList = async (): Promise<User[]> => {
  const response = await axios.get(`${BASE_URL}/user/list`);

  return response.data;
};

export const updateUserState = async (id: string, state: UserState): Promise<void> => {
  await axios.post(`${BASE_URL}/user/update`, { id, state });

  return;
};