import db from '../db/db';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../types/User.model';
import { UserState } from '../types/UserState.enum';

const USERS_KEY = 'users';

const getUserInfo = (id: string) => {
  const users: User[] = db.get(USERS_KEY).value();

  return users.find(user => user.id === id);
};

const addUser = (name: string) => {
  const id = uuidv4();

  db.get(USERS_KEY).push({ id, name, state: UserState.AWAKE });

  return id;
};

const updateUser = (id: string, state: UserState) => {
  const users: User[] = db.get(USERS_KEY).value();
  const index = users.findIndex(user => user.id === id);

  db.get(USERS_KEY).get(index).set('state', state);

  return true;
};

const getFullUserList = () => {
  const users: User[] = db.get(USERS_KEY).value();

  return users.map(({ name, state }) => ({ name, state }));
};

const deleteUser = (id: string) => {
  db.get(USERS_KEY).filter(((user: User) => user.id !== id) as any);

  return true;
};

export { getUserInfo, addUser, getFullUserList, updateUser, deleteUser };
