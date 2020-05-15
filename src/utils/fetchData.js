import dataJSON from "../data.json";

const posts = dataJSON.messages;

export async function fetchData(offset, limit)  {
  return await posts.slice(offset, offset+limit)
}

