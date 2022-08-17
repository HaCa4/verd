import React from "react";
import DetailComments from "../components/detailPage/DetailComments";
import DetailPost from "../components/detailPage/DetailPost";

const Detail: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row bg-white rounded-lg mt-4 pl-4 md:pl-8 pt-4">
      <DetailPost />
      <DetailComments />
    </div>
  );
};

export default Detail;
