import { ISinglePostProps } from "../utils/types";

const SinglePost = ({ post }: ISinglePostProps) => {
  return (
    <div className="w-60 md:w-72 h-48 md:h-72 bg-white m-4 flex flex-col rounded-lg items-start p-4 text-left cursor-pointer hover:bg-green-200 ">
      <h4 className="font-bold text-black text-sm md:text-lg">{post.title}</h4>
      <p className="font-semibold text-xs md:text-lg text-gray-500 mt-4 break-all">{post.body}</p>
    </div>
  );
};

export default SinglePost;
