import React from "react";

class Inputs extends React.Component {
    // get state and display if game created
    render() {
        return (
            <>
                <p className="text-white text-center font-weight-bolder">
                    Send this code to others and they can join the game.
                </p>
                <h2 className="text-white border border-light p-3 text-center">
                    {this.props.joinCode}
                </h2>
            </>
        );
    }
}

export default Inputs;
