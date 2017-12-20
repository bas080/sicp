// used to log function calls
const trace = fn => (...args) => {
  const value = fn(...args);

  console.log(...args, '// => ', value)

  return value;
}

module.exports = trace
