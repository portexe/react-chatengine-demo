import { useEffect } from 'react';
import { useChat } from 'context';
import { LeftRail, ChatToolbar } from 'components';
import { getChats, ChatEngine } from 'react-chat-engine';

export const Chat = () => {
  const { myChats, setMyChats, chatConfig, selectedChat } = useChat();

  useEffect(() => {
    console.log('My Chats: ', myChats);
  }, [myChats]);

  return (
    <>
      {!!chatConfig && (
        <ChatEngine
          hideUI={true}
          userName={chatConfig.userName}
          projectID={chatConfig.projectID}
          userSecret={chatConfig.userSecret}
          onConnect={() => {
            getChats(chatConfig, setMyChats);
          }}
        />
      )}

      <div className="chat-container">
        <LeftRail />
        <div className="current-chat">
          {selectedChat ? (
            <div className="chat">
              <ChatToolbar />
            </div>
          ) : (
            <div className="no-chat-selected">
              <img
                src="/img/pointLeft.png"
                className="point-left"
                alt="point-left"
              />
              Select A Chat
            </div>
          )}
        </div>
      </div>
    </>
  );
};
