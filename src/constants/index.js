import questionMockData from '@mock/quizz_questions.json';

const {questions} = JSON.parse(JSON.stringify(questionMockData));

export const MIN_QUESTIONS = 1;

export const MAX_QUESTIONS = questions.length;

export const MAX_ANSWERS = 4;

export const PAGES = {
  welcome: 'welcome',
  quiz: 'quiz',
  result: 'result'
};

export const KEYBOARD_BUTTONS = {
  Enter: 'Enter',
  ArrowLeft: 'ArrowLeft',
  ArrowRight: 'ArrowRight',
  Backspace: 'Backspace',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
};

export const BUTTON_QUIZ_TEXT = {
  start: 'Начать',
  answer: 'Ответить',
  next: 'Дальше',
  retry: 'Попробовать еще раз'
};

export const RESULT_MODES = {
  correct: 'correct',
  wrong: 'wrong',
  passed: 'passed'
};

export const PLURALIZE_ANSWERS = {
  question: {
    once: 'вопрос',
    some: 'вопроса',
    many: 'вопросов'
  },
  wrong: {
    once: 'ошибку',
    some: 'ошибки',
    many: 'ошибок'
  }
};

export const PATTERNS = {
  removeZero: /^0+(?=\d)/
};