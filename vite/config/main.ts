console.log('Hello, world!');
console.log(import.meta.env);
const test = import.meta.glob('/test.vue', { as: 'raw', eager: true });
console.log(test);
// console.log(fs);
