import React from 'react';
import { User } from '../../../types/User.model';
import { neonifyHr } from '../../../utils/neon-utils';
import { UserState } from '../../../types/UserState.enum';

export interface UsersProps {
  userList: User[];
  userInfo: User;
}

const styles = {
  userContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  ul: {
    padding: '16px 0',
    margin: '0',
    marginTop: '16px',
    // boxShadow: neonifyContainer('red'),
    // border: '3px solid white',
  },
  li: {
    listStyle: 'none',
    // borderBottom: '3px solid white',
    borderRadius: '3px',
    padding: '8px',
    fontSize: '20px',
    color: 'white',
    marginBottom: 16,
  },
  hr: (color: string) => ({
    height: 3,
    backgroundColor: 'white',
    boxShadow: neonifyHr(color),
    border: 'none',
    borderRadius: 1.5,
  }),
};

const Users: React.FunctionComponent<UsersProps> = ({ userList, userInfo }) => {
  return (<>
    <ul style={styles.ul}>
      {userList.map(user => (
        <li style={styles.li}>
          <div style={styles.userContainer}>
            <span>
              {user.name}
            </span>
            <span>
              {user.state === UserState.AWAKE ? 'Awake' : 'Asleep'}
            </span>
          </div>
          <hr style={styles.hr(user.id === userInfo.id ? '#f706cf' : '#2de2e6')} />
        </li>
      ))}
    </ul>
  </>);
};

export default Users;
