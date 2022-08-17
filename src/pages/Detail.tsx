import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { MdDelete, MdEdit } from "react-icons/md";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { IInitialState } from "../utils/types";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux";

const Detail: React.FC = () => {
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

  const deletePostHandler = () => {
    deletePost(post?.id);
    navigate("/");
  };

  const addPostHandler = () => {
    addNewPost({
      id: `${Math.floor(Math.random() * 10000)}`,
      userId: "1",
      body: body,
      title: title,
    });
    navigate("/");
  };

  const editPostHandler = () => {
    editPost(`${post?.id}`, {
      body: body,
      title: title,
    });
  };

  useEffect(() => {
    getPostById(id);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-evenly bg-white rounded-lg mt-4 pl-8 pt-4 ">
      <div className="flex  w-3/6 h-8 justify-between">
        <div className="flex items-center w-24 justify-around">
          <BsFillArrowLeftCircleFill className="h-8 w-8 fill-gray-700" />
          Posts
        </div>
        <button
          onClick={() => addPostHandler()}
          className="w-28 h-full text-white rounded-lg bg-blue-500 flex items-center justify-center font-bold"
        >
          + New Post
        </button>
      </div>
      <form className=" flex flex-col items-start justify-around h-5/6 w-3/6 p-2 relative ">
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
      </form>
      <div className=" w-60 h-24 self-end flex justify-between items-end font-bold text-white">
        <button
          onClick={() => deletePostHandler()}
          className="mr-4 w-28 h-8 font-semibold rounded-lg bg-red-500 flex items-center"
        >
          <MdDelete className="mx-2" />
          Delete
        </button>
        <button
          onClick={() => editPostHandler()}
          className="w-28 h-8 font-semibold rounded-lg bg-blue-500 flex items-center"
        >
          <MdEdit className="mx-2" />
          Update
        </button>
      </div>
    </div>
  );
};

export default Detail;
