function MovieList({ movies, deleteMovie, editMovie }) {
  if (movies.length === 0) {
    return (
      <div className="alert alert-info">
        No movies added yet. Add your first movie.
      </div>
    );
  }

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h4 className="card-title mb-3">Movie List</h4>

        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Year</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {movies.map((movie) => (
                <tr key={movie.id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre}</td>
                  <td>{movie.year}</td>
                  <td>
                    <span
                      className={
                        movie.status === 'Watched'
                          ? 'badge bg-success'
                          : 'badge bg-warning text-dark'
                      }
                    >
                      {movie.status}
                    </span>
                  </td>
                  <td className="text-center">
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => editMovie(movie)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteMovie(movie.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default MovieList;