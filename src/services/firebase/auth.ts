import { getAuth, signInAnonymously } from 'firebase/auth';
import { app } from './app';

export const auth = getAuth(app);

export const signIn = async () => {
  try {
    await signInAnonymously(auth);
  } catch (e) {
    console.log('Failed to sign in: ', e);
  }
};
