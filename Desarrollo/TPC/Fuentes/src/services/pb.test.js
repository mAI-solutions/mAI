import PocketBase from 'pocketbase'
import pb from './pb'

test('pb is an instance of Pocketbase', () => {
  expect(pb).toBeDefined()
  expect(pb).toBeInstanceOf(PocketBase)
})

test('pb has a collection method', () => {
  expect(pb.collection).toBeDefined()
  expect(pb.collection).toBeInstanceOf(Function)
})