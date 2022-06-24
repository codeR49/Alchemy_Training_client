import React from 'react'
import { useState } from 'react'
import { faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Passwordtoggle = () => {
    const [visible, setVisibility] = useState(false);

    const Icon =(
        <FontAwesomeIcon icon ={ visible ? faEyeSlash :faEye} onClick = {() =>setVisibility(visibility => !visibility)}/>
    )
    const InputType = visible  ? "text" :"password"

  return [InputType ,Icon]
}

export default Passwordtoggle