import axios from 'axios';

import { User } from '../models';

const baseDomain = 'https://martinrodl.me/api/';

export const getUserInfo = async (userName: string): Promise<User> => {
  const { data } = await axios.get(
    baseDomain + 'users/profile/name/' + userName,
  );
  return data;
};
