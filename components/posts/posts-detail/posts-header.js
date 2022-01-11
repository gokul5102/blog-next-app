import React from "react";
import classes from "./posts-header.module.css";
import Image from "next/image";
const PostsHeader = ({ title, image }) => {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
};

export default PostsHeader;
