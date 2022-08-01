import axios from "axios";
import React, { useEffect } from "react";
import Post from "../../../domain/entity/post";
import { apiUrlComment, apiUrlLike, apiUrlPost } from "../../../utils/constant";
interface IProps {
  post: Post;
}
const PostCard: React.FC<IProps> = (props: IProps) => {
  const [topic, setTopic] = React.useState<string>("");
  const [likeCount, setLikeCount] = React.useState<number>(0);
  const [commentCount, setCommentCount] = React.useState<number>(0);
  useEffect(() => {
    axios
      .get(apiUrlPost + props.post.id, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res: any) => {
        console.log(res.data.data.topic.title);
        setTopic(res.data.data.topic.title as string);
      });
  }, []);
  useEffect(() => {
    axios
      .get(apiUrlLike + "count/" + props.post.id, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res: any) => {
        console.log(res.data.data);
        setLikeCount(res.data.data as number);
      });
  }, []);

  useEffect(() => {
    axios
      .get(apiUrlComment + "count/" + props.post.id, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res: any) => {
        console.log(res.data.data);
        setCommentCount(res.data.data as number);
      });
  }, []);
  return (
    <>
      <div className="flex items-center justify-center min-h-full">
        {" "}
        <div className="rounded-xl border p-5 shadow-md bg-white">
          <div className="flex w-full items-center justify-between border-b pb-3">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div>
              <div className="text-lg font-bold text-slate-700">
                {props.post.user.name}
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <button className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold">
                {topic}
              </button>
              <div className="text-xs text-neutral-500">2 hours ago</div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="mb-3 text-xl font-bold">{props.post.title}</div>
            <div className="text-sm text-neutral-600">
              {props.post.description}
            </div>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-lg"
                  src="https://picsum.photos/seed/picsum/1800/800"
                  alt="post's image"
                />
              </a>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-slate-500">
              <div className="flex space-x-4 md:space-x-8">
                <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1.5 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                  <span>{commentCount}</span>
                </div>
                <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1.5 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                  <span>{likeCount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
