const htm = window.htm
const { createElement, useRef, useState, Suspense, lazy } = window.React
const { render } = window.ReactDOM
const { HashRouter, Route, Switch, Redirect } = window.ReactRouterDOM
const styled = window.styled

const html = htm.bind(createElement)

export {
    html,
    styled,
    render,
    lazy,
    useRef,
    useState,
    HashRouter,
    Suspense,
    Route,
    Redirect,
    Switch,
    createElement,
}
