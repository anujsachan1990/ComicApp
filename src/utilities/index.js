import locale from '../lang/en-us'

export const fetchData = url => {
  return fetch(url)
    .then(response => {
      return response.json()
    })
    .then(responseJson => {
      return responseJson
    })
    .catch(error => console.log(locale.apiError, error))
}
