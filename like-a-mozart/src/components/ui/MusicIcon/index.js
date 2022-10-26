import { faMusic } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const MusicIcon = (props) => (
  <i className="fa-solid fa-music"> {props.children}</i>
)
  // TODO: Fix FontAwesomeIcons sytle
  // <FontAwesomeIcon 
  //   icon="fa-solid fa-music"
  //   {...props}
  // />

export default MusicIcon