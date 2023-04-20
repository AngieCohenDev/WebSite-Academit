import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05, blog06 } from "./imports";
import "./blog.css";

const Blog = () => {
  return (
    <div className="acad__blog section__padding" id="cursos">
      <div className="acad__blog-heading">
        <h1 className="gradient__text">
          Nuestros cursos están esperando para desarrollar tu potencial!
        </h1>
      </div>
      <div className="acad__blog-container">
        <div className="acad__blog-container_groupA">
          <Article imgUrl={blog01} title="Curso Fontend" />
        </div>
        <div className="acad__blog-container_groupB">
        <Article imgUrl={blog02} title="Curso Backend"/>
        <Article imgUrl={blog03} title="Curso Base de datos"/>
        <Article imgUrl={blog04} title="Curso Trabajo Colaborativo"/>
        <Article imgUrl={blog05} title="Curso Frontend Avanzado React Js + Js Expert"/>
        <Article imgUrl={blog06} title="Curso Js Expert"/>
        </div>
      </div>
    </div>
  );
};

export default Blog;
