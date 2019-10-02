module.exports = function zeros(expression) {

  let counters = {
    count2: 0,
    count5: 0,
  };
  expression.split("*").forEach(factorial => {
    if (factorial.slice(-2) === "!!") {
      for (let i = parseInt(factorial); i > 3; i -= 2) {
        incCounters(i, counters);
      }
    } else {
      for (let i = parseInt(factorial); i > 1; i--) {
        incCounters(i, counters);
      }
    }
  });
  return counters.count2 < counters.count5 ? counters.count2 : counters.count5
}

let incCounters = (number, counters) => {
  for (; ;) {
    if (!(number % 2)) {
      counters.count2++;
      number /= 2;
      continue;
    }
    if (!(number % 5)) {
      counters.count5++;
      number /= 5;
      continue;
    }
    break;
  }
}
