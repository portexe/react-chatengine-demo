// Takes an array of people and then joins their
// usernames with commas. Also filters out current
// user's username. If there is only one username
// it just returns it.

export const joinUsernames = (people, currentUsername) => {
  return '@' + people
    .map(p => p.person.username)
    .filter(un => un !== currentUsername)
    .join(', @');
};
