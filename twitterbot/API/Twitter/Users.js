import twitter from "react-native-simple-twitter";

export async function searchUser(query){
    twitter.setConsumerKey("QZEtRk1FreVFoOcjX7xFTP77I", "hSCb8vF75rfW5wovq4KcF3PXHR0Py5Nr9qmpxzNdWc00kXE0Fe");
    twitter.setAccessToken("1300498070-HiIP7UIJp8gNFBJmqzYkc44T4Ks9aeDRHyjoe49", "tzdfPyj7iX4x9m0VmoqdgYXddPxwy8O4H4vP1eah95ua2");

    return twitter.api("GET", "users/search.json", { q: query })
        .then(response => response)
        .then(data => data)
        .catch(error => console.warn("error", error));
}

export async function getTweetsFromUser(id){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "OAuth oauth_consumer_key=\"QZEtRk1FreVFoOcjX7xFTP77I\",oauth_token=\"1300498070-HiIP7UIJp8gNFBJmqzYkc44T4Ks9aeDRHyjoe49\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1589969833\",oauth_nonce=\"MTzBIgl8Wyz\",oauth_version=\"1.0\",oauth_signature=\"D053TIWorg6TVvwzh1njUNNVt7U%3D\"");
    myHeaders.append("Cookie", "personalization_id=\"v1_+Id0xPt1JkhQPN9KEkKUjw==\"; guest_id=v1%3A158996705689084687; lang=fr");
    
    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };
    
    return fetch("https://api.twitter.com/1.1/statuses/user_timeline.json?user_id="+id, requestOptions)
        .then(response => response.json())
        .catch(error => console.log("error", error));
}
