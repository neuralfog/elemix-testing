# @neuralfog/elemix-testing

Testing utilities for Elemix components.

## Install

```bash
npm install @neuralfog/elemix-testing --save-dev
```

## present()

Renders templates and provides helpers to query the rendered DOM.

```typescript
import { present } from '@neuralfog/elemix-testing';
import { html } from '@neuralfog/elemix-renderer';

const presenter = present().screen(html`<my-component></my-component>`);
```

### screen(template)

Renders a template to `document.body`. Returns the presenter for chaining.

```typescript
const presenter = present().screen(html`<my-component></my-component>`);
```

### body()

Returns `document.body`.

```typescript
presenter.body();
```

### root()

Returns the first child element of `document.body`.

```typescript
const component = presenter.root<MyComponent>();
```

### getComponent(selector)

Finds an element by CSS selector, traversing shadow DOM boundaries.

```typescript
const button = presenter.getComponent<HTMLButtonElement>('button');
const child = presenter.getComponent<ChildComponent>('child-component');
```

## HTML

Snapshot helper that extracts and formats HTML from a component tree, including shadow DOM content.

```typescript
import { HTML } from '@neuralfog/elemix-testing/snapshots';

expect(HTML(presenter.root<MyComponent>())).toMatchSnapshot();
```
