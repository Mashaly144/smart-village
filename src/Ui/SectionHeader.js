import classes from "./SectionHeader.module.css";
export default function SectionHeader(porps) {
  return <h1 className={classes.header}>{porps.title}</h1>;
}
