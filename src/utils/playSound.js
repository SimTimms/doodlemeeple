import like from '../assets/notification_simple-02.wav';
import click from '../assets/notification_simple-01.wav';

export default function playSound(audioFile) {
  const clickAudio = new Audio(click);
  const likeAudio = new Audio(like);

  //  audioFile === 'click' && playing === false && clickAudio.play();
  //  audioFile === 'like' && playing === false && likeAudio.play();
}
