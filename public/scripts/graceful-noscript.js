window.onload = () => {
    const ariaRoles = ['button', 'checkbox', 'gridcell', 'link', 'menuitem', 'menuitemcheckbox ', 'menuitemradio', 'option', 'progressbar', 'radio', 'scrollbar', 'searchbox', 'separator', 'slider', 'spinbutton', 'switch', 'tab', 'tabpanel', 'textbox', 'treeitem', 'combobox', 'grid', 'listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid', 'application', 'article', 'cell', 'columnheader', 'definition', 'directory', 'document', 'feed', 'figure', 'group', 'heading', 'img', 'list', 'listitem', 'math', 'none', 'note', 'presentation', 'row', 'rowgroup', 'rowheader', 'separator', 'table', 'term', 'textbox', 'toolbar', 'tooltip', 'banner', 'complementary', 'contentinfo', 'form', 'main', 'navigation', 'region', 'search', 'alert', 'log', 'marquee', 'status', 'timer', 'alertdialog', 'dialog' ]
    let customTags = [...document.querySelectorAll('[tag-name]')];
    for (i = 0; i < customTags.length; i++) {
        let original = customTags[i];
        let replacement = document.createElement(original.getAttribute('tag-name'));
        [...original.attributes].forEach(({name, value}) => {
            let originalTagName = original.tagName.toLowerCase()
            name === 'tag-name' && ariaRoles.includes(originalTagName) ?
                replacement.setAttribute('role', originalTagName)
                : name != 'tag-name' ? replacement.setAttribute(name, value) : null
        });
        replacement.innerHTML = original.innerHTML;
        original.parentNode.replaceChild(replacement, original);
    };
};