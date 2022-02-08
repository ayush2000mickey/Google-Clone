import React, { useState } from "react";
import classes from "./ImageSearchItem.module.css";
import { Modal, Button } from "antd";
import "antd/dist/antd.less";
import { HiExternalLink } from "react-icons/hi";

const ImageSearchItem = ({ item }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [modalSiteContextLink, setModalSiteContextLink] = useState("");

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Modal
        visible={isModalVisible}
        style={{ top: 20 }}
        title={modalTitle}
        onOk={handleOk}
        onCancel={handleCancel}
        // zIndex
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="link1"
            type="primary"
            href={modalImageSrc}
            target="_blank"
            rel="noreferrer"
            onClick={handleOk}
          >
            Open
          </Button>,
          <Button
            key="link2"
            href={modalSiteContextLink}
            target="_blank"
            rel="noreferrer"
            type="primary"
            onClick={handleOk}
          >
            Visit Site
          </Button>,
        ]}
      >
        <div
          style={{
            display: "grid",
            placeItems: "center",
            width: "100%",
          }}
        >
          <img
            src={modalImageSrc}
            style={{ objectFit: "cover", height: "auto", width: "100%" }}
            alt={modalTitle}
          />
        </div>
      </Modal>

      <div className={classes.listItem}>
        <div
          onClick={() => {
            setModalTitle(item.title);
            setModalImageSrc(item.link);
            setModalSiteContextLink(item.image.contextLink);
            setIsModalVisible(true);
          }}
          className={classes.imgContainer}
        >
          <img className={classes.image} src={item.link} alt={item.title} />
        </div>

        <a href={item.image.contextLink} target="_blank" rel="noreferrer">
          <div className={classes.linkpara2}>{item.title}</div>
          <div className={classes.linkpara1}>
            {item.displayLink} <HiExternalLink />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ImageSearchItem;
