/* yarn example/ */
import demimonde from '../src'

(async () => {
  const res = await demimonde({
    text: 'example',
  })
  console.log(res)
})()