function my_Dictionary() { //Creating a series of KVP's.
    var Game = {
        Title:"Mariokart", //A game where I'm sure many friendships were ended.
        Genre:"Racing",
        Age_Rating:"E",
        Players:"1-8"
    };
    delete Game.Title //Deleting the title of the game to get an undefined response.
    document.getElementById("Dictionary").innerHTML = Game.Title;
}