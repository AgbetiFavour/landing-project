import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import CustomEditor from "@blowstack/ckeditor5-full-free-build";
// import CustomEditor from "ckeditor5-build-full-toolbar";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import Styled from "styled-components";

const Div = Styled.div`

width:99%;
margin-bottom:30px;
padding-top:10px;


.ck.ck-editor__main .ck-content {
    // min-height: 400px;
    // max-width:90% !importamt;
    @media(max-width:650px){
      width:100%;
    }
    width: 100%;
    height: 8cm;
    padding: 1cm 10px 2cm !important;
    border: 1px hsl( 0,0%,82.7% ) solid;
   
    background: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin: 0 auto;
    margin-top:20px !important;
  
  
}
.ck.ck-toolbar>.ck-toolbar__items{
  
  
}
.ck.ck-toolbar.ck-toolbar_grouping,.ck-toolbar{
  
    z-index: 1;
  box-shadow: 0 0 5px hsla( 0,0%,0%,.2 );
  border-bottom: 1px solid var(--ck-color-toolbar-border);
  border-top: none;

}
`;

export const DraftEditorCk = ({
  content,
  setContent,
  debouncedSave,
  pageData,
}) => {
  const [pageContent, setPageContent] = React.useState("");
  const onChange = (evt, edt) => {
    const newContent = edt.getData();
    setContent(newContent);
  };

  // const onBlur = (evt, edt) => {
  //   console.log("onBlur event called with event info: ", evt);
  // };

  // const afterPaste = (evt, edt) => {
  //   console.log("afterPaste event called with event info: ", evt);
  // };

  const config1 = {
    toolbar: {
      items: [
        "heading",
        "|",
        "bold",
        "italic",
        "|",
        "bulletedList",
        "numberedList",
        "|",
        "insertTable",
        "|",
        "undo",
        "redo",
      ],
    },
    image: {
      toolbar: [
        "imageStyle:full",
        "imageStyle:side",
        "|",
        "imageTextAlternative",
      ],
    },
    table: {
      contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
    },
    language: "en",
  };

  const editorConfiguration = {
    // add language
    language: "en",
    removePlugins: ["Title", "InsertImage"],
    // customize default toolbar
    /* toolbar: [
    
    ],
      */
  };
  // React.useEffect(() => {
  //   debouncedSave(pageData);
  //   if (content) setPageContent(content);
  // }, [content]);
  return (
    <Div>
      <CKEditor
        config={config1}
        style={{ width: "100%",color:"red" }}
        editor={ClassicEditor}
        // activeClass="ckeditor"
        placeholder=""
        plugins={{ removePlugins: "Title" }}
        // data={pageContent}
        data={content}
        onChange={onChange}
      />
    </Div>
  );
};
