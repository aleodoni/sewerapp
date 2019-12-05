# Criar controller para fazer upload de imagem capturada no celular

# Alterar GeoController para salvar informação do usuário

# Alterar GeoController para chamar API Google e retornar localização
https://github.com/googlemaps/google-maps-services-js

googleMaps.reverseGeocode({
  latlng: [-33.8567844,151.2152967],
})
.asPromise()
.then(expectOK)
.then(expectOperaHouse)
.then(done, fail);

googleMaps.reverseGeocode({
  latlng: [-33.8567844,151.2152967],
  result_type: ['country', 'street_address'],
  location_type: ['ROOFTOP', 'APPROXIMATE']
})
.asPromise()
.then(expectOK)
.then(expectCircularQuay)
.then(done, fail);


