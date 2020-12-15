/* 
  Turns a 1D array into a 2D array by grouping
  all messages from the same sender if they are
  in sequence. So:
  [
    { sender: 'USER-A', text: 'blah blah'},
    { sender: 'USER-A', text: 'hello world'},
    { sender: 'USER-B', text: 'Test 123'},
    { sender: 'USER-A', text: 'Peace out'},
  ]
  Becomes:
  [
    [
      { sender: 'USER-A', text: 'blah blah'},
      { sender: 'USER-A', text: 'hello world'},
    ],
    [
      { sender: 'USER-B', text: 'Test 123'},
    ],
    [
      { sender: 'USER-A', text: 'Peace out'},
    ]
  ]
*/

export const groupMessages = messages => {
  const finalArr = [];

  let currentArr = [];
  let currentAuthor = '';
  messages.forEach(m => {
    // If we are on a new author
    // This also works on the initial iteration because the value is initially empty string
    if (m.sender.username !== currentAuthor) {
      if (currentAuthor) {
        finalArr.push([...currentArr]);
      }
      currentArr.splice(0, currentArr.length); // empty the array
      currentArr.push(m);
      currentAuthor = m.sender.username;
    } else {
      currentArr.push(m);
    }
  });

  // We have to call this at the very end as well because
  // once the loop finishes, the first if(){} block will
  // not run and thus the finalArr.push line will not run
  finalArr.push([...currentArr]);

  return finalArr;
};
