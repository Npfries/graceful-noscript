# Graceful Noscript
A graceful downgrade for custom elements when JS is disabled

Getting Started
---------------

Very easy to include in projects, Graceful Noscript is a 16 liner that upgrades custom elements based on javascript availability.
Include the `graceful-noscript.js` file in your project, or copy the contents to your existing project.

The Old Way
-----------

Typical custom elements will display their content, while the tag becomes a generic element with no special properties.
All properties inherited from Shadow DOM or templates will not be interpereted by the browser.
```html
<my-button>
  Do you like foo?
</my-button>
```
essentially becomes
```html
<div>
  Do you like foo?
</div>
```
when javascript is disabled, leaving any of the intended functionality out of the question.

The Graceful Way
----------------

Instead of abandoning users that have Javascript disabled, Graceful Noscript upgrades the elements to the `tag-name` attribute value.
```html
<button tag-name="my-button">
  Do you like foo?
</button>
```
gets upgraded by Graceful Noscript to
```html
<my-button role="button">
  Do you like foo?
</button>
```
Note that when an appropriate ARIA role is available, the component automatically gets the `role` attribute added.

TODO: Add input types and logic for determining if closing tag is needed. Explore standard for necessary attributes on certain tags, such as <img> and <form>
