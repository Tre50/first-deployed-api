import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore }from 'firebase-admin/firestore'
import { creds } from './cred.js'

initializeApp({
    credential: cert(creds),
})

const db = getFirestore()
export default db
