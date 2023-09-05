// pages/index.tsx

import CreatePost from "components/CreatePost";
import { Metadata } from "next";

export const metadata: Metadata = {
    robots: {
        index: false,
        nocache: true,
    }
}

function Page() {
    return (
        <div className="container mx-auto p-5">
            <h1 className="text-2xl mb-5">Create a new post:</h1>
            <CreatePost />
        </div>
    );
}

export default Page;

