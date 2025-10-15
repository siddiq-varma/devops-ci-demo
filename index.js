// index.js
function sum(a, b) { return a + b; }
module.exports = { sum };

if (require.main === module) {
  console.log('sum(1,2)=', sum(1,2));
}
