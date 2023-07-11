import React from "react";
import clsx from "clsx";

import "./index.css";

const ClimbLoading = ({ wholeOverlay, classes = {} }) => {

    return (
        <div className={clsx(wholeOverlay ? "loading-backdrop" : "loading", classes.root)}>
            <div className={clsx("lds-dual-ring", classes.loading)}></div>
        </div>
    );
};


export default ClimbLoading;