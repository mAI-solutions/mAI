import PocketBase from 'pocketbase'
import pb from './pb'

test('pb is an instance of Pocketbase', () => {
  expect(pb).toBeDefined()
  expect(pb).toBeInstanceOf(PocketBase)
})