import HomeLanding from "../components/HomeLanding";
import News from "../components/News";
import Services from "../components/Services";
import HighRate from "../components/HighRate";
import Workers from "../components/Workers";
import Location from "../components/Location";
import { useSelector } from "react-redux";

export default function HomePage() {
  const data = useSelector((state) => state.data);
  console.log(data.news);
  return (
    <>
      <HomeLanding />
      <News news={[...data.news]} />
      <Services />
      <HighRate />
      <Workers />
      <Location />
    </>
  );
}
