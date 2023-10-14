import styles from './shared-data.module.css';

/* eslint-disable-next-line */
export interface SharedDataProps {}

export function SharedData(props: SharedDataProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedData!</h1>
    </div>
  );
}

export default SharedData;
