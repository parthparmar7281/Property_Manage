import React from "react";

export const AgentCard = ({ agent }) => {
  return (
    <div className="h-100 person">
      <img
        src={agent.image}
        alt={agent.name}
        className="img-fluid"
      />

      <div className="person-contents">
        <h2 className="mb-0">
          <a href="#">{agent.name}</a>
        </h2>

        <span className="meta d-block mb-3">
          {agent.role}
        </span>

        <p>{agent.description}</p>

        <ul className="social list-unstyled list-inline dark-hover">
          <li className="list-inline-item">
            <a href={agent.social.twitter}>
              <span className="icon-twitter"></span>
            </a>
          </li>

          <li className="list-inline-item">
            <a href={agent.social.facebook}>
              <span className="icon-facebook"></span>
            </a>
          </li>

          <li className="list-inline-item">
            <a href={agent.social.linkedin}>
              <span className="icon-linkedin"></span>
            </a>
          </li>

          <li className="list-inline-item">
            <a href={agent.social.instagram}>
              <span className="icon-instagram"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
