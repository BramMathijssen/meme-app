const FIREBASE_DATABASE_DOMAIN = process.env.REACT_APP_FIREBASE_DATABASE_URL;

export async function getAllMemes() {
  const response = await fetch(`${FIREBASE_DATABASE_DOMAIN}/memes.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch any Memes.");
  }

  const transformedMemes = [];

  for(const key in data) {
    const memeObj = {
        id: data[key].id,
        title: data[key].title,
        image: data[key].imageURL,
        upvotes: data[key].upvotes
    }
    transformedMemes.push(memeObj);
  }

  return transformedMemes;
}

export async function getSingleMeme() {}

export async function addMeme() {}

export async function addVote() {
  
}

export async function getAllComments() {}

export async function addComment() {}
