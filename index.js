function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}


function increaseRankBy(n) {
    const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, len = rankedLists.length; i < len; i++) {
    let children = rankedLists[i].children

    for (let i = 0, len = children.length; i < len; i++) {
      children[i].innerHTML = parseInt(children[i].innerHTML) + n
    }
  }
  
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}