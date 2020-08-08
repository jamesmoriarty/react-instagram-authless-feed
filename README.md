# React Instagram Authless Feed

![ci](https://github.com/jamesmoriarty/react-instagram-authless-feed/workflows/ci/badge.svg)

Simple react component to render an Instagram [feed from username](http://www.jamesmoriarty.xyz/react-instagram-authless-feed/).

![Screenshot](docs/screenshot.png)

## Install

```
npm install jamesmoriarty/react-instagram-authless-feed
```

## Props

| Name             | Description                  | Required |
| ---------------- | ---------------------------- | -------- |
| username         | Instagram username.          | true     |
| className        | Container css class.         | false    |
| loadingClassName | Container loading css class. | false    |

## Usage

```javascript
import Feed from "react-instagram-authless-feed"
...
ReactDOM.render(
  <Feed username="jamespaulmoriarty" className="Feed" loadingClassName="Loading"/>,
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
