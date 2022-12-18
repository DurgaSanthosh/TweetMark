import axios from "axios";
async  function getting(req,res){
    axios.get('https://api.twitter.com/2/tweets?ids=1527253678612430848,1527680805103095808,1455761594751676424,1527122798325338112,1527469671460503553,1527713881338089473,1522135675776032769,1470272272107642882,1527462661134471199,1527318536741261319', {
    headers: {
      'Authorization': `AAAAAAAAAAAAAAAAAAAAADoDkgEAAAAA0WfQi6F28ysL4Aay9kqNX3BynJQ%3DP3A9ItvcxRXJUgXxfU0PAh8RvfBXMQ2VUbdEwJNSYFyIf0Spyo`
    }
  })
  .then((twitterresponse) => {
    // console.log(res.data)
    res.send(twitterresponse.data)
    console.log(twitterresponse.data)
  
  })
  .catch((error) => {
    res.send(error.message)
  })

}
export default getting