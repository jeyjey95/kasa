import React from "react";

function Server({ host }) {
    const isHostSplited = host.name.split(",");
    const [name] = isHostSplited;

    return (
        <div className="server">
            <div className="server__name">
                <p className="server__firstname">{name}</p>
            </div>

            <img src={host.picture} alt="" className="server__picture" />
        </div>
    );
};
export default Server;