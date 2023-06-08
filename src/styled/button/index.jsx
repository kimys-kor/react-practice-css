// React.HTMLProps<HTMLInputElement>
// type CommonInputProps = Omit<React.HTMLProps<HTMLInputElement>, "classID">

/*
type CommonButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
 */

const ButtonInterface = (props) => {
  const { children, onClick, className, ...restProps } = props;

  return (
    <button
      {...restProps}
      onClick={(event) => {
        event.preventDefault();
        onClick && onClick(event);
      }}
      className={`px-4 py-2 rounded duration-150 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
};

export const SuccessButton = (props) => {
  const { className, children, ...restProps } = props;

  return (
    <ButtonInterface
      {...restProps}
      className={`bg-success text-success-content active:bg-success-active ${className}`}
    >
      {children}
    </ButtonInterface>
  );
};

export const InfoButton = (props) => {
  const { className, children, ...restProps } = props;

  return (
    <ButtonInterface
      {...restProps}
      className={`bg-info text-info-content active:bg-info-active ${className}`}
    >
      {children}
    </ButtonInterface>
  );
};
