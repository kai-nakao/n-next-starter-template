export const getCitySelector = (data: any) => {
  const cityData = data?.result

  const filteredCityData: City[] = cityData.filter((city: City) => {
    return !city.cityName.startsWith('岡山市') || !city.cityName.endsWith('区')
  })

  return filteredCityData
}
