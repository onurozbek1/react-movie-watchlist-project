import { useEffect, useState } from 'react';
import MovieForm from '../components/MovieForm';
import MovieList from '../components/MovieList';
import { movieInitialState } from '../interfaces/movieSchema';

function Home() {
  const [movies, setMovies] = useState(() => {
    const savedMovies = localStorage.getItem('movies');
    return savedMovies ? JSON.parse(savedMovies) : [];
  });

  const [movie, setMovie] = useState(movieInitialState);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  const addMovie = () => {
    const newMovie = {
      id: Date.now(),
      ...movie,
    };

    setMovies([...movies, newMovie]);
    setMovie(movieInitialState);
  };

  const deleteMovie = (id) => {
    const filteredMovies = movies.filter((movieItem) => movieItem.id !== id);
    setMovies(filteredMovies);
  };

  const editMovie = (selectedMovie) => {
    setMovie({
      title: selectedMovie.title,
      genre: selectedMovie.genre,
      year: selectedMovie.year,
      status: selectedMovie.status,
    });

    setEditingId(selectedMovie.id);
  };

  const updateMovie = () => {
    const updatedMovies = movies.map((movieItem) => {
      if (movieItem.id === editingId) {
        return {
          id: editingId,
          ...movie,
        };
      }

      return movieItem;
    });

    setMovies(updatedMovies);
    setMovie(movieInitialState);
    setEditingId(null);
  };

  const cancelEdit = () => {
    setMovie(movieInitialState);
    setEditingId(null);
  };

  return (
  <>
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand mb-0 h1">Movie Watchlist</span>
        <span className="text-light small">React CRUD Project</span>
      </div>
    </nav>

    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Movie Watchlist App</h1>
        <p className="text-muted">
          Add, list, update, and delete movies using React and LocalStorage.
        </p>
      </div>

      <MovieForm
        movie={movie}
        setMovie={setMovie}
        addMovie={addMovie}
        updateMovie={updateMovie}
        editingId={editingId}
        cancelEdit={cancelEdit}
      />

      <MovieList
        movies={movies}
        deleteMovie={deleteMovie}
        editMovie={editMovie}
      />

      <footer className="text-center text-muted mt-5">
        <p className="mb-0">
          Developed with React, Bootstrap 5, JavaScript and LocalStorage.
        </p>
      </footer>
    </div>
  </>
);
}
export default Home;