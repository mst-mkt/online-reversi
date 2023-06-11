export const MenuIcon = (props: { size: number; fill: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      height={props.size}
      width={props.size}
      strokeWidth="2"
      stroke={props.fill}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 6l16 0" />
      <path d="M4 12l16 0" />
      <path d="M4 18l16 0" />
    </svg>
  );
};
