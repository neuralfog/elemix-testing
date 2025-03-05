import { render } from '@neuralfog/elemix-renderer';
import type { Template } from './types';
import { query } from './shadowRoot';

export class Present {
    private rootElement!: Element;

    public screen(template: Template): this {
        render(template, document.body);

        this.rootElement = document.body.firstElementChild as Element;

        if (!this.rootElement) {
            throw new Error(
                'Can not find first element within a Presenter Screen',
            );
        }

        return this;
    }

    public root<Component extends HTMLElement>(): Component {
        return this.rootElement as Component;
    }

    public getByTag<Component extends HTMLElement>(tag: string): Component {
        return query(this.get(), tag) as Component;
    }

    private get<Component extends HTMLElement>(): Component {
        return this.rootElement as Component;
    }
}
