const baseURL = "http://localhost:3000/api/v1"

export const forgotPassword = (email) => {
  console.log("forgotPassword firing!")
  return fetch(`${baseURL}/forgot_password`, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(email)
  })
  .then(res => res.json())
  .then(response => {
    alert(response.alert)
  })
  // .then(() => {
  //   console.log("do the redirect here? Or just nothing?")
  // })
  .catch(console.log)
}

// createPokemon(trainerId, pokedexEntry, boxNumber) {
//   const pokemon = {
//     pokedexid: pokedexEntry.id,
//     name: pokedexEntry.name,
//     number: boxNumber,
//     image: pokedexEntry.image,
//     icon: pokedexEntry.icon,
//     height: pokedexEntry.height,
//     position: "static",
//     zindex: 0,
//     trainer_id: trainerId
//   }
//   return fetch(this.baseUrl, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify({ pokemon: pokemon })
//   }).then(res => res.json())
//   .catch(error => console.error(error))
// }
