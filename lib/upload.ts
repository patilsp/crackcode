'use client';

import { useRef } from 'react';

const Upload = ({ onImageUpload }) => {
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      onImageUpload(fileUrl);
    }
  };

  return (
    <input
      type="file"
      accept="image/*"
      ref={fileInputRef}
      onChange={handleChange}
      className="border border-gray-300 rounded px-3 py-2 w-full"
    />
  );
};

export default Upload;
