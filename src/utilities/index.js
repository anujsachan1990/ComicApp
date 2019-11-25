import locale from '../lang/en-us'

export default {
  fetchData: url => {
    return (
      fetch(url)
        .then(response => {
          return response.json()
        })
        .then(responseJson => {
          return responseJson
        })
        // eslint-disable-next-line no-console
        .catch(error => console.log(locale.apiError, error))
    )
  },
}
