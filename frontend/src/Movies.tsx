import TopBanner from './Banner';
import data from './Movies.json';
import styles from './Banner.module.css';

const movies = data.MovieData;

function MovieList() {
  return (
    <>
      <center>
        <br />
        <h3 className={styles.h3}>
          <u>My Movie Collection</u>
        </h3>
        <br />
      </center>

      <table className="table">
        <thead className="bg-light">
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Category</th>
            <th>Edited</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((m) => (
            <tr>
              <td>{m.Title}</td>
              <td>{m.Year}</td>
              <td>{m.Director}</td>
              <td>{m.Rating}</td>
              <td>{m.Category}</td>
              <td>{m.Edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieList;
