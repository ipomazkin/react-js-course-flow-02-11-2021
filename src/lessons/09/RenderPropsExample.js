import React from 'react';
import PropTypes from 'prop-types';

export function RenderPropsExample(props) {
  const {
    renderHeader,
    renderContent,
    renderFooter,
    header,
  } = props;

  return (
    <div className="page">
      <div className="page__cont">

        <header className="page__header">
          {header}
        </header>

        <main className="page__content">

        </main>

        <footer className="page__footer">
          {renderFooter()}
        </footer>

      </div>
    </div>
  );
}

RenderPropsExample.propTypes = {
  renderHeader: PropTypes.func.isRequired,
  renderContent: PropTypes.func.isRequired,
  renderFooter: PropTypes.func.isRequired,
  header: PropTypes.node.isRequired,
};
