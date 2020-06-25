import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { filterLogs, clearFilter } from "../../actions/logActions";

const SearchBar = ({ logs, filterLogs, clearFilter }) => {
  useEffect(() => {
    if (text.current.value !== "") {
      filterLogs(text.current.value);
    } else {
      clearFilter();
    }
    // eslint warning... perhaps use useState here instead...?
    // see: https://stackoverflow.com/questions/58866796/react-hooks-exhaustive-deps-lint-rule
  }, [logs]); // so that filtering occurs whenever updateLog() and deleteLog() are called

  const text = useRef(""); // useRef to bring in value from form

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterLogs(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <div>
      <nav style={{ marginBottom: "30px" }} className="blue">
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input
                ref={text}
                id="search"
                type="search"
                placeholder="Search Logs..."
                onChange={onChange}
              />
              <label className="label-icon" htmlFor="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

SearchBar.propTypes = {
  logs: PropTypes.array, // value is null initially
  filterLogs: PropTypes.func.isRequired,
  clearFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  logs: state.log.logs,
  // `logs` could be called anything; it's just the arbitrary name for the prop pulled in;
  // however, `state.log` maps to `src/reducers/index.js`'s `log`
});

export default connect(mapStateToProps, {
  filterLogs,
  clearFilter,
})(SearchBar);
