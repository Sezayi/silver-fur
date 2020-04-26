import React from "react"
import loadable from '@loadable/component'


const Fur = loadable(() => import('../components/fur'))

// function LoadableFur() {
//   return (
//     <div>
//       <Fur />
//     </div>
//   )
// }

export default Fur

