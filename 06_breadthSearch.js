const graph = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

let count = 0;

function breadthSearch(graph, start, end) {
  let queue = [];
  queue.push(start);
  let serched = [];

  while (queue.length > 0) {
    const current = queue.shift();

    console.log(current);
    count += 1;

    if (!serched.includes(current)) {
      if (graph[current].includes(end)) {
        return true;
      } else {
        queue = [...queue, ...graph[current]];
        serched.push(current);
      }
    }
  }

  return false;
}

console.log(breadthSearch(graph, 'a', 'g'));
console.log(count);

// node 06_breadthSearch.js
