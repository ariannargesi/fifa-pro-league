import React from "react";
import { FormControl } from "react-bootstrap";

export default (props) => {
  return (
    <>
      <style type="text/css">
        {`
            .form-control{
                height: 53px;
                width: 394px!important;
                border-radius: 3px;
                border: 3px solid #e1e1e1;
                line-height: 47;
                padding: 0 20px;
                background-color: rgba(0,0,0,.02);
                font-family: 'Roboto Condensed', sans-serif;
                margin: 0 0 10px;
            }
            .form-control:focus {
                background-color: rgba(0,0,0,.02);
                border-color: #e81f3e;
                box-shadow: none;
            }
        `}
      </style>
      <FormControl {...props} />
    </>
  );
};
