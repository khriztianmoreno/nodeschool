function getShortMessages(messages) {
  return messages
    .filter(element => element.message.length < 50)
    .map(item => item.message)
}

module.exports = getShortMessages
