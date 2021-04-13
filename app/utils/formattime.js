module.exports = function formattime(date) {
  for (let i = 0;i<date.length;i++) {
    date[i].createdAt= String(date[i].createdAt).substring(0,7)
  }
  return date
}