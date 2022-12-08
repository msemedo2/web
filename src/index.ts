import { UserForm } from './views/UserForm';
import { User } from './models/User';

const root = document.getElementById('root');
const user = User.buildUser({ name: 'Name', age: 20 });

const userForm = new UserForm(root as HTMLElement, user);
userForm.render();
