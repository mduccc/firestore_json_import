### Import json to Firebase firestore tool

#### Use:
- Install Node js and Npm.
- Run `install.sh` script to install components
- Add your firebase admin private key into `firebase_admin_private_key.json`
- Put json file into `json_file` folder and run command.

#### Command:
```bash
node app.js upload <colection/doc/colection2.col/doc> <file>
```
Suffix `.col` as `colection2.col`  will create a collection with `collection2` name.

Root path is a collection.


#### Example:
  ```bash
node app.js upload users/user_A/albums.col/family family_album.json
  ```