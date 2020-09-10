import React from 'react';

// now it a function
const withClass = (WrappedComponent, className) => {
  return props => (
    <div
      className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClass;