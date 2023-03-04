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
  try{
  console.log('Post to DataBase');
  const db = await openDB('jate', 1);
  const jateSpec = db.transaction('jate', 'readwrite');
  const store = jateSpec.objectStore('jate'); 
  const request = await store.put({id : id, value: content});
  console.log('💾 Data save to DataBase', request);
  await jateSpec.done;
  return request;
} catch (err) {
  console.log('Data save Error: ', err);
}}
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  try{
  console.log('Get from DataBase');
  const db = await openDB('jate', 1);
  const jateSpec = db.transaction('jate', 'readonly');
  const store = jateSpec.objectStore('jate');
  const request = await store.getAll();
  console.log('💾 Data get from DataBase', request.value);
  await jateSpec.done;
  return request.value;
}catch (err) {
  console.log('Data get Error: ', err);
}}

initdb();
