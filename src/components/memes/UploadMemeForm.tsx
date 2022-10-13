import React, { useEffect, useState } from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone, {
  IDropzoneProps,
  ILayoutProps,
} from "react-dropzone-uploader";
import "./UploadMemeForm.scss";

const UploadMemeForm = () => {
  // specify upload params and url for your file
  const getUploadParams: IDropzoneProps["getUploadParams"] = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };

  // called every time a file's `status` changes
  const handleChangeStatus: IDropzoneProps["onChangeStatus"] = (
    { meta, file },
    status
  ) => {
    console.log(status, meta, file);
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit: IDropzoneProps["onSubmit"] = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };

  return (
    <div className="container">
      <h2 className="title">Upload Your Meme</h2>
      <div className="card">
        <form className="form">
          <div className="form__topic">
            <label className="form__label">Title</label>
            <input className="form__input" type="text"></input>
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
