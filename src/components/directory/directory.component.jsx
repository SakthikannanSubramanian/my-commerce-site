import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { directorySections } from "../../api/directories";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      section: directorySections,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.section.map(({ id, ...otherSectionProps }) => {
          return <MenuItem key={id} {...otherSectionProps} />;
        })}
      </div>
    );
  }
}

export default Directory;
