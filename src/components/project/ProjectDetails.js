import React from "react";

function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card">
        <div className="card-content">
          <span className="card-title">Project Title-{id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            libero molestias, nisi voluptate dolorem quas quis magni ex
            voluptatem labore in illum inventore accusamus pariatur. Fugit illum
            eum fuga alias.
          </p>
          <div className="card-action grey-text text-ligthen-4 grey-text">
            <div>Posted by Nero</div>
            <div>8th of august,8pm</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
