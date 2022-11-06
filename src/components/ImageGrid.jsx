import React from 'react';
import useFirestore from '../hooks/useFirestore';
const ImageGrid = () => {
  const { docs, loading } = useFirestore('gallery');
  if (loading) {
    return (
      <div className=" text-gray-500 text-xl text-center">Loading....</div>
    );
  }
  if (docs.length <= 0) {
    return (
      <span className="text-xl text-gray-500 text-center">
        Your Memories are Empty
      </span>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-3 animate-slideup animate-enter mb-10">
      {docs.map((img) => (
        <div
          key={img.id}
          className="transaction ease-in-out delay-150  duration-300  cursor-pointer hover:scale-105  "
        >
          <img
            className="rounded-md w-full object-contain h-full"
            src={img.url}
            alt="uploaded"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
