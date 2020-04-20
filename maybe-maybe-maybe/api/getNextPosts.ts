import Axios from "axios";

export default async function getNextPosts() {
  const response = await Axios.get('http://localhost:4000');
  
  return response.data;
}