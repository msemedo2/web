import { UserForm } from './views/UserForm';

const root = document.getElementById('root');

const userForm = new UserForm(root as HTMLElement);
userForm.render();
