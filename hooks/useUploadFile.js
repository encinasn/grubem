import { useState } from 'react';
// services
import { uploadFiles } from 'firebase/client';

const useUploadFile = () => {
  const [filesUrl, setFilesUrl] = useState([]);
  const [loading, setLoading] = useState(false);

  const upload = async (folder, files) => {
    setLoading(true);
    const links = await uploadFiles(folder, files);
    setFilesUrl(links);
    setLoading(false);
  };

  const deleteFile = (payload) => {
    setFilesUrl(filesUrl.filter((file) => file !== payload));
  };

  return { filesUrl, loading, upload, deleteFile };
};

export default useUploadFile;
