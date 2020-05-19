export function getUsers(cnt){
    const url = "https://randomuser.me/api/?nat=fr&results="+cnt

    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.warn(error))
}