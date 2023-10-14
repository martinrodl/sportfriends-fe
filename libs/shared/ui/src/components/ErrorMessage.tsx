interface ErrorMessagePropsI {
  message?: string;
  apiErrors?: { message: string }[];
}

export default function ErrorMessage({
  message,
  apiErrors,
}: ErrorMessagePropsI) {
  const renderMessage = (message, key = 'error') => (
    <p className="text-[13px] text-error" key={key}>{`* ${message}`}</p>
  );

  const renderApiErrors = () => {
    if (Array.isArray(apiErrors)) {
      return apiErrors.map((apiError, index) => {
        const message = apiError?.message;
        return message ? renderMessage(message, 'apiError' + index) : null;
      });
    }
  };

  return (
    <div>
      {apiErrors && renderApiErrors()}
      {message && renderMessage(message)}
    </div>
  );
}
