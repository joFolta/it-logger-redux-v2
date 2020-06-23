import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTechs } from "../../actions/techActions";
import PropTypes from "prop-types";

const TechSelectOptions = ({ tech: { techs, loading }, getTechs }) => {
  // useEffect b/c we need to load techs when component loads
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []); // empty array so it runs when component mounts

  return (
    !loading &&
    techs !== null &&
    techs.map((t) => (
      <option key={t._id} value={`${t.firstName} ${t.lastName}`}>
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};

TechSelectOptions.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapsStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapsStateToProps, { getTechs })(TechSelectOptions);
