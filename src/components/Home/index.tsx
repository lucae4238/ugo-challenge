import React from "react";
import { SearchFlightsProvider } from "../../Context/SearchFlightsContext";
import Header from "../Header";
import CardForm from "./CardForm";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <SearchFlightsProvider>
      <Header />
      <CardForm />
    </SearchFlightsProvider>
  );
};

export default HomePage;
