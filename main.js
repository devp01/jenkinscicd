function greet(name = 'world') {
  return `Hi, ${name}!`;
}

if (typeof module !== 'undefined') module.exports = { greet }; // for tests
