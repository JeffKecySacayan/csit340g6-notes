import { useState } from 'react'

function NoteCard({ title, body }) {
  // Step 9: Local state to track whether the card body is visible
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div>
      <h3 className="pr-8 text-[22px] font-normal break-words">{title}</h3>
      
      {/* Conditionally render note body based on state */}
      {isExpanded && (
        <p className="mt-3 text-[17px] break-words whitespace-pre-wrap text-[#4d4d4d]">
          {body}
        </p>
      )}

      {/* Toggle button label and state */}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-3 cursor-pointer text-[15px] font-normal text-[#b83f45] underline"
      >
        {isExpanded ? 'Show less' : 'Show more'}
      </button>
    </div>
  )
}

export default NoteCard