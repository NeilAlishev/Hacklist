const MS_PER_DAY = 1000 * 60 * 60 * 24;

export default DateUtil = {
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

  // work-around
  getDateTimeAndroid: function(date) {
    const months = [
      "января", "февраля", "марта", "апреля", "мая", "июня", "июля",
      "августа", "сентября", "октября", "ноября", "декабря"
    ];

    date = new Date(date);
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    const formattedDate = date.getDate() + " " + months[date.getMonth()];
    const formattedTime = date.getHours() + ":" + minutes;

    return formattedDate + ", в " + formattedTime;
  },

  getDaysFromNow: function(date) {
    let eventDate = new Date(date);
    let now = new Date();

    if(eventDate - now < 0) {
      return "Уже начался";
    }

    let utc1 = Date.UTC(
      eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate()
    );
    let utc2 = Date.UTC(
      now.getFullYear(), now.getMonth(), now.getDate()
    );

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
