import { NextApiRequest, NextApiResponse } from 'next';
import { getUserById } from '../../../../lib/api-requests';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;

  if (method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const userId = query.id as string;

  try {
    const user = await getUserById(userId);
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
