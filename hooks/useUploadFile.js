import { useState } from 'react';
// services
import { uploadFiles } from 'firebase/client';

const useUploadFile = (folder, subFolder) => {
  const [filesUrl, setFilesUrl] = useState([]);
  const [coverUrl, setCoverUrl] = useState([]);
  const [loading, setLoading] = useState({ images: false, cover: false });

  const upload = async (files) => {
    setLoading({ ...loading, images: true });
    const links = await uploadFiles(folder, subFolder, files);
    setFilesUrl(links);
    setLoading({ ...loading, images: false });
  };

  const uploadCover = async (files) => {
    setLoading({ ...loading, cover: true });
    const link = await uploadFiles(folder, subFolder, files);
    setCoverUrl(link);
    setLoading({ ...loading, cover: false });
  };

  const deleteFile = (payload) => {
    setFilesUrl(filesUrl.filter((file) => file !== payload));
  };

  const deleteCover = () => {
    setCoverUrl([]);
  };

  return {
    filesUrl,
    coverUrl,
    loading,
    upload,
    uploadCover,
    deleteFile,
    deleteCover,
  };
};

export default useUploadFile;
