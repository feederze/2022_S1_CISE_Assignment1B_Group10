import React from 'react'
import SEPractices from '../dummyData/SEPractices'

const optionItems = SEPractices.map(SEPractice => (
  <option key={SEPractice.practice}>{SEPractice.practice}</option>
))
function Dropdown() {
  return (
    <div>
      <select>{optionItems}</select>
    </div>
  )
}
export default Dropdown
