export const example = {
  path: '/',
  getComponents(location, callback) {
    require.ensure([], function (require) {
      callback(null, require('@/views/example/example'))
    })
  },
  // childRoutes: [
  //   require('@/views/example/example')
  // ]
}