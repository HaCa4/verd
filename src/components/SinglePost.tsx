import { ISinglePostProps } from "../utils/types";

const SinglePost = ({ post }: ISinglePostProps) => {
  return (
    <div className="w-72 h-60 bg-white m-4 flex flex-col  items-start p-4 text-left cursor-pointer ">
      <h4 className="font-bold text-black text-lg">{post.title}</h4>
      <p className="font-semibold text-gray-500 mt-4 break-all">{post.body}</p>
    </div>
  );
};

export default SinglePost;
