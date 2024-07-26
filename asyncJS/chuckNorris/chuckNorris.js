const loadJoke = async () => {
    try {
        const chuckNorJoke = await fetch('https://api.chucknorris.io/jokes/random', {
            headers:{
                Accept:"application/json"
            }

        })
        const jokeData = await chuckNorJoke.json()
        document.getElementsByClassName('loadingJoke')[0].innerHTML = jokeData.value;


    } 
    catch (error) {
    console.log(error)
    }

}
document.getElementById('btn').addEventListener("click",
     loadJoke)