import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('Post to DataBase');
  const db = await openDB('jate', 1);
  const jateSpec = db.transaction('jate', 'readwrite');
  const store = jateSpec.objectStore('jate'); 
  const request = await store.add(content);
  console.log('💾 Data save to DataBase', request);
  return request;
}
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('Get from DataBase');
  const db = await openDB('jate', 1);
  const jateSpec = db.transaction('jate', 'readonly');
  const store = jateSpec.objectStore('jate');
  const request = await store.getAll();
  console.log('💾 Data get from DataBase', request);
  return request;
}

initdb();
