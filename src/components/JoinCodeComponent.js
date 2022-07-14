import React from "react";

class Inputs extends React.Component {
    state = {};

    // get state and display if game created
    render() {
        return (
            <>
                <p className="text-white text-center font-weight-bolder">
                    Send this code to others and they can join the game.
                </p>
                <h2 className="text-white border border-light p-3 text-center">
                    H67DB1
                </h2>
            </>
        );
    }
}

export default Inputs;
