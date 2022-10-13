import React, { useEffect, useState, useRef } from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone, {IDropzoneProps,ILayoutProps,} from "react-dropzone-uploader";
import { ref } from "firebase/storage";
import { storage } from "./../../config/firebase";
import { v4} from 'uuid'

import "./UploadMemeForm.scss";


const UploadMemeForm = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<File>();

  // specify upload params and url for your file
  const getUploadParams: IDropzoneProps["getUploadParams"] = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };

  // called every time a file's `status` changes
  const handleChangeStatus: IDropzoneProps["onChangeStatus"] = (
    { meta, file },
    status
  ) => {
    setImage(file);
    console.log(status, meta, file);
  };
  console.log(`🍕 IMG`);
  console.log(image);

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit: IDropzoneProps["onSubmit"] = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };

  const addMemeHandler = async (event: any) => {
    event.preventDefault();
    const meme = {
      title: titleRef.current?.value,
    };
    const response = await fetch(
      "https://meme-app-3ff8a-default-rtdb.europe-west1.firebasedatabase.app/memes.json",
      {
        method: "POST",
        body: JSON.stringify(meme),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="container">
      <h2 className="title">Upload Your Meme</h2>
      <div className="card">
        <form className="form" onSubmit={addMemeHandler}>
          <div className="form__topic">
            <label className="form__label">Title</label>
            <input className="form__input" type="text" ref={titleRef}></input>
          </div>
          <div className="form__topic">
            <label className="form__label">Image</label>
            <Dropzone
              getUploadParams={getUploadParams}
              onChangeStatus={handleChangeStatus}
              maxFiles={1}
              multiple={false}
              accept="image/*"
            />
          </div>
          <button className="form__button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadMemeForm;
