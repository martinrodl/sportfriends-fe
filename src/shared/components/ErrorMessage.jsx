import React from 'react';

export default function ErrorMessage({ message, apiErrors }) {
  const renderMessage = (message, key = 'error') => (
    <p className="text-[13px] text-error absolute left-0 -bottom-5" key={key}>{`* ${message}`}</p>
  );

  const renderApiErrors = () =>
    apiErrors?.map((apiError, index) => {
      const message = apiError?.message;
      return message ? renderMessage(message, 'apiError' + index) : null;
    });

  return (
    <div>
      {apiErrors && renderApiErrors()}
      {message && renderMessage(message)}
    </div>
  );
}
