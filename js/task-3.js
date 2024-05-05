function getElementWidth(content, padding, border) { 
    let cont = Number.parseInt(content);
    let pad = Number.parseInt(padding);
    let bor = Number.parseInt(border);
    let box = cont + (pad * 2) + (bor * 2);
    return box;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200