export default Util = {
  getDateTime: function(date) {
    let rawDateTime = new Date(date);
    let formattedDate = rawDateTime.toLocaleString('ru', {
      month: 'long',
      day: 'numeric'
    });
    let formattedTime = rawDateTime.toLocaleTimeString('ja-JP', {
      hour: '2-digit',
      minute:'2-digit'
    });

    return formattedDate + ", в " + formattedTime;
  }
}
