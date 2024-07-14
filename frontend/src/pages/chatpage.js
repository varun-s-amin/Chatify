import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/chatBox";
import MyChats from "../components/miscellaneous/myChats";
import SideDrawer from "../components/miscellaneous/sideDrawer";
import { ChatState } from "../context/chatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box display="flex" justifyContent="space-between" w="100%" height="90vh" p="10px">
        {user && (<MyChats fetchAgain={fetchAgain} />)}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;