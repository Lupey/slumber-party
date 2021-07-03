import React from 'react';
import { neonifyContainer } from '../../../utils/neon-utils';

export interface UsersProps {

}

const ulStyles = {
  padding: '16px 0',
  margin: '0',
  marginTop: '16px',
  boxShadow: neonifyContainer('red'),
  border: '3px solid white',
};

const liStyles = {
  listStyle: 'none',
  borderBottom: '3px solid white',
  borderRadius: '3px',
  padding: '8px',
  fontSize: '20px',
  color: 'white',
  marginBottom: 16,
};

const Users: React.FunctionComponent<UsersProps> = () => {
  return (<>
    <ul style={ulStyles}>
      <li style={liStyles}>Brent</li>
      <li style={liStyles}>Madison</li>
      <li style={liStyles}>Sasha</li>
    </ul>
  </>);
};

export default Users;
