performance.mark("squirrel");
performance.mark("squirrel");
performance.mark("monkey");
performance.mark("monkey");
performance.mark("dog");
performance.mark("dog");

// 获取所有的 PerformanceMark 条目。
const allEntries = performance.getEntriesByType("mark");
console.log(allEntries);
// 6

// 获取所有的 "monkey" PerformanceMark 条目。
const monkeyEntries = performance.getEntriesByName("monkey");
console.log(monkeyEntries);
// 2

// 删除所有标记。
performance.clearMarks();

performance.measure('measure name');
const measureAllEntries = performance.getEntriesByName("measure name");
console.log(measureAllEntries);