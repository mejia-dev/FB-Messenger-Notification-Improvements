document.addEventListener("MNSC-Initialize", (message) => {
  const customAudio = message.detail;

  const observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      if (mutation.addedNodes.length > 0) {
        const addedElement = mutation.addedNodes[0];
        if (addedElement.tagName === "AUDIO") {
          addedElement.src = customAudio;
          addedElement.play();
          observer.disconnect();
          break;
        }
      }
    }
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
  
});