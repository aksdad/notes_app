# Simple NodeJS Note Taking App

> This is a project created to play around with NodeJS and practice it as well. Its a WIP and more features should be added soon. The notes are stored in the file system.

## Install
This project uses node and npm. Go check them out if you don't have them locally installed.
```
cd notes-app
npm install
```

## Usage
Add a note
```
node app.js add --title "title" --body "body"
```

List all notes
```
node app.js list
```

Read a note
```
node app.js read --title "title"
```

Remove a note
```
node app.js delete --title "title"
```
## Contribute

PRs are welcome.

## License

GPL v3