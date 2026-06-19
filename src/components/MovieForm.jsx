function MovieForm({
  movie,
  setMovie,
  addMovie,
  updateMovie,
  editingId,
  cancelEdit,
}) {
  const handleChange = (event) => {
    const { name, value } = event.target;

    setMovie({
      ...movie,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!movie.title || !movie.genre || !movie.year) {
      alert('Please fill in all fields.');
      return;
    }

    if (editingId) {
      updateMovie();
    } else {
      addMovie();
    }
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h4 className="card-title mb-3">
          {editingId ? 'Update Movie' : 'Add New Movie'}
        </h4>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Movie Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={movie.title}
              onChange={handleChange}
              placeholder="Example: Inception"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Genre</label>
            <input
              type="text"
              className="form-control"
              name="genre"
              value={movie.genre}
              onChange={handleChange}
              placeholder="Example: Science Fiction"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Year</label>
            <input
              type="number"
              className="form-control"
              name="year"
              value={movie.year}
              onChange={handleChange}
              placeholder="Example: 2010"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Status</label>
            <select
              className="form-select"
              name="status"
              value={movie.status}
              onChange={handleChange}
            >
              <option value="Not watched">Not watched</option>
              <option value="Watched">Watched</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary me-2">
            {editingId ? 'Update' : 'Add'}
          </button>

          {editingId && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={cancelEdit}
            >
              Cancel
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default MovieForm;