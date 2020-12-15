import { useChat } from 'context';
import { useResolved } from 'hooks';
import { ChatList } from 'components';
import { RailHeader } from 'components';
import { Loader } from 'semantic-ui-react';

export const LeftRail = () => {
  const { myChats, createChatClick } = useChat();
  const chatsResolved = useResolved(myChats);

  return (
    <div className="left-rail">
      <RailHeader />
      {chatsResolved ? (
        <>
          {!!myChats.length ? (
            <div className="chat-list-container">
              <ChatList />
            </div>
          ) : (
            <div className="chat-list-container no-chats-yet">
              <h3>No Chats Yet</h3>
            </div>
          )}
          <button className="create-chat-button" onClick={createChatClick}>
            Create Chat
          </button>
        </>
      ) : (
        <div className="chats-loading">
          <Loader active size="huge" />
        </div>
      )}
    </div>
  );
};
