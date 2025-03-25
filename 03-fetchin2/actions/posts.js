"use server";
import { storePost } from "@/lib/posts";
import { redirect } from "next/navigation";

export async function createPost(prevState, formData) {
  console.log(formData);
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");

  let errors = [];

  if (!title || title.trim().length == 0) {
    errors.push("Title is required");
  }
  if (!content || content.trim().length == 0) {
    errors.push("content is required");
  }
  if (!image || image.size == 0) {
    errors.push("image is required");
  }

  if (errors.length > 0) {
    console.log(errors);
    return { errors };
  }
  await storePost({
    imageUrl: "",
    title, //title : title 과 동일한 뜻
    content,
    userId: 1,
  });

  redirect("/feed");
}
