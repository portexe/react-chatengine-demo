import { useEffect } from "react";

export const useScrollToBottom = (trigger, className) => {
  // Scrolls to the bottom of a container with a 
  // given className when active is flipped to true

  // Because we are dealing with images as well, we need to wait
  // until the images have loaded fully before doing the scroll.
  useEffect(() => {
    if (!!trigger) {
      Promise.all(
        Array.from(document.images)
          .filter(img => !img.complete)
          .map(img => new Promise(resolve => {
            img.onload = img.onerror = resolve;
          }))
      )
        .then(() => {
          document.getElementsByClassName(className)[0].scrollTop = document.getElementsByClassName(className)[0].scrollHeight;
        });
    }
  }, [trigger, className]);
};
