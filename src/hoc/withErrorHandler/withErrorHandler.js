import React, { useState, useEffect } from "react";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, setError] = useState(null);

    function hideModal() {
      setError(false);
    }

    useEffect(() => {
      const requestInterceptor = axios.interceptors.request.use((request) => {
        setError(false);
        return request;
      });
      const responseInterceptor = axios.interceptors.response.use(
        (response) => response,
        (error) => setError(error)
      );

      return () => {
        axios.interceptors.request.detach(requestInterceptor);
        axios.interceptors.response.detach(responseInterceptor);
      };
    }, []);

    return (
      <>
        <Modal show={error} hideCallback={hideModal}>
          {error ? error.message : "Unknown error"}
        </Modal>
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default withErrorHandler;
