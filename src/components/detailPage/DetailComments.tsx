import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";
import { IInitialState } from "../../utils/types";

const DetailComments: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const commentList = useSelector((state: IInitialState) => state.reducer.commentList);

  const { getComments } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    getComments(id);
  }, []);
  return (
    <div className="w-full -ml-4 md:w-3/6 md:p-12 h-full flex flex-col justify-around items-center ">
      {commentList?.slice(0, 3).map((comment) => (
        <div
          key={comment.id}
          className="w-64 md:w-84 h-48 bg-orange-100 rounded-lg p-4 mb-2 text-left flex flex-col justify-evenly"
        >
          <p className="text-sm font-bold mb-1">{comment?.name}</p>
          <p className="text-xs">{comment?.body}</p>
          <p className="text-sm font-semibold">{comment?.email}</p>
        </div>
      ))}
    </div>
  );
};

export default DetailComments;
