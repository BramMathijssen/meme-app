const FIREBASE_DATABASE_DOMAIN = process.env.REACT_APP_FIREBASE_DATABASE_URL;

export async function getAllMemes() {
    const response = await fetch(`${FIREBASE_DATABASE_DOMAIN}/memes.json`)
    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message || 'Could not fetch any Memes.')
    }

    console.log(data);

    // const transformedMemes = data.results.map(memeData => {
    //     return
    // })
}

export async function getSingleMeme() {

}

export async function addMeme() {

}

export async function getAllComments() {

}

export async function addComment() {

}

