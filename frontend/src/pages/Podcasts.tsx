import TopBanner from '../main/Banner';
import styles from '../Banner.module.css';

//podcasts page with link to BaconSale
function BaconSale() {
  return (
    <>
      <center>
        <h3 className={styles.h3}>
          <br />
          <u>My Podcasts</u>
          <br />
        </h3>
        <a className={styles.a} href="https://baconsale.com/">
          BaconSale
        </a>
      </center>
    </>
  );
}

export default BaconSale;
