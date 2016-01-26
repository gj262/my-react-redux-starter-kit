import createReducer from 'utils/createReducer'

// Dispatch Action Types

const TOGGLE = 'TOGGLE'
const ASSIGN = 'ASSIGN'

// Primitive Actions

const toggle = () => ({ type: TOGGLE })
const assign = (enabled) => ({ type: ASSIGN, payload: [enabled] })

export const actions = {
  toggle,
  assign
}

// Reducer

export default createReducer(
  // initial state
  {
    enabled: true
  },
  // reducers
  {
    [TOGGLE]: (state) => {
      return Object.assign({}, state, { enabled: !state.enabled })
    },
    [ASSIGN]: (state, [enabled]) => {
      return Object.assign({}, state, { enabled: enabled })
    }
  }
)
