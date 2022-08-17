import React, { useEffect, useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";
import { addPostHandler, deletePostHandler, editPostHandler } from "../../utils/crudFunctions";
import { IInitialState } from "../../utils/types";

const DetailPost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [body, setBody] = useState<string>();
  const [title, setTitle] = useState<string>();

  const post = useSelector((state: IInitialState) => state.reducer.selectedPost);

  const { getPostById, deletePost, addNewPost, editPost } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    getPostById(id);
  }, []);

  return (
    <div className="w-full md:w-3/6 h-full flex-col justify-evenly items-center">
      <div className="flex w-5/6 h-8 justify-between mb-4">
        <Link to="/">
          <div className="flex items-center w-24 justify-around">
            <BsFillArrowLeftCircleFill className="h-8 w-8 fill-gray-700 font-bold" />
            Posts
          </div>
        </Link>
        <button
          onClick={() => addPostHandler(addNewPost, body, title, navigate)}
          className="w-28 h-full text-sm md:text-lg text-white rounded-lg bg-blue-500 flex items-center justify-center font-bold"
        >
          + New Post
        </button>
      </div>
      <div className=" flex flex-col items-start justify-around h-5/6 w-5/6 p-2 relative ">
        <div className="flex flex-col items-start justify-evenly h-3/6 w-full">
          <label className="font-bold">Title</label>
          <textarea
            className="w-full h-44 text-black font-bold mt-1 break-all p-4 rounded-lg resize-none border border-gray-300 bg-gray-100 "
            placeholder={post?.title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start justify-evenly h-3/6 mt-3 w-full">
          <label className="font-bold">Detail</label>
          <textarea
            className="w-full h-72 text-black font-semibold mt-1 break-all p-4 rounded-lg resize-none border border-gray-300 bg-gray-100 "
            placeholder={post?.body}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-4 w-5/6 h-12 md:h-24 flex justify-end items-end font-bold text-white">
        <button
          onClick={() => deletePostHandler(deletePost, navigate, post)}
          className="mr-4 w-28 h-8 font-semibold rounded-lg bg-red-500 flex items-center"
        >
          <MdDelete className="mx-2" />
          Delete
        </button>
        <button
          onClick={() => editPostHandler(editPost, post, body, title)}
          className="w-28 h-8 font-semibold rounded-lg bg-blue-500 flex items-center"
        >
          <MdEdit className="mx-2" />
          Update
        </button>
      </div>
    </div>
  );
};

export default DetailPost;
