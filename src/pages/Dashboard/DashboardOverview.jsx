import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = ["#ec4899", "#ef4444", "#22c55e", "#3b82f6"];

const DashboardOverview = () => {
  const [movies, setMovies] = useState([]);
  const [stats, setStats] = useState({});
  const [genreData, setGenreData] = useState([]);

  // Fetch movies
  useEffect(() => {
    fetch("https://assignment-10-movie-server.vercel.app/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);

        // genre wise count
        const genreCount = {};
        data.forEach((movie) => {
          genreCount[movie.genre] = (genreCount[movie.genre] || 0) + 1;
        });

        const formatted = Object.keys(genreCount).map((g) => ({
          name: g,
          value: genreCount[g],
        }));

        setGenreData(formatted);
      });
  }, []);

  // Fetch stats
  useEffect(() => {
    fetch("https://assignment-10-movie-server.vercel.app/stats")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  return (
    <div className="p-6 space-y-8">
      {/* ================= Overview Cards ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-base-100 shadow rounded-xl p-6 text-center">
          <h2 className="text-xl font-semibold">Total Movies</h2>
          <p className="text-3xl font-bold text-pink-500">{movies.length}</p>
        </div>

        <div className="bg-base-100 shadow rounded-xl p-6 text-center">
          <h2 className="text-xl font-semibold">Total Users</h2>
          <p className="text-3xl font-bold text-red-500">{stats?.user || 0}</p>
        </div>

        <div className="bg-base-100 shadow rounded-xl p-6 text-center">
          <h2 className="text-xl font-semibold">Genres</h2>
          <p className="text-3xl font-bold text-green-500">
            {genreData.length}
          </p>
        </div>
      </div>

      {/* ================= Charts ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-base-100 shadow rounded-xl p-5">
          <h3 className="text-lg font-semibold mb-4">Movies by Genre (Bar)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={genreData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#ec4899" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-base-100 shadow rounded-xl p-5">
          <h3 className="text-lg font-semibold mb-4">
            Movies Distribution (Pie)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={genreData}
                dataKey="value"
                nameKey="name"
                outerRadius={110}
              >
                {genreData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ================= Data Table ================= */}
      {/* <div className="bg-base-100 shadow rounded-xl p-6 overflow-x-auto">
        <h3 className="text-lg font-semibold mb-4">Recently Added Movies</h3>

        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Genre</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {movies.slice(0, 6).map((movie, i) => (
              <tr key={movie._id}>
                <td>{i + 1}</td>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      <div className="bg-base-100 shadow rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4">Recently Added Movies</h3>

        {/* ================= TABLE (md+) ================= */}
        <div className="hidden md:block overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Genre</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {movies.slice(0, 6).map((movie, i) => (
                <tr key={movie._id}>
                  <td>{i + 1}</td>
                  <td>{movie.title}</td>
                  <td>{movie.genre}</td>
                  <td>{movie.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ================= MOBILE CARD VIEW ================= */}
        <div className="md:hidden space-y-4">
          {movies.slice(0, 6).map((movie, i) => (
            <div
              key={movie._id}
              className="border rounded-lg p-4 shadow-sm bg-base-200"
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-lg">{movie.title}</h4>
                <span className="badge badge-secondary">#{i + 1}</span>
              </div>

              <p className="text-sm">
                <span className="font-medium">Genre:</span> {movie.genre}
              </p>
              <p className="text-sm">
                <span className="font-medium">Rating:</span> {movie.rating}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
