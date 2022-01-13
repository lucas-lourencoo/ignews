import { NextApiRequest, NextApiResponse } from 'next';

// JWT
// Next Auth (Social login)
// Cognito, Auth0

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [{ id: 1, name: 'Lucas' }];

  return response.json(users);
};
