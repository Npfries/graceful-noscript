# Graceful Noscript
A graceful downgrade for custom elements when JS is disabled

Getting Started.
----------------

Very easy to include in projects, Graceful Noscript is a 16 liner that upgrades custom elements based on javascript availability.
Include the `graceful-noscript.js` file in your project, or copy the contents to your existing project.

Typical custom elements will display their content, while the tag becomes a generic element with no special properties.
All properties inherited from Shadow DOM or templates will not be interpereted by the browser.
```html
<my-checkbox>Do you like foo?</my-checkbox>
```
essentially becomes
```html
<div>Do you like foo?</div>
```
when javascript is disabled.
