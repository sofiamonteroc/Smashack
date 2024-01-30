import Layout from "../components/layout";
import Location from "../components/location";
import { restaurants } from "../db.json";

const locations = () => {
  return (
    <Layout title={`Locations`} description="Locations - Smashack">
      {restaurants.map((restaurant) => {
        return <Location key={restaurant.id} restaurant={restaurant} />;
      })}
    </Layout>
  );
};

export default locations;
