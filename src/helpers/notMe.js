// Returns the first user inside of the selected chat
// that is not the currently logged in user.

export const notMe = (chatConfig, selectedChat) => {
  return selectedChat.people.find(p => p.person.username !== chatConfig.userName)?.person?.username;
};
