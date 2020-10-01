# React Instagram Authless Feed

![ci](https://github.com/jamesmoriarty/react-instagram-authless-feed/workflows/ci/badge.svg) ![GitHub package.json version](https://img.shields.io/github/package-json/v/jamesmoriarty/react-instagram-authless-feed)

Simple react component to render an Instagram feed from user name.

## Examples

- [repl.it](https://repl.it/@jamesmoriarty1/SizzlingNonstopCallbacks)
- [jamesmoriarty.xyz](http://www.jamesmoriarty.xyz/react-instagram-authless-feed/)

## Screenshots

![Screenshot](docs/screenshot.png)

## Install

```
npm install jamesmoriarty/react-instagram-authless-feed#v1.0.2
```

## Props

| Name             | Description                  | Required |
| ---------------- | ---------------------------- | -------- |
| userName         | Instagram user name.         | True     |
| className        | Container css class.         | False    |
| classNameLoading | Container loading css class. | False    |

## Usage

```javascript
import Feed from "react-instagram-authless-feed"
...
ReactDOM.render(
  <Feed userName="jamespaulmoriarty" className="Feed" classNameLoading="Loading"/>,
  document.getElementById('root')
);
```

## Development

```
npm start
```

## Test

```
npm test
```

## Release

```
npm run dist
```

## Build App

```
npm run build
```

## Deploy App

```
npm run deploy
```
