import React from 'react';

const withAuth = (Component) => {
    class WithAuth extends React.Component {
        render() {
            return (
                <Component/>
            );
        }
    }

    return WithAuth;
};

export default withAuth;
