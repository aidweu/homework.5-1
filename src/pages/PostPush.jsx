import { useState } from "react"
import axios from "axios"
import PostPage from "./PostPage";
const PostPush = () => {
  const [postData, setPostData] = useState("");
  const [inputData, setInputData] = useState("");

  const inp = () => {
    if (inputData.trim() !== "") {
      setPostData(e.value)
    }else{
      alert("Please enter text!!!")
    }
  }
  const handlePostRequest = async () => {
    try {
      const response = await axios.post('https://dummyjson.com/posts/add', {title:inputData,userId:1, });
      console.log('Ответ на POST-запрос:', response.data);
    } catch (error) {
      console.error('Ошибка при выполнении POST-запроса:', error);
    }
  };

  return (
      <div className="post_push_one">
          <div className="post_push">
              <h1>Post push</h1>
              <button className="postPush_input" onClick={handlePostRequest}>POST-запрос</button>
              <input className="postPush_input"  onChange={(e) =>  setInputData(event.target.value)} />
              <PostPage className="postPush_input" setPostData={setPostData} />
          </div>

      </div>
  )
}

export default PostPush;