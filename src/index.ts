import { User } from './models/User';

const user = new User({ name: 'yoyo', age: 20 });

user.on('click', () => {
	console.log('click 1');
});
user.on('change', () => {
	console.log('change 2');
});
user.on('save', () => {
	console.log('saved');
});

user.trigger('click');
user.trigger('change');
user.trigger('save');

console.log(user.events);
