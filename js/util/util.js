export default Util = {
  getDate: function(date) {
    date = new Date(date);
    //TODO format date
    return date.toLocaleDateString();
  }
}
