import lose from '@/assets/lose.mp3';
import success from '@/assets/success.mp3';

const audioMap = {
  lose,
  success
};

export function audioPlayer(type: keyof typeof audioMap) {
  const audio = document.createElement('audio');
  audio.src = audioMap[type];
  audio.play();
}

export const playerList: { type: keyof typeof audioMap; text: string }[] = [
  {
    type: 'lose',
    text: '失败'
  },
  {
    type: 'success',
    text: '成功'
  }
];
