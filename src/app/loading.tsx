import React from "react";
import {Spinner} from "@nextui-org/react";

export default function Loading() {
    return (
        <Spinner className="flex items-center justify-center min-h-screen mb-40" label="Loading..." color="warning" />
    );
}
