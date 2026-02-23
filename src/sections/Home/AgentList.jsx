import React from "react";
import agents from "../../static_resource/agents";
import { AgentCard } from "../../components/AgentCard";

const AgentList = ({title}) => {
  return (
    <div className="section section-5 bg-light">
      <div className="container">

        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-6 mb-5">
            <h2 className="font-weight-bold heading text-primary mb-4">
              {title}
            </h2>

            <p className="text-black-50">
              Helping clients find the right property with expert guidance and trusted real estate advice.
            </p>
          </div>
        </div>

        <div className="row">
          {agents.map((agent) => (
            <div
              className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0"
              key={agent.id}
            >
              <AgentCard agent={agent} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AgentList;
