import { Model } from '../models/Model';
import { HasId } from '../models/Model';
export abstract class View<T extends Model<K>, K extends HasId> {
	regions: { [key: string]: Element } = {};

	constructor(public parent: Element, public model: T) {
		this.bindModel();
	}

	bindModel(): void {
		this.model.on('change', () => {
			this.render();
		});
	}

	eventsMap(): { [key: string]: () => void } {
		return {};
	}

	abstract template(): string;

	regionsMap(): { [key: string]: string } {
		return {};
	}

	bindEvents(fragment: DocumentFragment): void {
		this.parent.innerHTML = '';

		const eventsMap = this.eventsMap();

		for (let eventKey in eventsMap) {
			const [eventName, selector] = eventKey.split(':');

			fragment.querySelectorAll(selector).forEach((element) => {
				element.addEventListener(eventName, () => {
					eventsMap[eventKey];
				});
			});
		}
	}

	mapRegions(fragment: DocumentFragment): void {
		const regionsMap = this.regionsMap();

		for (let key in regionsMap) {
			const selector = regionsMap[key];
			const element = fragment.querySelector(selector);

			if (element) {
				this.regions[key] = element;
			}
		}
	}

	render(): void {
		this.parent.innerHTML = '';

		const templateElement = document.createElement('template');
		templateElement.innerHTML = this.template();
		console.log();

		this.bindEvents(templateElement.content);
		this.mapRegions(templateElement.content);

		this.parent.append(templateElement.content);
	}
}
