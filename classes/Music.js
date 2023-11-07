// import the Media class:
const Media =require("./Media")

// create your Music class:
class Music extends Media{
    constructor(title, year, genre, artist,length ){
    super(title, year, genre)
    this.artist=artist
    this.length=length
    
    }
    summary(){
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`
    }
    static shortestAlbum(arrMusic){
        let lowest = 999999;
        let idx = 0;

    arrMusic.forEach((song, i) => {
      if (song.length < lowest) {
        lowest = song.length;
        idx = i;
      }
    
    }
    );

    return arrMusic[idx];
    }
}

// don't change below
module.exports = Music;
