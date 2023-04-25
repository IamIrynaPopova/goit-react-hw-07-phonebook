import { Hearts } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <Hearts
      height="60"
      width="60"
      color="#de0505"
      ariaLabel="hearts-loading"
      wrapperStyle={{}}
      wrapperClass={css.loader}
      visible={true}
    />
  );
};
