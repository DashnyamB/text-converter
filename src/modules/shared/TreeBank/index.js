import React, {useState} from "react";
import Button from "../button";
import TextArea from "../text-area";
import {d3Tree} from "./d3Tree";
import {parse} from "./parser";
import * as $ from "jquery";

const TreeBank = () => {
  const [text, setText] = useState();

  const changeText = (event) => {
    setText(event.target.value);
  };

  const onSub = () => {
    console.log(text);
    var textArea = document.getElementById("text");
    // Reset the colour
    textArea.style.color = "black";
    var data = textArea.value;
    // Escape backslashes
    data = data.replace(/\\/g, "\\\\");
    //TODO use this as url parameter https://stackoverflow.com/questions/18697034/how-to-pass-parameters-in-ajax-post/35590754
    // url: 'superman?' + jQuery.param(data),
    $.ajax("https://61923e19aeab5c0017105e88.mockapi.io/tree/convert", {
      type: "POST" , success: (response) => {
        var jsonData = parse(response.message);

        //TODO: here is the text input line
        // var jsonData = parse(data);

        if (jsonData) {
          var sentenceString = "";
          sentenceString = getYield(jsonData, sentenceString);
          // Add the sentence (yield of the JSON tree) to the sentence container
          document.getElementById("sentence-container").innerHTML =
            "<p>" + sentenceString + "</p>";
          d3Tree(jsonData);
        }
      }
    })
    return false;
  };

  const getYield = (node, string) => {
    if (node.children == null) string = string.concat(node.name, " ");
    else {
      for (var i in node.children) {
        var child = node.children[i];
        string = getYield(child, string);
      }
    }
    return string;
  };

  return (
    <div class="wrapper">
      <div>
        <div id="input-text" className="mt-5">
          <TextArea id="bilguun" onChange={changeText} color="primary"/>
        </div>
        <div id="input-submit" className="mt-2">
          <Button
            clicked={onSub}
            color="primary"
            size="medium"
            text="Боловсруулах"
          />
        </div>
        <div id="tree-container"></div>
        <div id="sentence-container"></div>
      </div>
    </div>
  );
};

export default TreeBank;
