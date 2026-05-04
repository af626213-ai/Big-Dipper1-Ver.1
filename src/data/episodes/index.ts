import { lesson1_1 } from './lesson1-1';
import { lesson1_2 } from './lesson1-2';
import { lesson1_3 } from './lesson1-3';
import { lesson2_1 } from './lesson2-1';
import { lesson2_2 } from './lesson2-2';
import { lesson2_3 } from './lesson2-3';
import { lesson3_1 } from './lesson3-1';
import { lesson3_2 } from './lesson3-2';
import { lesson3_3 } from './lesson3-3';
import { CourseData } from '../types';

export const courseData: CourseData = {
  course_title: "English Navigator",
  episodes: [
    // Lesson 1 (ID: 1-3)
    lesson1_1,
    lesson1_2,
    lesson1_3,
    // Lesson 2 (ID: 4-6)
    lesson2_1,
    lesson2_2,
    lesson2_3,
    // Lesson 3 (ID: 7-9)
    lesson3_1,
    lesson3_2,
    lesson3_3
  ]
};

// App.tsx 側での型参照を容易にするためのエクスポート
export type { Episode, KeyPhrase, QuizQuestion, VocabQuestion } from '../types';
