const MS_PER_DAY = 1000 * 60 * 60 * 24;

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
  },

  getDaysFromNow: function(date) {
    let eventDate = new Date(date);
    let now = new Date();

    let utc1 = Date.UTC(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate());
    let utc2 = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());

    let diff = Math.floor((utc1 - utc2) / MS_PER_DAY);

    if(diff === 0) {
      return "Сегодня";
    } else if(diff === 1) {
      return "Завтра";
    } else if(diff < 5) {
      return "Через " + diff + " дня";
    } else {
      return "Через " + diff + " дней";
    }
  }
}
