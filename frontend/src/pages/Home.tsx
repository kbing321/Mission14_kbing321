import styles from '../Banner.module.css';

//home page with description of website
function Home() {
  return (
    <>
      <center>
        <h3 className={styles.h3}>
          <br />
          This website is a collection of all of Joel Hilton's movies.
          <br />
          Hope you enjoy it!
        </h3>
      </center>
    </>
  );
}

export default Home;
