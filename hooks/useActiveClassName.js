import { useRouter } from 'next/router';

const useActiveClassName = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  const isActive = (path, className = '') => {
    if (currentPath.indexOf(path) > -1) {
      return `${className} active`;
    }
    return className
  };

  return isActive;
};

export default useActiveClassName;
