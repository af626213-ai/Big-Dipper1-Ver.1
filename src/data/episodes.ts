import { CourseData, Episode, KeyPhrase } from './types';
import { lesson1Episodes } from './lesson1';
import { lesson2Episodes } from './lesson2';
import { lesson3Episodes } from './lesson3';

export const courseData: CourseData = {
  course_title: "English Navigator",
  episodes: [
    ...lesson1Episodes,
    ...lesson2Episodes,
    ...lesson3Episodes,
  ]
};

// App.tsxでのインポート互換性のためにエクスポート
export type { Episode, KeyPhrase };
