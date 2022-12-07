import { User } from './models/User';

const user = new User({ name: 'carl', age: 0 });

user.save();
