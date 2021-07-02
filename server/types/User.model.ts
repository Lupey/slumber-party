import { UserState } from './UserState.enum';

export interface User {
  id: string;
  name: string;
  state: UserState;
}
