import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <>
            </>
        )
    }
}
const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}
const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
}
let ScrollToTop = select('.back-to-top')
if (ScrollToTop) {
    const toggleScrollToTop = () => {
        if (window.scrollY > 100) {
            ScrollToTop.classList.add('active')
        } else {
            ScrollToTop.classList.remove('active')
        }
    }
    window.addEventListener('load', toggleScrollToTop)
    onscroll(document, toggleScrollToTop)
}

export default Main;