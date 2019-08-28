const readline = require('readline-sync')

function start() {
  const content = {}
  content.searchTerm = getSearchTerm()
  content.prefix = getPrefix()

  function getSearchTerm() {
    return readline.question('Type your search term: ')
  }

  function getPrefix() {
    const prefixes = ['Who is', 'What is', 'The history of']
    const prefixIndex = readline.keyInSelect(prefixes)
    return prefixes[prefixIndex]
  }

}

start()