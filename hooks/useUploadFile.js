import { useEffect, useState } from 'react';
// services
import { uploadImage } from 'firebase/client';

const useUploadFile = () => {
  const [task, setTask] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (task) {
      const onProgress = () => {};
      const onError = () => {};
      const onComplete = () => {
        console.log('Complete');
        task.snapshot.ref.getDownloadURL().then(setImgUrl);
        setLoading(false);
      };

      task.on('state_changed', onProgress, onError, onComplete);
    }
  }, [task]);

  const upload = (file) => {
    const task = uploadImage(file);
    setTask(task);
    setLoading(true);
  };

  const deleteImg = () => setImgUrl(null);

  return { imgUrl, loading, upload, deleteImg };
};

export default useUploadFile;
