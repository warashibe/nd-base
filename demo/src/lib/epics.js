import R from "ramdam"
import { addEpic } from "nd-core"
import * as nd from "../../.nextdapp"
import * as custom from "./custom"
const predefined = R.mapObjIndexed((v, k, o) => addEpic(k, v))(nd)
const custom_epics = R.mapObjIndexed((v, k, o) => addEpic(k, v))(custom)
export default R.mergeLeft(custom_epics, predefined)
