const WEEK_DAYS = ['월', '화', '수', '목', '금', '토', '일'];
const START_HOUR = 8;
const parseTime = (timeStr) => {
  if (!timeStr) return 0;
  const parts = timeStr.split(':');
  if (parts.length !== 2) return 0;
  const h = parseInt(parts[0], 10);
  const m = parseInt(parts[1], 10);
  return h * 60 + m;
};
const getDurationMin = (start, end) => parseTime(end) - parseTime(start);

const state = {
  appData: {
    fixedSchedule: [{ day: '월', start: '10:00', end: '11:00', title: '학원' }],
    studySchedule: [{ day: '월', start: '11:00', end: '12:00', subjectId: 1 }],
    phase: 'step4',
    subjects: [{ id: 1, name: '수학' }]
  }
};

const colors = [
  { bg: 'bg-indigo-500', border: 'border-indigo-600' }
];

WEEK_DAYS.forEach((day, dayIdx) => {
  let blocksHtml = '';

  state.appData.fixedSchedule.filter(item => item.day === day).forEach(item => {
    // ...
    blocksHtml += `[FIXED ${item.title}]`;
  });

  state.appData.studySchedule.filter(item => item.day === day).forEach(item => {
    // ...
    blocksHtml += `[STUDY ${item.subjectId}]`;
  });

  console.log(day, blocksHtml);
});
