import React from "react";
import { connect } from "react-redux";
import { deleteTech } from "../../actions/techActions";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";

const TechItem = ({ tech, deleteTech }) => {
  const onDelete = () => {
    deleteTech(tech.id);
    M.toast({ html: "Technician deleted" });
  };

  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

// const mapStateToProps = (state) => ({
//   tech: state.tech,
//   // `tech` could be called anything; it's just the arbitrary name for the state prop pulled in;
//   // however, `state.tech` maps to `src/reducers/index.js`'s `tech`
// });

export default connect(null, { deleteTech })(TechItem);
