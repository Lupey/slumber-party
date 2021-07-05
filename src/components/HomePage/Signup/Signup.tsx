import React from 'react';
import { addUser } from '../../../services/UserService';
import { neonifyContainer } from '../../../utils/neon-utils';

export interface SignupProps {
  updateUserInfo: (id: string) => void;
}

const styles = {
  inputContainer: {
    // boxShadow: neonifyContainer('#791e94'),
    boxShadow: neonifyContainer('#541388'),
    border: '3px solid white',
    borderRadius: 3,
    display: 'flex',
  },
  input: {
    borderBlock: 'none',
    borderInline: 'none',
    color: '#444444',
    fontSize: 24,
    padding: 9,
    outline: 'none',
    width: '100%',
    border: 'none',
    height: '100%',
    borderRadius: 0,
  },
  button: {
    borderRadius: '3px',
    marginTop: '30px',
    width: '120px',
    alignSelf: 'flex-end',
    backgroundColor: '#ffffff2e',
    color: 'white',
    fontSize: '20px',
    padding: '8px',
    border: '2px solid white',
    boxShadow: neonifyContainer('#5268c5'),
  },
};

const Signup: React.FunctionComponent<SignupProps> = ({ updateUserInfo }) => {
  const [name, setName] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleJoin = async () => {
    const id = await addUser(name);
    window.sessionStorage.setItem('id', id);
    updateUserInfo(id);
  };

  return (<>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={styles.inputContainer}>
        <input placeholder="Name" className="monospace" style={styles.input} type="text" onChange={handleChange} value={name} />
      </div>
      <button className="code" style={styles.button} onClick={handleJoin}>Join</button>
    </div>
  </>);
};

export default Signup;
