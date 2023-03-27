import { useEffect, useState } from 'react';
import { Camera } from '<washworld>/types';

interface CameraProps {
  location: string;
}

export function CameraComponent({ location }: CameraProps) {
  const [camera, setCamera] = useState<Camera | null>(null);

  useEffect(() => {
    async function fetchCamera() {
      const response = await fetch(`https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn.io/cam/${location}`);
      if (response.ok) {
        const data = await response.json();
        setCamera(data);
      } else {
        console.error(`Failed to fetch camera at location ${location}`);
      }
    }
    fetchCamera();
  }, [location]);

  if (!camera) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div>
      <h2>Camera at {camera.location}</h2>
      <p>Status: {camera.status}</p>
    </div>
  );
}