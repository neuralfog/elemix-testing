import { render } from '@neuralfog/elemix-renderer';
import type { Template } from './types';
import { query } from './shadowRoot';

export class Present {
    public screen(template: Template): this {
        render(template, document.body);
        return this;
    }

    public body(): HTMLElement {
        return document.body;
    }

    public root<Component extends HTMLElement>(): Component {
        return document.body.firstElementChild as Component;
    }

    public getComponent<Component extends HTMLElement>(tag: string): Component {
        return query(this.get(), tag) as Component;
    }

    private get(): HTMLElement {
        return document.body;
    }
}
