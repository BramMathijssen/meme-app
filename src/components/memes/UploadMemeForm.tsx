import React, { useEffect, useState, useRef } from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone, {
  IDropzoneProps,
  ILayoutProps,
} from "react-dropzone-uploader";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./../../config/firebase";
import { v4 } from "uuid";

import "./UploadMemeForm.scss";

const UploadMemeForm = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<any>();

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

  // uploading image to firebase 
  const uploadImage = async () => {
    if (image === null || undefined) return;
    const imageRef = ref(storage, `images/${image!.name + v4()}`);

    const snapshot = await uploadBytes(imageRef, image);
    const downloadURL = await getDownloadURL(snapshot.ref);

    return downloadURL;
  };

  const addMeme = async (URL: any) => {
    const meme = {
      id: v4(),
      title: titleRef.current?.value,
      imageURL: URL,
      upvotes: 0,
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
  };

  // executes uploadImage, makes a meme object with the inputed title from ref and gets the corresponding imageURL, and posts the meme to firebase's realtime DB
  const submitHandler = async (event: any) => {
    event.preventDefault();

    const URL = await uploadImage();
    const res = await addMeme(URL);
  };

  return (
    <div className="container">
      <h2 className="title">Upload Your Meme</h2>
      <div className="card">
        <form className="form" onSubmit={submitHandler}>
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
