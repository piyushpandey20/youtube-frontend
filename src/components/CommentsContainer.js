import React from "react";

const chatData = [
  {
    name: "Aarav",
    text: "Hello everyone! How's it going?",
    replies: [
      { name: "Ananya", text: "Hi Aarav! Doing great, how about you?" },
      { name: "Kabir", text: "Hey Aarav! It's going well, thanks for asking." },
    ],
  },
  {
    name: "Ishita",
    text: "Can someone help me with this topic?",
    replies: [
      { name: "Rohit", text: "Sure, Ishita! What exactly do you need help with?" },
      { name: "Meera", text: "Ishita, I can share some resources if you want." },
    ],
  },
  {
    name: "Karan",
    text: "This session is amazing!",
    replies: [
      { name: "Priya", text: "Absolutely, Karan! Loving it too." },
      { name: "Vikram", text: "Great content indeed!" },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://static.thenounproject.com/png/65476-200.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ chatData }) => {
  return (
    <>
      {chatData.map((comment, index) => (
        <div key={index}>
          <Comment data={comment} />
          {comment.replies && comment.replies.length > 0 && (
            <div className="pl-5 border-l-2 ml-5">
              <CommentsList chatData={comment.replies} />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList chatData={chatData} />
    </div>
  );
};

export default CommentsContainer;
