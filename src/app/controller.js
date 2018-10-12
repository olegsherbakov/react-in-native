export default class AppController {
  _store = null

  constructor(store) {
    this._store = store
  }

  // interface hooks
  create = () => this._action({ type: `CREATE` })

  edit = (id, payload) => this._action({ type: `EDIT`, id, payload })

  shuffle = () => this._action({ type: `SHUFFLE` })

  remove = id => this._action({ type: `DELETE`, id })

  get _action() {
    return this._store.dispatch
  }
}
