import axios from 'axios'


export const getRest = async (id) => {
  const response = await axios.get(`https://data.cityofnewyork.us/resource/43nn-pn8j.json?grade=C&zipcode=${id}`)
  console.log(response)
  return response.data
}