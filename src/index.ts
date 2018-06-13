import { IncomingMessage, ServerResponse } from 'http'
import {
  json,
  send,
} from 'micro'
import { post, router } from 'microrouter'

import atP = require('urbit-ob')

const PORT = process.env.PORT || 3000

const toObFns: { [_: string]: (arg: any) => any } = {
  galaxy: atP.toGalaxyName,
  star: atP.toStarName,
  planet: atP.toPlanetName,
}

const isAddress = async (req: IncomingMessage, res: ServerResponse) => {
  const { id } = await json(req)
  send(res, 200, { res: atP.isShip(id) })
}

const convertHandler = (
  fn: (num: number) => string,
) => async (req: IncomingMessage, res: ServerResponse) => {
  const { ids } = await json(req)
  send(res, 200, { ids: ids.map(fn) })
}

const root = router(
  post('/isAddress', isAddress),
  ...Object.keys(toObFns)
    .map((k) =>
      post(`/to/${k}`, convertHandler(toObFns[k])),
    ),
)

export default root
