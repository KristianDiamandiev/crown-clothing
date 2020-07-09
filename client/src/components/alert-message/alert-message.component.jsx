import React from "react";

import { MessageBox } from "./alert-message.styles";

const AlertMessage = (props) => {
  return (
    <MessageBox>
      <p>{props.message}</p>
    </MessageBox>
  );
};

export default AlertMessage;
