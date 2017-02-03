import prod from './Root.prod'
import dev from './Root.dev'

module.exports = (process.env.NODE_ENV === 'production') ? prod : dev
