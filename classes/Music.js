// import the Media class:
const Media =require("./Media")

// create your Music class:
class Music extends Media{
    constructor(artist, length,title, year, genre ){
    this.artist=artist
    this.length=length
    super(title, year, genre)
    }
    summary(){
        return `"Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre:${this.genre}, Length: ${this.length}`
    }
    static shortestAlbum(arrMusic){
        let lowest = 999999;
    let idx = 0;

    arrMusic.forEach((song, i) => {
      if (song.duration < lowest) {
        lowest = song.duration;
        idx = i;
      }
    
    }
    );

    return arrMusic[idx];
    }
}

// don't change below
module.exports = Music;
