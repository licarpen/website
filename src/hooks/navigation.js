import { useState } from 'react';

export const useNavigation = () => {
  const [navigationSelection, setNavigationSelection] = useState('home');

  const handleChange = ({ target }) => {
    setNavigationSelection(target.value);
  };

  return { navigationSelection, handleChange };
};
