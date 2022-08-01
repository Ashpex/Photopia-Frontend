import React from "react";
import comment from "../../../domain/entity/comment";
import logo from "../../../assets/logo.png";

type Props = {
  comment: comment;
}

const CommentCard:React.FC<Props> = (props) => {

  return (
    <>
      <div className="max-w-md w-full mx-auto">
        <ol className="relative border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <img
                className="rounded-full shadow-lg"
                src={logo}
                alt="avatar image"
              />
            </span>
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600">
              <div className="justify-between items-center mb-3 sm:flex">
                <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
                  2 hours ago
                </time>
                <div className="text-sm font-semibold text-gray-900 lex dark:text-gray-300 hover:underline">
                  test
                </div>
              </div>
              <div className="p-3 text-xs font-normal text-gray-900 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                {props.comment.content}
              </div>
            </div>
          </li>
        </ol>
      </div>
    </>
  );
};

export default CommentCard;
