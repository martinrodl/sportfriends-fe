interface NotFoundProps {
  userName: string;
}

const NotFound = ({ userName }: NotFoundProps) => {
  return (
    <div>
      <h1>{userName} was not found</h1>
    </div>
  );
};
export default NotFound;
