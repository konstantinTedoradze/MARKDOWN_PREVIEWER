import "./App.css";
import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';
import remarkGfm from 'remark-gfm';

SyntaxHighlighter.registerLanguage('javascript', js);

export default function App() {
  const text =
    "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n if (firstLine == '```' && lastLine == '```js') { \n return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\n\n Or _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n\t- Some are bulleted.\n\t\t - With different indentation levels.\n\t\t\t - That look like this.\n\n\n 1. And there are numbered lists too.\n 1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)";

  const [markdown, setMarkdown] = useState(text);
  const [startSize, setStartSize] = useState(true);
  const [startPreviewSize, setStartPreviewSize] = useState(true);


  useEffect(() => {
    setStartSize(false);
    setStartPreviewSize(false);
    console.log(startSize,'kote');
    console.log(startPreviewSize,'kote preview');
  },[]);

  
  const editorClicked = () => {
    setStartSize(prev => !prev);
    console.log(startSize,'jobe');
  };

  const previewClicked = () => {
    setStartPreviewSize(prev => !prev);
    console.log(startPreviewSize,'jobe preview');
  }

  let editorHeight =  startSize ? "80vh" : "40vh";
  let showPreview =  startSize ? "none" : "block"; 
  let showEditor = startPreviewSize ? "none" : "block";

  return (
    <div className="App">
   
      <div className="wrap-editor" style={{height: editorHeight, display: showEditor}}>
        <div className="toolbar" >
          <section className="toolbar-left-side">
            <i className="fa fa-free-code-camp" title="no-stack-dub-sack"></i>
            <span><b>Editor</b></span> 
          </section>
          
          <button id="editor-button" onClick={editorClicked}>
            <i className="fa fa-arrows-alt"></i>
          </button>
        </div>
        <textarea style={{height: editorHeight}}
          value={markdown}
          id="editor"
          onChange={(e) => setMarkdown(e.target.value)}
        />
      </div>

      <div className="wrap-preview" style={{display: showPreview}}>
        <div className="toolbar">
          <section className="toolbar-left-side">
            <i className="fa fa-free-code-camp" title="no-stack-dub-sack"></i>
            <span><b>Previewer</b></span> 
          </section>
          
          <button id="editor-button" onClick={previewClicked}>
            <i className="fa fa-arrows-alt"></i>
          </button>
        </div>

        <div id="preview">
          <ReactMarkdown  children={markdown}  remarkPlugins={[remarkGfm]}
          components={{code: Component}} />
        </div>
        
        </div>
    </div>
  );
}



const Component = ({children}) => {
  return (
    <SyntaxHighlighter style={docco}>
      {children}
    </SyntaxHighlighter>
  );
};
