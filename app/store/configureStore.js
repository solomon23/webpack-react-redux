import prod from './configureStore.prod'
import dev from './configureStore.dev'

module.exports = (process.env.NODE_ENV === 'production') ? prod : dev
