import "./movieList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { deleteMovie, getMovies } from "../../context/movieContext/apiCalls";

export default function MovieList() {
  const { movies, dispatch } = useContext(MovieContext);
  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteMovie(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 150 },
    {
      field: "profilePicture",
      headerName: "DP",
      width: 95,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={
              params.row.profilePicture
                ? "http://localhost:8800/images/" + params.row.profilePicture
                : "http://localhost:8800/images/person/noAvatar.png"
            }
              alt="" />
          </div>
        );
      },
    },
    { field: "username", headerName: "Username", width: 120 },
    { field: "name", headerName: "Name", width: 120 },
    { field: "desc", headerName: "About", width: 150 },

    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={{ pathname: "/user/" + params.row._id, movie: params.row }}>
              <button className="productListEdit">Profile</button>
            </Link>
            <Link to={{ pathname: "/postList/" + params.row._id, post: params.row.username,p:params.row }}>
              <button className="productListEdit">Post</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={movies}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}
