import React from "react";
import agents from "../static_resource/agents";

export const AgentCard = () => {
  return (
    <div className="section section-5 bg-light">
      <div className="container">

        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-6 mb-5">
            <h2 className="font-weight-bold heading text-primary mb-4">
              Our Agents
            </h2>

            <p className="text-black-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Numquam enim pariatur similique debitis vel nisi.
            </p>
          </div>
        </div>

        <div className="row">
          {agents.map((agent) => (
            <div
              className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0"
              key={agent.id}
            >
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
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
