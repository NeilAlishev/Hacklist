import CityEnum from '../enums/city_enum.js'

export default HackathonFilters = {
  filterByQuery: function(allHackathons, filtrationQuery) {
    return allHackathons.filter(function(hackathon) {
      return hackathon.city === CityEnum[filtrationQuery.city];
    });
  }
}
