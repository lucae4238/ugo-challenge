import React from "react";
import { SearchFlightsProvider } from "../../Context/SearchFlightsContext";
import Header from "../Header";
import CardForm from "./CardForm";
import Results from "./Results";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <SearchFlightsProvider>
      <Header />
      <CardForm />
      <Results />
    </SearchFlightsProvider>
  );
};

export default HomePage;
