import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { Camera } from '<washworld>/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Camera | { error: string }>) {
  const { location } = req.query;
  try {
    const response = await axios.get(`https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn.io/cam/${location}`);
    const camera: Camera = response.data;
    res.status(200).json(camera);
  } catch (error) {
    res.status(404).json({ error: `Camera not found at location ${location}` });
  }
}