import React, { useEffect, useState } from "react";
import { appLoaderKey } from "../../../AppLoaderSlice";
import { useDispatch, useSelector } from "react-redux";
import SocketService from "../../../../services/SocketService";
import socket from "../../../../services/SocketBase";

import ChatTile from "./chattile/ChatTile";
import { subjectskey } from "../main/SubjectsSlice";
import PostServices from "../../../../services/PostServices";
import { postskey } from "./PostSlice";
import ChatTile2 from "./chattile/ChatTile2";
import { updatePostAndReplies } from "./PostSlice";
import Loading from "../../../components/loading/Loading";
import { AiFillPlusCircle } from "react-icons/ai";
import CreatePost from "./CreatePost";

export default function ChatWindow() {
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);
  const [post, setPost] = useState("");
  const [count, setCount] = useState(1);
  const [isLoading, setLoading] = useState(false);

  const { selectedSubject } = useSelector((state) => {
    return state[subjectskey];
  });

  const { postsBySubjects } = useSelector((state) => {
    return state[postskey];
  });

  // updating post, fetching post

  useEffect(async () => {
    setLoading(true);
    let response = await PostServices.getPostbySubject(selectedSubject);
    dispatch(
      updatePostAndReplies({
        post: { [selectedSubject]: response.post },
        reply: response.replies,
      })
    );
    setLoading(false);
  }, [selectedSubject]);

  useEffect(() => {}, [postsBySubjects]);

  useEffect(async () => {
    console.log("pag refresh");
  }, [count]);

  // useEffect(async () => {
  //   console.log("execution start");
  //   SocketService.receiveMessage(setMessages, messages, setCount);
  //   console.log("allmsg", messages);
  // }, [socket]);

  return (
    <>
      <div style={{ overflowY: "scroll", overflowX: "clip", height: "60vh" }}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {postsBySubjects?.[selectedSubject]?.map((post) => (
              <ChatTile post={post} />
            ))}
          </>
        )}
      </div>
      <CreatePost />
    </>
  );
}
