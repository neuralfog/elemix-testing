import { render } from '@neuralfog/elemix-renderer';
import type { Template } from './types';
import { query } from './shadowRoot';

export class Present {
    private rootElement!: Element;

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

    public getByTag<Component extends HTMLElement>(tag: string): Component {
        return query(this.get(), tag) as Component;
    }

    private get<Component extends HTMLElement>(): Component {
        return this.rootElement as Component;
    }
}
