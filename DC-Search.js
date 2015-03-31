javascript: q = '' + (window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange().text);
if (!q) q = prompt('Hľadaný výraz na Daňovom centre:', '');
if (q != null) location = 'http://www.danovecentrum.sk/vyhladavanie?text=' + escape(q).replace(/ /g, '+') + '';
void 0
