import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import demimonde from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof demimonde, 'function')
  },
  async 'calls package without error'() {
    await demimonde()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await demimonde({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T