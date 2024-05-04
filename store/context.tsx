import { atom } from 'recoil';

interface QuesAns {
    question: string;
    response: string;
}

export const allQuesAnsState = atom<QuesAns[]>({
  key: 'allQuesAnsState',
  default: [],
});