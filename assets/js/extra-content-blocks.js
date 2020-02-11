var mappings = [
    {dst: "left-banner", src:"left-banner-content"},
    {dst: "right-banner", src:"right-banner-content"}
];


/**
 * A function that looks for element with id=src, and then places it under element with id=dst.
 */
function placeContent(src, dst) {

    var dstElem = document.getElementById(dst);
    var srcElem = document.getElementById(src);

    if ((srcElem !== null) && (dstElem !== null)) {
        dstElem.appendChild(srcElem);
        console.log(src + ' placed under ' + dst);
    } else {
        console.log(src + ' wasn\'t placed under ' + dst);
    }
}

mappings.forEach(function (item) {
    placeContent(item.src, item.dst);
})
