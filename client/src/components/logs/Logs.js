import React, { useEffect } from "react";
import { connect } from "react-redux";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import PropTypes from "prop-types";
import { getLogs } from "../../actions/logActions";

const Logs = ({ logs, loading, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []); // pass in empty array, so it only runs once; no dependencies

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header center">
        <h4
          style={{
            backgroundImage: "url(/img/redux.png)",
            backgroundSize: "42px 42px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "calc(50% - 110px)",
          }}
        >
          System Logs
        </h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show...</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log._id} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  logs: PropTypes.array, // value is null initially
  loading: PropTypes.bool.isRequired,
  getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  logs: state.log.logs,
  loading: state.log.loading,
  // `logs` and `loading` could be called anything; it's just the arbitrary name for the prop pulled in;
  // however, `state.log` maps to `src/reducers/index.js`'s `log`
});

export default connect(mapStateToProps, { getLogs })(Logs);
