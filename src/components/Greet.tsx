type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const {messageCount = 0} = props
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome {props.name}! Kamusta ka na? my ${messageCount} messages ka`
          : 'Welcome guest'}
      </h2>
    </div>
  );
};
