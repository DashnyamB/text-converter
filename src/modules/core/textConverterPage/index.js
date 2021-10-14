import React, { useState } from "react";
import Button from "../../shared/button";
import TextArea from "../../shared/text-area";
import { baseUrl } from "../../../axios/axios";
const BUTTON_ACTIONS = [
  {
    text: "Бичвэр боловсруулах",
    color: "primary",
    action: "/process-text",
  },
  {
    text: "Хоолой 1",
    color: "link",
    action: "/voice-1",
  },
  {
    text: "Хоолой 2",
    color: "link",
    action: "/voice-2",
  },
  {
    text: "Хоолой 3",
    color: "link",
    action: "/voice-3",
  },
];

const TextConverterPage = () => {
  const [textToProcess, setTextToProcess] = useState("");

  const onTextChange = (text) => {
    setTextToProcess(text);
  };
  const buttonClick = (action) => {
    console.log(action);
    switch (action) {
      case "/process-text":
        const formData = new FormData();
        formData.append("text", textToProcess);
        baseUrl
          .post("/process", formData, {
            headers: {
              "Content-Type":
                "application/x-www-form-urlencoded; charset=UTF-8",
            },
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      case "/voice-1":
        baseUrl
          .get(`/tts?voice=1&text=${textToProcess}`, {
            withCredentials: true,
            credentials: "include",
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });

        break;
      case "/voice-2":
        baseUrl
          .get(`/tts?voice=2&text=${textToProcess}`)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      case "/voice-3":
        baseUrl
          .get(`/tts?voice=3&text=${textToProcess}`)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      default:
        break;
    }
  };
  return (
    <div>
      {/* Header orj orj irne */}
      <h2 className="title">Монгол хэл боловсруулалтын үзүүлэн хуудас</h2>
      <TextArea onChange={onTextChange} />
      <div className="is-flex mt-3">
        {BUTTON_ACTIONS.map((btn) => (
          <div className="ml-3">
            <Button
              key={btn.action}
              text={btn.text}
              color={btn.color}
              action={btn.action}
              clicked={buttonClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextConverterPage;
