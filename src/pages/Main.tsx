import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import SinglePost from "../components/SinglePost";
import { actionCreators } from "../redux";
import { IInitialState } from "../utils/types";

const Main: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getPostList } = bindActionCreators(actionCreators, dispatch);
  const postList = useSelector((state: IInitialState) => state.reducer.postList);
  useEffect(() => {
    getPostList();
  }, []);
  return (
    <div className="flex flex-wrap">
      {postList?.map((post) => {
        return (
          <div key={post.id} onClick={() => navigate(`/${post.id}`)}>
            <SinglePost post={post} />
          </div>
        );
      })}
    </div>
  );
};

export default Main;
