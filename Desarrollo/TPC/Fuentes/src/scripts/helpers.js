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
