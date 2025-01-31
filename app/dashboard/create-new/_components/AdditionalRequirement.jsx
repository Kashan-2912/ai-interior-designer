import React from 'react'
import {Textarea} from '../../../../components/ui/textarea'

function AdditionalRequirement({additionalReqInput}) {
  return (
    <div className='mt-5'>
        <label className='text-gray-400'>
            Enter Additional Requirements (Optional)
        </label>
        <Textarea className='mt-2' onChange={(e) => additionalReqInput(e.target.value)}/>
    </div>
  )
}

export default AdditionalRequirement