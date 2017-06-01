export const getScrollParent = function (ele) {
    if (ele.tagName === 'BODY') {
        return window
    } else if (['scroll', 'auto'].indexOf(getComputedStyle(ele).overflowY) != -1) {
        return ele
    }
    return getScrollParent(ele.parentNode)
}

export const getCurrentDistance = function (ele) {
    const innerHeight = ele === window ? window.innerHeight : parseInt(getComputedStyle(ele).height, 10)
    const scrollHeight = ele === window ? document.body.scrollHeight : ele.scrollHeight
    const scrollTop = isNaN(ele.scrollTop) ? ele.pageYOffset : ele.scrollTop
    return scrollHeight - innerHeight - scrollTop
}