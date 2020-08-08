class UploadJsonToFirestore {
    constructor() {
        this.firebase_admin_module = require('../firebase_admin')
        this.FirebaseAdmin = new this.firebase_admin_module()
        this.fs = require('fs')

    }
    fromFile(paths, file) {
        console.log('Uploading')
        let content = this.fs.readFileSync(file, "utf8")
        let json = JSON.parse(content)
        console.log(json)
        let fireAdmin = this.FirebaseAdmin
            .firestoreDB()


        for (let i = 0; i < paths.length; i++) {
            if (i == 0) {
                fireAdmin = fireAdmin.collection(paths[i])
            } else {
                let parsePath = paths[i].split('.')
                if (parsePath.length > 0
                    && parsePath[parsePath.length - 1] === 'col') {
                    fireAdmin = fireAdmin.collection(parsePath[0])
                } else {
                    fireAdmin = fireAdmin.doc(paths[i])
                }
            }
        }

        fireAdmin.set(json)
            .then(() => {
                console.log('Uploaded')
            }).catch(error => {
                console.log(error)
            })
    }
}

module.exports = UploadJsonToFirestore