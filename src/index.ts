import { User } from './models/User';

const user = new User({ name: 'carl', age: 0 });

// console.log(user.get('name'));

console.log(user.get('name'));
console.log(
	user.on('change', () => {
		console.log('user changed');
	})
);
console.log(user.trigger('change'));
