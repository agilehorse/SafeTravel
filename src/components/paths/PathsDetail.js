import React from "react";
import {useHistory, useParams} from "react-router-dom";
import Header from "../reusable/Header";
import {PATHS} from "../../utils/mockData";

export default function PathsDetail() {

    const {pathId} = useParams();
    const history = useHistory();

    const path = PATHS[pathId];

    return (
        <>
            <Header text={path.name} isCancel cancelAction={() => history.push("/paths")}/>
        </>
    );
}