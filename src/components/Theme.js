import React from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";

const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "##37437f",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#EF6C00",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a"
};

const hcstyle = {
  background: "#37437f",
  width: "350px",
  height: "56px",

  overflow: "hidden"
};

const HC = props => {
  return (
    <div style={hcstyle}>
      <h2>{props.headerTitle}</h2>
    </div>
  );
};

const MainTheme = props => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={props.steps}
          handleEnd={props.handleEnd}
          headerComponent={<HC headerTitle={"Flight Bot"} />}
        />
      </ThemeProvider>
    </div>
  );
};

export default MainTheme;
