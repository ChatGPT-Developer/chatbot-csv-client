import React from "react";
import { Space, message, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import config from '../../config';

const { Dragger } = Upload;

const PDFUpload = () => {

  // Upload File
  const draggerProps = {
    maxCount: 1,
    action: config.SERVER_URL + "api/upload",
    onChange(info) {
      const { status } = info.file;
      if (status === "done")
        message.success(`${info.file.name} file uploaded successfully.`);
      else if (status === "error")
        message.error(`${info.file.name} file upload failed.`);
    },
  };

  return (
    <Space direction="vertical" size="large" align="center">
      <Dragger {...draggerProps} style={{ width: 250, marginTop: 20 }}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </Dragger>
    </Space>
  );
};

export default PDFUpload;
