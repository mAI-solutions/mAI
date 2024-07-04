chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "silly-corrector",
    title: "Silly Corrector",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  console.log("1. Context menu clicked", info, tab); // bs: log para verificar el click
  if (info.menuItemId == "silly-corrector") {
    console.log("2. Sending message to content script"); // bs: log para verificar el envio del mensage 'muestra modal'
    chrome.tabs.sendMessage(tab.id, {
      type: "SHOW_MODAL",
      selectedText: info.selectionText,
    });
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("5. Message received in background script", message); // bs: log para verificar que llegó el textoselec
  if (message.type === "CONFIRM_TONE") {
    let modifiedText = message.text; // Inicializa con el texto original

    switch (message.tone) {
      case "imperativo":
        modifiedText += " imperativo";
        break;
      case "formal":
        modifiedText += " formal";
        break;
      case "serio":
        modifiedText += " serio";
        break;
      default:
        break;
    }

    const tabId = sender.tab ? sender.tab.id : sender.sender.tab.id;

    if (sender.tab && sender.tab.id) {
      chrome.tabs.sendMessage(sender.tab.id, {
        type: "SHOW_MODIFIED_TEXT",
        modifiedText,
      });
    }
  }
});

const intervalIds = {};

function calculateIntervalInMilliseconds(interval) {
  const { minutes, hours, days } = interval;
  return (
    minutes * 60 * 1000 + hours * 60 * 60 * 1000 + days * 24 * 60 * 60 * 1000
  );
}

export function scheduleNotification(task) {
  const interval = calculateIntervalInMilliseconds(task.interval);

  const intervalId = setInterval(() => {
    chrome.notifications.create({
      type: "basic",
      iconUrl: chrome.runtime.getURL("img/portada.jpg"),
      title: task.title,
      message: task.action.properties.message,
      priority: 2,
    });
  }, interval);

  intervalIds[task.id] = intervalId;
}

export function stopNotification(taskId) {
  if (intervalIds[taskId]) {
    clearInterval(intervalIds[taskId]);
    delete intervalIds[taskId];
  }
}
