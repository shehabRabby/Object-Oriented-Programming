//abstraction --  idea pabo -- implement pore korbo

//idea
// interface MediaPlayer {
//   play(): void;
//   pause(): void;
//   stop(): void;
// }

//implementation
// class MusicPlayer implements MediaPlayer {
//   play(): void {
//     console.log(`play music..`);
//   }
//   pause(): void {
//     console.log(`pause music`);
//   }
//   stop(): void {
//     console.log(`stop music`);
//   }
// }

// const ShihabPlayer = new MusicPlayer();
// ShihabPlayer.play();

abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

class ShihabPlayer extends MediaPlayer {
  play(): void {
    console.log(`play music....`);
  }
  pause(): void {
    console.log(`pause music...`);
  }
  stop(): void {
    console.log(`stop music...`);
  }
}

const shehab1 = new ShihabPlayer();
shehab1.pause();