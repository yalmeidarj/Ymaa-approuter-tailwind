"use client"
// components/CreatePost.tsx
import React, { useState } from 'react';

type Image = {
    url: string;
    alt: string;
};

type Video = {
    url: string;
    title: string;
    description: string;
    thumbnail: string;
};


type PostData = {
    title: string;
    slug: string;
    content: string;
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    authorId: number;
    images: Image[];
    videos: Video[];
};

const CreatePost: React.FC = () => {
    const [postData, setPostData] = useState<PostData>({
        title: "",
        slug: "",
        content: "",
        metaTitle: "",
        metaDescription: "",
        keywords: "",
        authorId: 1, // Adjust as necessary for your application's needs
        images: [],
        videos: []
    });
    // Add fields for image and video
    const [imageData, setImageData] = useState<Image>({ url: "", alt: "" });
    const [videoData, setVideoData] = useState<Video>({
        url: "",
        title: "",
        description: "",
        thumbnail: ""
    });

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setImageData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setVideoData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setPostData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async () => {
        try {
            // Before sending, conditionally add image or video if they exist
            if (imageData.url) postData.images.push(imageData);
            if (videoData.url) postData.videos.push(videoData);
            const response = await fetch('https://ymaa-blog-4d92799313d4.herokuapp.com/create-post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData)
            });

            const data = await response.json();

            if (response.status === 201) {
                console.log('Post successfully created.');
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    return (
        <div className="text-black flex flex-col p-5">
            <input
                className="mb-3 p-2 border rounded"
                name="title"
                placeholder="Title"
                value={postData.title}
                onChange={handleInputChange}
            />
            <input
                className="mb-3 p-2 border rounded"
                name="slug"
                placeholder="Slug"
                value={postData.slug}
                onChange={handleInputChange}
            />
            <textarea
                className="mb-3 p-2 border rounded"
                name="content"
                placeholder="Content"
                value={postData.content}
                onChange={handleInputChange}
            />
            <input
                className="mb-3 p-2 border rounded"
                name="metaTitle"
                placeholder="Meta Title"
                value={postData.metaTitle}
                onChange={handleInputChange}
            />
            <input
                className="mb-3 p-2 border rounded"
                name="metaDescription"
                placeholder="Meta Description"
                value={postData.metaDescription}
                onChange={handleInputChange}
            />
            <input
                className="mb-3 p-2 border rounded"
                name="keywords"
                placeholder="Keywords (comma separated)"
                value={postData.keywords}
                onChange={handleInputChange}
            />
            <input
                className="mb-3 p-2 border rounded"
                name="authorId"
                placeholder="Author ID"
                value={postData.authorId}
                onChange={handleInputChange}
            />
            <div className="mb-3">
                <h4>Image Details</h4>
                <input
                    className="mb-3 p-2 border rounded"
                    name="url"
                    placeholder="Image URL"
                    value={imageData.url}
                    onChange={handleImageChange}
                />
                <input
                    className="mb-3 p-2 border rounded"
                    name="alt"
                    placeholder="Alt Text"
                    value={imageData.alt}
                    onChange={handleImageChange}
                />
            </div>

            <div className="mb-3">
                <h4>Video Details</h4>
                <input
                    className="mb-3 p-2 border rounded"
                    name="url"
                    placeholder="Video URL"
                    value={videoData.url}
                    onChange={handleVideoChange}
                />
                <input
                    className="mb-3 p-2 border rounded"
                    name="title"
                    placeholder="Video Title"
                    value={videoData.title}
                    onChange={handleVideoChange}
                />
                <input
                    className="mb-3 p-2 border rounded"
                    name="description"
                    placeholder="Video Description"
                    value={videoData.description}
                    onChange={handleVideoChange}
                />
                <input
                    className="mb-3 p-2 border rounded"
                    name="thumbnail"
                    placeholder="Video Thumbnail URL"
                    value={videoData.thumbnail}
                    onChange={handleVideoChange}
                />
            </div>
            <button className="p-2 bg-blue-500 text-white rounded" onClick={handleSubmit}>
                Create Post
            </button>
        </div>
    );
}

export default CreatePost;
