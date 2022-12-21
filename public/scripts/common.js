/**
 * Создает HTML элемент
 * @param {string} tag - тег
 * @param {string} className - имя класса
 * @param {Map} params - словарь с прочими атрибутами элемента
 * @returns {string} элемент
 */
 function getHTMLElement(tag, className, params) {
    const element = document.createElement(tag);
    element.className = className;
    if(!!params){
        for (let field_name in params) {
            element.setAttribute(field_name, params[field_name]);
          }
    }
    return element;
}

export {getHTMLElement};
