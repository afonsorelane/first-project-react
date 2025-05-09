import { type PropsTypes } from "../types/footer.ts";

export const Footer = (props: PropsTypes) => {
  return (
    <div>
      &copy;{new Date().getFullYear()} made by {props.name}
    </div>
  );
};
