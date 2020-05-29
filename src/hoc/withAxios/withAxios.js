import React, { useState, useEffect } from "react";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    function hideModal() {
      setError(false);
    }

    const requestInterceptor = axios.interceptors.request.use((request) => {
      setError(false);
      setLoading(true);
      return request;
    });
    const responseInterceptor = axios.interceptors.response.use(
      (response) => {
        setLoading(false);
        return response;
      },
      (error) => {
        setLoading(false);
        setError(error);
        return Promise.reject(error);
      }
    );

    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(requestInterceptor);
        axios.interceptors.response.eject(responseInterceptor);
      };
    }, [requestInterceptor, responseInterceptor]);

    return (
      <>
        <Modal show={error} hideCallback={hideModal}>
          {error ? error.message : "Unknown error"}
        </Modal>
        <WrappedComponent loading={loading} {...props} />
      </>
    );
  };
};

export default withErrorHandler;
