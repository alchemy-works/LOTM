export const { createElement, useRef, useState, Suspense, lazy } = window['React']
export const { render } = window['ReactDOM']
export const { HashRouter, Route, Switch, Redirect } = window['ReactRouterDOM']
export const styled = window['styled']

const htm = window['htm']
export const html = htm.bind(createElement)
