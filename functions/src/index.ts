import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const getId = () => {
	const key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const id = [];
	for (let i = 0; i < 4; i++) {
		const num = Math.floor(Math.random() * key.length);
		id[i] = key[num];
	}

  return id.join('');
};

export const initRoom = functions.https.onRequest((request, response) => {
  response.set('Access-Control-Allow-Origin', '*');
  functions.logger.info('Hello logs!', { structuredData: true });
  const roomId = getId();
  const store = admin.firestore();

  const createdTs = admin.firestore.Timestamp.fromDate(new Date());
  const rooms = store.collection('rooms');
  rooms.doc(roomId).set({
    admin: 'test-user',
    createdTs: createdTs,
    id: roomId,
    lastUpdatedTs: createdTs,
  });

  // add room to rooms collection
  // add user to room users collection
  // set the user as the admin
  // return room id\
  response.send(roomId);
});
