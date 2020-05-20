
export function searchUser(q){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "OAuth oauth_consumer_key=\"QZEtRk1FreVFoOcjX7xFTP77I\",oauth_token=\"1300498070-HiIP7UIJp8gNFBJmqzYkc44T4Ks9aeDRHyjoe49\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1589967686\",oauth_nonce=\"DnA6llJ6Ucb\",oauth_version=\"1.0\",oauth_signature=\"86dYJoAcjdFVCGE6ZX4W%2BwTANCc%3D\"");
    myHeaders.append("Cookie", "personalization_id=\"v1_+Id0xPt1JkhQPN9KEkKUjw==\"; guest_id=v1%3A158996705689084687; lang=fr");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    return fetch("https://api.twitter.com/1.1/users/search.json?q="+q, requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
}

export function getTweetsFromUser(id){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "OAuth oauth_consumer_key=\"QZEtRk1FreVFoOcjX7xFTP77I\",oauth_token=\"1300498070-HiIP7UIJp8gNFBJmqzYkc44T4Ks9aeDRHyjoe49\",oauth_signature_method=\"HMAC-SHA1\",oauth_timestamp=\"1589969833\",oauth_nonce=\"MTzBIgl8Wyz\",oauth_version=\"1.0\",oauth_signature=\"D053TIWorg6TVvwzh1njUNNVt7U%3D\"");
    myHeaders.append("Cookie", "personalization_id=\"v1_+Id0xPt1JkhQPN9KEkKUjw==\"; guest_id=v1%3A158996705689084687; lang=fr");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    return fetch("https://api.twitter.com/1.1/statuses/user_timeline.json?user_id="+id, requestOptions)
      .then(response => response.json())
      .catch(error => console.log('error', error));
}
