import React, { useState } from "react";
import Button from "../button";
import Header from "../Header";
import TextArea from "../text-area";

const TreeBank = () => {
  const [text, setText] = useState();

  const changeText = (event) => {
    setText(event.target.value);
  };
  var defaultPTBText =
    "(S (NP-SBJ (NP (NNP Pierre) (NNP Vinken) ) (, ,) (ADJP (NP (CD 61) (NNS years) ) (JJ old) ) (, ,) ) (VP (MD will) (VP (VB join) (NP (DT the) (NN board) ) (PP-CLR (IN as) (NP (DT a) (JJ nonexecutive) (NN director) )) (NP-TMP (NNP Nov.) (CD 29) ))) (. .) )";

  var defaultCCGText =
    "(<T S[dcl] 0 2> (<T S[dcl] 1 2> (<T NP 0 2> (<T NP 0 2> (<T NP 0 2> (<T NP 0 1> (<T N 1 2> (<L N/N NNP NNP Pierre N_73/N_73>) (<L N NNP NNP Vinken N>) ) ) (<L , , , , ,>) ) (<T NP\\NP 0 1> (<T S[adj]\\NP 1 2> (<T NP 0 1> (<T N 1 2> (<L N/N CD CD 61 N_93/N_93>) (<L N NNS NNS years N>) ) ) (<L (S[adj]\\NP)\\NP JJ JJ old (S[adj]\\NP_83)\\NP_84>) ) ) ) (<L , , , , ,>) ) (<T S[dcl]\\NP 0 2> (<L (S[dcl]\\NP)/(S[b]\\NP) MD MD will (S[dcl]\\NP_10)/(S[b]_11\\NP_10:B)_11>) (<T S[b]\\NP 0 2> (<T S[b]\\NP 0 2> (<T (S[b]\\NP)/PP 0 2> (<L ((S[b]\\NP)/PP)/NP VB VB join ((S[b]\\NP_20)/PP_21)/NP_22>) (<T NP 1 2> (<L NP[nb]/N DT DT the NP[nb]_29/N_29>) (<L N NN NN board N>) ) ) (<T PP 0 2> (<L PP/NP IN IN as PP/NP_34>) (<T NP 1 2> (<L NP[nb]/N DT DT a NP[nb]_48/N_48>) (<T N 1 2> (<L N/N JJ JJ nonexecutive N_43/N_43>) (<L N NN NN director N>) ) ) ) ) (<T (S\\NP)\\(S\\NP) 0 2> (<L ((S\\NP)\\(S\\NP))/N[num] NNP NNP Nov. ((S_61\\NP_56)_61\\(S_61\\NP_56)_61)/N[num]_62>) (<L N[num] CD (null) 29 N[num]>) ) ) ) ) (<L . . . . .>) )";

  const onSub = () => {
    console.log(text);
    // var textArea = document.getElementById("text");
    // // Reset the colour
    // textArea.style.color = "black";
    // var data = textArea.value;
    // // Escape backslashes
    // data = data.replace(/\\/g, "\\\\");
    // // Parse the string into JSON (defined in parser.js)
    // // var jsonData = parse(data);
    // var sentenceString = "";
    // // sentenceString = getYield(jsonData, sentenceString);
    // // Add the sentence (yield of the JSON tree) to the sentence container
    // document.getElementById("sentence-container").innerHTML =
    //   "<p>" + sentenceString + "</p>";
    // // d3Tree(jsonData);
    // return false;
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

  const loadTextArea = (type) => {
    var textArea = document.getElementById("text");
    textArea.style.color = "black";
    if (type == "PTB") textArea.value = defaultPTBText;
    else if (type == "CCG") textArea.value = defaultCCGText;
  };

  return (
    <div class="wrapper">
      <Header />
      <div>
        <div id="input-text" className="mt-5">
          <TextArea onChange={changeText} color="primary" />
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
