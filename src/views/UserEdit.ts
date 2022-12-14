import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserEdits extends View<User, UserProps> {
	template(): string {
		return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div>
    `;
	}
}
