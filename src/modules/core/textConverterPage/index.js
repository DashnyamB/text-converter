import React, { useState } from "react";
import Button from "../../shared/button";
import TextArea from "../../shared/text-area";
import { baseUrl } from "../../../axios/axios";
import Header from "../../shared/Header";
import { tableHeaders } from "./textConverterPage-constants";
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
              "Content-Type": "application/json;charset=UTF-8",
              Connection: "keep-alive",
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
            responseType: "arraybuffer",
            headers: {
              "Content-Type": "audio/x-wav",
            },
          })
          .then((res) => {
            const blob = new Blob([res.data], {
              type: "audio/wav",
            });

            const url = URL.createObjectURL(blob);
            let audio = new Audio(url);
            audio.play();
          })
          .catch((err) => {
            console.log(err);
          });

        break;
      case "/voice-2":
        baseUrl
          .get(`/tts?voice=2&text=${textToProcess}`, {
            responseType: "arraybuffer",
            headers: {
              "Content-Type": "audio/x-wav",
            },
          })
          .then((res) => {
            const blob = new Blob([res.data], {
              type: "audio/wav",
            });

            const url = URL.createObjectURL(blob);
            let audio = new Audio(url);
            audio.play();
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      case "/voice-3":
        baseUrl
          .get(`/tts?voice=3&text=${textToProcess}`, {
            responseType: "arraybuffer",
            headers: {
              "Content-Type": "audio/x-wav",
            },
          })
          .then((res) => {
            const blob = new Blob([res.data], {
              type: "audio/wav",
            });

            const url = URL.createObjectURL(blob);
            let audio = new Audio(url);
            audio.play();
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
      <Header />
      <section className="section">
        <h1 className="title has-text-centered is-size-1 has-text-weight-bold">
          Бичвэр боловсруулалт
        </h1>
        <h2 className="subtitle has-text-grey has-text-centered is-size-6 mt-1">
          Монгол хэлний бичвэрт боловсруулалт, шинжилгээ хийх вебсайт
        </h2>
        <div className="columns mt-3">
          <div className="column is-two-fifths ">
            <span className="tag  is-medium">Бичвэр</span>
            <TextArea onChange={onTextChange} />
            <div className="field is-grouped is-flex is-flex-wrap-wrap mt-2">
              {BUTTON_ACTIONS.map((btn) => (
                <p className="control mb-2">
                  <Button
                    key={btn.action}
                    text={btn.text}
                    color={btn.color}
                    action={btn.action}
                    clicked={buttonClick}
                  />
                </p>
              ))}
            </div>
          </div>
          <div className="column">
            <div className="table-container">
              <table className="table is-bordered is-fullwidth">
                <thead>
                  <tr>
                    {Object.values(tableHeaders).map((header) => (
                      <th>{header}</th>
                    ))}
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TextConverterPage;
