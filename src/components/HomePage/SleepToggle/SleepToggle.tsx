import React from 'react';
import { updateUserState } from '../../../services/UserService';
import { User } from '../../../types/User.model';
import { UserState } from '../../../types/UserState.enum';
import { neonifyContainer } from '../../../utils/neon-utils';

export interface SleepToggleProps {
  userInfo: User;
  updateUserList: () => Promise<void>;
  updateUserInfo: (id: string) => Promise<void>;
}

const styles = {
  button: {
    borderRadius: '3px',
    alignSelf: 'flex-end',
    backgroundColor: '#ffffff2e',
    color: 'white',
    fontSize: '20px',
    padding: '8px',
    border: '2px solid white',
    boxShadow: neonifyContainer('#541388'),
    width: '100%',
  },
};
 
const SleepToggle: React.FunctionComponent<SleepToggleProps> = ({ userInfo, updateUserList, updateUserInfo }) => {

  const toggleSleep = async () => {
    const newWakeState = userInfo.state === UserState.AWAKE ? UserState.ASLEEP : UserState.AWAKE;
    await updateUserState(userInfo.id, newWakeState);
    await updateUserList();
    await updateUserInfo(userInfo.id);
  };

  const awakeText = 'I\'m going to sleep.';
  const asleepText = 'I\'m awake!';

  return ( <>
    <button style={styles.button} onClick={toggleSleep}>{userInfo.state === UserState.AWAKE ? awakeText : asleepText}</button>
  </> );
};
 
export default SleepToggle;