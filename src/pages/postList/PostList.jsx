import "./postList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { PostContext } from "../../context/postContext/PostContext";
import { deletePost, getPosts } from "../../context/postContext/apiCalls";
import axios from "axios";
import { getPOSTSuccess } from "../../context/postContext/PostActions";

export default function PostList() {

  const { posts, dispatch } = useContext(PostContext);
  const [Posts, setPosts] = useState([]);
  // const dispatch = useContext(PostContext);
  // window.location.reload(false);

  const location = useLocation();
  const post = location.post;
  const p = location.p;

  useEffect(() => {
    const fetchPosts = async () => {
      try {

        if (Posts == false) {
          const res = await axios.get("/posts/profile/" + p.username);
          // console.log(res)
          setPosts(res.data)
        }
        getPosts(posts._id, Posts, dispatch);
        // dispatch(getPOSTSuccess(Posts));
        // getPosts(post.username, dispatch)
        // console.log(Posts)
      } catch (error) {
        console.log(error)
      }
      // : await axios.get("posts/timeline/" + user._id);
    }
    fetchPosts();
  }, [ Posts, dispatch]);

  const handleDelete = async (id) => {
    // console.log({ userId })
    // await axios.delete(`/posts/${id}`,
    // // { userId: userId }
    // );
    // dispatch(null,{ type: "DELETE_POST_SUCCESS", payload: id });
    deletePost(id, dispatch);
    setPosts([]);
  };


  const columns = [
    { field: "_id", headerName: "Post ID", width: 150, height: 200 },
    {
      field: "img",
      headerName: "Post Img",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg"
              src={
                params.row.img
                  ? "http://localhost:8800/images/" + params.row.img
                  : "http://localhost:8800/images/person/noAvatar.png"
              }
              alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "desc", headerName: "Details", width: 150 },
    // {
    //   field: "likes",
    //   headerName: "Likes",
    //   width: 120,
    // },
    {
      field: "updatedAt",
      headerName: "Time",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline

              className="userListDelete"

              onClick={() => handleDelete(params.row._id, params.row.userId)}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className="userList">
        <img
          src={
            p.profilePicture
              ? "http://localhost:8800/images/" + p.profilePicture
              : "http://localhost:8800/images/person/noAvatar.png"
          }
          alt=""
          className="userShowImg"
        />
        <span className="userShowUsername">{post}</span>
        <DataGrid
          rows={Posts}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
          getRowId={(r) => r._id}
          getPostsImg={(r) => r.img}
        />
      </div>
    </>
  );
}
