const harmlessRansomNote = (noteText, magazineText) => {
  var noteArray = noteText.split(' ');
  var magazineArray = magazineText.split(' ');
  var magazineObject = {};

  magazineArray.forEach(word => {
    if (!magazineObject[word]) magazineObject[word] = 0;
    magazineObject[word]++;
  });

  var noteIsPossible = true;
  noteArray.forEach(word => {
    if (magazineObject[word]) magazineObject[word]--;
    else noteIsPossible = false;
  });

  return noteIsPossible;
};

console.log(
  harmlessRansomNote(
    'this is a secret note for you from a secret admirer',
    'puerto rico is a place of great wonder and excitement it has many  waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also that you must wear hiking boots this is one of the best places i have ever visited'
  )
);

export default harmlessRansomNote;
