const LOCATION_ENDPOINT = "http://localhost:3000"

export default function fetchLocations() {
    fetch(LOCATION_ENDPOINT)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })
}