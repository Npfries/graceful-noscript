
/*  Graceful Noscript
      
    Copyright © 2019 Nathan Fries
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the “Software”), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
    of the Software, and to permit persons to whom the Software is furnished to do
    so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,EXPRESS OR IMPLIED,
    INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
    PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
    OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
    SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. */

window.onload = () => {
    const ariaRoles = ['button', 'checkbox', 'gridcell', 'link', 'menuitem', 'menuitemcheckbox ', 'menuitemradio', 'option', 'progressbar', 'radio', 'scrollbar', 'searchbox', 'separator', 'slider', 'spinbutton', 'switch', 'tab', 'tabpanel', 'textbox', 'treeitem', 'combobox', 'grid', 'listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid', 'application', 'article', 'cell', 'columnheader', 'definition', 'directory', 'document', 'feed', 'figure', 'group', 'heading', 'img', 'list', 'listitem', 'math', 'none', 'note', 'presentation', 'row', 'rowgroup', 'rowheader', 'separator', 'table', 'term', 'textbox', 'toolbar', 'tooltip', 'banner', 'complementary', 'contentinfo', 'form', 'main', 'navigation', 'region', 'search', 'alert', 'log', 'marquee', 'status', 'timer', 'alertdialog', 'dialog' ]
    let customTags = [...document.querySelectorAll('[tag-name]')];
    for (i = 0; i < customTags.length; i++) {
        let original = customTags[i];
        let replacement = document.createElement(original.getAttribute('tag-name'));
        [...original.attributes].forEach(({name, value}) => {
            let originalTagName = original.tagName.toLowerCase();
            name === 'tag-name' && ariaRoles.includes(originalTagName) ?
                replacement.setAttribute('role', originalTagName)
                : name != 'tag-name' ? replacement.setAttribute(name, value) : null
        });
        replacement.innerHTML = original.innerHTML;
        original.parentNode.replaceChild(replacement, original);
    };
};
