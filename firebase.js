const admin = require('firebase-admin');
const serviceAccount = require('pizza-project-8aa68-firebase-adminsdk-xsdub-5e70f279aa-kopia.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})
const db = admin.firestore();