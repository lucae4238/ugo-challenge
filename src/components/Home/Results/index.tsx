import React, { useContext } from "react";
import { SearchFlightsContext } from "../../../Context/SearchFlightsContext";
import FlightCard from "../../Commons/FlightCard";
import Filters from "./Filters";
import ErrorScreen from "./Screens/ErrorScreen";
import LoadingScreen from "./Screens/LoadingScreen";
import StartScreen from "./Screens/StartScreen";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ResultsProps {}

export const Results: React.FC<ResultsProps> = () => {
  const { filteredFlights, isLoadingFlights, error } = useContext(SearchFlightsContext);
  if (error) return <ErrorScreen />;
  if (isLoadingFlights) return <LoadingScreen />;
  if (filteredFlights.length === 0 && !isLoadingFlights && !error) {
    return <StartScreen />;
  }
  return (
    <div className="container mt-5">
      <Filters />
      <div className=" d-flex mt-3 flex-wrap justify-content-between">
        {filteredFlights.map((flight) => (
          <React.Fragment key={flight.id}>
            <FlightCard flight={flight} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Results;
// const test: FormatedFlight[] = [
//   {
//     id: "3b92ec4eeee9d070msr:AS3398~13-AS42~13",
//     departureTime: "09:40",
//     arrivalTime: "07:54",
//     duration: "19h 14m",
//     departureAirportCode: "LAX",
//     arrivalAirportCode: "JFK",
//     airlineCodes: ["AS"],
//     stopoverAirportCodes: ["SFO"],
//     allianceCodes: [""],
//     stopoversCount: 1,
//     departureTimeMinutes: 580,
//     arrivalTimeMinutes: 474,
//     departureDateTime: "2023-03-13T09:40:00.000-07:00",
//     arrivalDateTime: "2023-03-14T07:54:00.000-04:00",
//     stopoverDurationMinutes: 746,
//     durationMinutes: 1154,
//     overnight: true,
//     stopoverDuration: "12h 26m",
//     durationDays: 1,
//     longStopover: true,
//     segments: [
//       {
//         durationMinutes: 84,
//         stopoverDurationMinutes: 746,
//         departureAirportCode: "LAX",
//         arrivalAirportCode: "SFO",
//         airlineCode: "AS",
//         operatingAirlineCode: "OO",
//         cabin: "economy",
//         designatorCode: "AS3398",
//         departureDateTime: "2023-03-13T09:40:00.000-07:00",
//         arrivalDateTime: "2023-03-13T11:04:00.000-07:00"
//       },
//       {
//         durationMinutes: 324,
//         stopoverDurationMinutes: 0,
//         departureAirportCode: "SFO",
//         arrivalAirportCode: "JFK",
//         airlineCode: "AS",
//         cabin: "economy",
//         designatorCode: "AS42",
//         departureDateTime: "2023-03-13T23:30:00.000-07:00",
//         arrivalDateTime: "2023-03-14T07:54:00.000-04:00"
//       }
//     ],
//     operatingAirlineCodes: ["OO"],
//     stopoverCode: "ONE_STOP",
//     shortStopover: false,
//     earlyDeparture: false,
//     lateArrival: false,
//     newAircraft: false,
//     oldAircraft: true,
//     highlyRatedCarrier: false,
//     score: 754.73,
//     legId: "LAX-JFK:AS3398~13:AS42~13:0",
//     code: "AS3398~13-AS42~13",
//     arrivalAirport: {
//       name: "New York John F. Kennedy International Airport",
//       code: "JFK",
//       cityCode: "NYC"
//     },
//     departureAirport: {
//       name: "Los Angeles International Airport",
//       code: "LAX",
//       cityCode: "LAX"
//     },
//     price: 422,
//     airline: {
//       name: "Alaska Airlines",
//       code: "AS"
//     },
//     date: "2023-03-13",
//     arrivalCity: "New York City"
//   },
//   {
//     id: "3b92ec4eeee9d070msr:UA1394~13-UA1949~14-DL4762~14",
//     departureTime: "23:15",
//     arrivalTime: "20:29",
//     duration: "18h 14m",
//     departureAirportCode: "LAX",
//     arrivalAirportCode: "JFK",
//     airlineCodes: ["UA", "DL"],
//     stopoverAirportCodes: ["IAD", "CHS"],
//     allianceCodes: ["sky_team", "star_alliance"],
//     stopoversCount: 2,
//     departureTimeMinutes: 1395,
//     arrivalTimeMinutes: 1229,
//     departureDateTime: "2023-03-13T23:15:00.000-07:00",
//     arrivalDateTime: "2023-03-14T20:29:00.000-04:00",
//     stopoverDurationMinutes: 585,
//     durationMinutes: 1094,
//     overnight: true,
//     stopoverDuration: "09h 45m",
//     durationDays: 1,
//     longStopover: true,
//     segments: [
//       {
//         durationMinutes: 277,
//         stopoverDurationMinutes: 83,
//         departureAirportCode: "LAX",
//         arrivalAirportCode: "IAD",
//         airlineCode: "UA",
//         cabin: "economy",
//         designatorCode: "UA1394",
//         departureDateTime: "2023-03-13T23:15:00.000-07:00",
//         arrivalDateTime: "2023-03-14T06:52:00.000-04:00"
//       },
//       {
//         durationMinutes: 103,
//         stopoverDurationMinutes: 502,
//         departureAirportCode: "IAD",
//         arrivalAirportCode: "CHS",
//         airlineCode: "UA",
//         cabin: "economy",
//         designatorCode: "UA1949",
//         departureDateTime: "2023-03-14T08:15:00.000-04:00",
//         arrivalDateTime: "2023-03-14T09:58:00.000-04:00"
//       },
//       {
//         durationMinutes: 129,
//         stopoverDurationMinutes: 0,
//         departureAirportCode: "CHS",
//         arrivalAirportCode: "JFK",
//         airlineCode: "DL",
//         operatingAirlineCode: "9E",
//         cabin: "economy",
//         designatorCode: "DL4762",
//         departureDateTime: "2023-03-14T18:20:00.000-04:00",
//         arrivalDateTime: "2023-03-14T20:29:00.000-04:00"
//       }
//     ],
//     operatingAirlineCodes: ["9E"],
//     stopoverCode: "MORE_THAN_ONE_STOP",
//     shortStopover: false,
//     earlyDeparture: false,
//     lateArrival: false,
//     newAircraft: false,
//     oldAircraft: true,
//     highlyRatedCarrier: false,
//     score: 693.23,
//     legId: "LAX-JFK:UA1394~13:UA1949~14:DL4762~14:0",
//     code: "UA1394~13-UA1949~14-DL4762~14",
//     arrivalAirport: {
//       name: "New York John F. Kennedy International Airport",
//       code: "JFK",
//       cityCode: "NYC"
//     },
//     departureAirport: {
//       name: "Los Angeles International Airport",
//       code: "LAX",
//       cityCode: "LAX"
//     },
//     price: 237,
//     airline: {
//       name: "United Airlines",
//       code: "UA"
//     },
//     date: "2023-03-13",
//     arrivalCity: "New York City"
//   },
//   {
//     id: "3b92ec4eeee9d070msr:DL527~13-DL1443~13",
//     departureTime: "08:00",
//     arrivalTime: "21:13",
//     duration: "10h 13m",
//     departureAirportCode: "LAX",
//     arrivalAirportCode: "JFK",
//     airlineCodes: ["DL"],
//     stopoverAirportCodes: ["ATL"],
//     allianceCodes: ["sky_team"],
//     stopoversCount: 1,
//     departureTimeMinutes: 480,
//     arrivalTimeMinutes: 1273,
//     departureDateTime: "2023-03-13T08:00:00.000-07:00",
//     arrivalDateTime: "2023-03-13T21:13:00.000-04:00",
//     stopoverDurationMinutes: 242,
//     durationMinutes: 613,
//     overnight: false,
//     stopoverDuration: "04h 02m",
//     durationDays: 0,
//     longStopover: true,
//     segments: [
//       {
//         durationMinutes: 233,
//         stopoverDurationMinutes: 242,
//         departureAirportCode: "LAX",
//         arrivalAirportCode: "ATL",
//         airlineCode: "DL",
//         cabin: "economy",
//         designatorCode: "DL527",
//         departureDateTime: "2023-03-13T08:00:00.000-07:00",
//         arrivalDateTime: "2023-03-13T14:53:00.000-04:00"
//       },
//       {
//         durationMinutes: 138,
//         stopoverDurationMinutes: 0,
//         departureAirportCode: "ATL",
//         arrivalAirportCode: "JFK",
//         airlineCode: "DL",
//         cabin: "economy",
//         designatorCode: "DL1443",
//         departureDateTime: "2023-03-13T18:55:00.000-04:00",
//         arrivalDateTime: "2023-03-13T21:13:00.000-04:00"
//       }
//     ],
//     operatingAirlineCodes: [],
//     stopoverCode: "ONE_STOP",
//     shortStopover: false,
//     earlyDeparture: false,
//     lateArrival: false,
//     newAircraft: false,
//     oldAircraft: true,
//     highlyRatedCarrier: false,
//     score: 874.8,
//     legId: "LAX-JFK:DL527~13:DL1443~13:0",
//     code: "DL527~13-DL1443~13",
//     arrivalAirport: {
//       name: "New York John F. Kennedy International Airport",
//       code: "JFK",
//       cityCode: "NYC"
//     },
//     departureAirport: {
//       name: "Los Angeles International Airport",
//       code: "LAX",
//       cityCode: "LAX"
//     },
//     price: 399,
//     airline: {
//       name: "Delta Air Lines",
//       code: "DL"
//     },
//     date: "2023-03-13",
//     arrivalCity: "New York City"
//   },
//   {
//     id: "3b92ec4eeee9d070msr:B6536~13-B62416~13",
//     departureTime: "18:26",
//     arrivalTime: "05:06",
//     duration: "07h 40m",
//     departureAirportCode: "LAX",
//     arrivalAirportCode: "JFK",
//     airlineCodes: ["B6"],
//     stopoverAirportCodes: ["SFO"],
//     allianceCodes: ["lcc"],
//     stopoversCount: 1,
//     departureTimeMinutes: 1106,
//     arrivalTimeMinutes: 306,
//     departureDateTime: "2023-03-13T18:26:00.000-07:00",
//     arrivalDateTime: "2023-03-14T05:06:00.000-04:00",
//     stopoverDurationMinutes: 51,
//     durationMinutes: 460,
//     overnight: true,
//     stopoverDuration: "51m",
//     durationDays: 1,
//     longStopover: false,
//     segments: [
//       {
//         durationMinutes: 88,
//         stopoverDurationMinutes: 51,
//         departureAirportCode: "LAX",
//         arrivalAirportCode: "SFO",
//         airlineCode: "B6",
//         cabin: "economy",
//         designatorCode: "B6536",
//         departureDateTime: "2023-03-13T18:26:00.000-07:00",
//         arrivalDateTime: "2023-03-13T19:54:00.000-07:00"
//       },
//       {
//         durationMinutes: 321,
//         stopoverDurationMinutes: 0,
//         departureAirportCode: "SFO",
//         arrivalAirportCode: "JFK",
//         airlineCode: "B6",
//         cabin: "economy",
//         designatorCode: "B62416",
//         departureDateTime: "2023-03-13T20:45:00.000-07:00",
//         arrivalDateTime: "2023-03-14T05:06:00.000-04:00"
//       }
//     ],
//     operatingAirlineCodes: [],
//     stopoverCode: "ONE_STOP",
//     shortStopover: true,
//     earlyDeparture: false,
//     lateArrival: false,
//     newAircraft: false,
//     oldAircraft: true,
//     highlyRatedCarrier: false,
//     score: 869.33,
//     legId: "LAX-JFK:B6536~13:B62416~13:0",
//     code: "B6536~13-B62416~13",
//     arrivalAirport: {
//       name: "New York John F. Kennedy International Airport",
//       code: "JFK",
//       cityCode: "NYC"
//     },
//     departureAirport: {
//       name: "Los Angeles International Airport",
//       code: "LAX",
//       cityCode: "LAX"
//     },
//     price: 375.2,
//     airline: {
//       name: "JetBlue Airways",
//       code: "B6"
//     },
//     date: "2023-03-13",
//     arrivalCity: "New York City"
//   },
//   {
//     id: "3b92ec4eeee9d070msr:AA313~13-AA972~13",
//     departureTime: "12:44",
//     arrivalTime: "23:00",
//     duration: "07h 16m",
//     departureAirportCode: "LAX",
//     arrivalAirportCode: "JFK",
//     airlineCodes: ["AA"],
//     stopoverAirportCodes: ["PHX"],
//     allianceCodes: ["oneworld"],
//     stopoversCount: 1,
//     departureTimeMinutes: 764,
//     arrivalTimeMinutes: 1380,
//     departureDateTime: "2023-03-13T12:44:00.000-07:00",
//     arrivalDateTime: "2023-03-13T23:00:00.000-04:00",
//     stopoverDurationMinutes: 65,
//     durationMinutes: 436,
//     overnight: false,
//     stopoverDuration: "01h 05m",
//     durationDays: 0,
//     longStopover: false,
//     segments: [
//       {
//         durationMinutes: 86,
//         stopoverDurationMinutes: 65,
//         departureAirportCode: "LAX",
//         arrivalAirportCode: "PHX",
//         airlineCode: "AA",
//         cabin: "economy",
//         designatorCode: "AA313",
//         departureDateTime: "2023-03-13T12:44:00.000-07:00",
//         arrivalDateTime: "2023-03-13T14:10:00.000-07:00"
//       },
//       {
//         durationMinutes: 285,
//         stopoverDurationMinutes: 0,
//         departureAirportCode: "PHX",
//         arrivalAirportCode: "JFK",
//         airlineCode: "AA",
//         cabin: "economy",
//         designatorCode: "AA972",
//         departureDateTime: "2023-03-13T15:15:00.000-07:00",
//         arrivalDateTime: "2023-03-13T23:00:00.000-04:00"
//       }
//     ],
//     operatingAirlineCodes: [],
//     stopoverCode: "ONE_STOP",
//     shortStopover: false,
//     earlyDeparture: false,
//     lateArrival: true,
//     newAircraft: false,
//     oldAircraft: true,
//     highlyRatedCarrier: false,
//     score: 867.77,
//     legId: "LAX-JFK:AA313~13:AA972~13:0",
//     code: "AA313~13-AA972~13",
//     arrivalAirport: {
//       name: "New York John F. Kennedy International Airport",
//       code: "JFK",
//       cityCode: "NYC"
//     },
//     departureAirport: {
//       name: "Los Angeles International Airport",
//       code: "LAX",
//       cityCode: "LAX"
//     },
//     price: 279.17,
//     airline: {
//       name: "American Airlines",
//       code: "AA"
//     },
//     date: "2023-03-13",
//     arrivalCity: "New York City"
//   },
//   {
//     id: "3b92ec4eeee9d070msr:QF718~13",
//     departureTime: "06:30",
//     arrivalTime: "14:52",
//     duration: "05h 22m",
//     departureAirportCode: "LAX",
//     arrivalAirportCode: "JFK",
//     airlineCodes: ["QF"],
//     stopoverAirportCodes: [],
//     allianceCodes: ["oneworld"],
//     stopoversCount: 0,
//     departureTimeMinutes: 390,
//     arrivalTimeMinutes: 892,
//     departureDateTime: "2023-03-13T06:30:00.000-07:00",
//     arrivalDateTime: "2023-03-13T14:52:00.000-04:00",
//     stopoverDurationMinutes: 0,
//     durationMinutes: 322,
//     overnight: false,
//     stopoverDuration: "00h",
//     durationDays: 0,
//     longStopover: false,
//     segments: [
//       {
//         durationMinutes: 322,
//         stopoverDurationMinutes: 0,
//         departureAirportCode: "LAX",
//         arrivalAirportCode: "JFK",
//         airlineCode: "QF",
//         cabin: "economy",
//         designatorCode: "QF718",
//         departureDateTime: "2023-03-13T06:30:00.000-07:00",
//         arrivalDateTime: "2023-03-13T14:52:00.000-04:00"
//       }
//     ],
//     operatingAirlineCodes: [],
//     stopoverCode: "DIRECT",
//     shortStopover: true,
//     earlyDeparture: false,
//     lateArrival: false,
//     newAircraft: false,
//     oldAircraft: true,
//     highlyRatedCarrier: false,
//     score: 994.53,
//     legId: "LAX-JFK:QF718~13:0",
//     code: "QF718~13",
//     arrivalAirport: {
//       name: "New York John F. Kennedy International Airport",
//       code: "JFK",
//       cityCode: "NYC"
//     },
//     departureAirport: {
//       name: "Los Angeles International Airport",
//       code: "LAX",
//       cityCode: "LAX"
//     },
//     price: 403.8514,
//     airline: {
//       name: "Qantas",
//       code: "QF"
//     },
//     date: "2023-03-13",
//     arrivalCity: "New York City"
//   },
//   {
//     id: "3b92ec4eeee9d070msr:B6132~13-B62584~14",
//     departureTime: "12:07",
//     arrivalTime: "12:59",
//     duration: "21h 52m",
//     departureAirportCode: "LAX",
//     arrivalAirportCode: "JFK",
//     airlineCodes: ["B6"],
//     stopoverAirportCodes: ["MCO"],
//     allianceCodes: ["lcc"],
//     stopoversCount: 1,
//     departureTimeMinutes: 727,
//     arrivalTimeMinutes: 779,
//     departureDateTime: "2023-03-13T12:07:00.000-07:00",
//     arrivalDateTime: "2023-03-14T12:59:00.000-04:00",
//     stopoverDurationMinutes: 873,
//     durationMinutes: 1312,
//     overnight: true,
//     stopoverDuration: "14h 33m",
//     durationDays: 1,
//     longStopover: true,
//     segments: [
//       {
//         durationMinutes: 285,
//         stopoverDurationMinutes: 873,
//         departureAirportCode: "LAX",
//         arrivalAirportCode: "MCO",
//         airlineCode: "B6",
//         cabin: "economy",
//         designatorCode: "B6132",
//         departureDateTime: "2023-03-13T12:07:00.000-07:00",
//         arrivalDateTime: "2023-03-13T19:52:00.000-04:00"
//       },
//       {
//         durationMinutes: 154,
//         stopoverDurationMinutes: 0,
//         departureAirportCode: "MCO",
//         arrivalAirportCode: "JFK",
//         airlineCode: "B6",
//         cabin: "economy",
//         designatorCode: "B62584",
//         departureDateTime: "2023-03-14T10:25:00.000-04:00",
//         arrivalDateTime: "2023-03-14T12:59:00.000-04:00"
//       }
//     ],
//     operatingAirlineCodes: [],
//     stopoverCode: "ONE_STOP",
//     shortStopover: false,
//     earlyDeparture: false,
//     lateArrival: false,
//     newAircraft: false,
//     oldAircraft: true,
//     highlyRatedCarrier: false,
//     score: 723.03,
//     legId: "LAX-JFK:B6132~13:B62584~14:0",
//     code: "B6132~13-B62584~14",
//     arrivalAirport: {
//       name: "New York John F. Kennedy International Airport",
//       code: "JFK",
//       cityCode: "NYC"
//     },
//     departureAirport: {
//       name: "Los Angeles International Airport",
//       code: "LAX",
//       cityCode: "LAX"
//     },
//     price: 388.81,
//     airline: {
//       name: "JetBlue Airways",
//       code: "B6"
//     },
//     date: "2023-03-13",
//     arrivalCity: "New York City"
//   },
//   {
//     id: "3b92ec4eeee9d070msr:DL834~13-DL1528~13",
//     departureTime: "10:29",
//     arrivalTime: "23:54",
//     duration: "10h 25m",
//     departureAirportCode: "LAX",
//     arrivalAirportCode: "JFK",
//     airlineCodes: ["DL"],
//     stopoverAirportCodes: ["ATL"],
//     allianceCodes: ["sky_team"],
//     stopoversCount: 1,
//     departureTimeMinutes: 629,
//     arrivalTimeMinutes: 1434,
//     departureDateTime: "2023-03-13T10:29:00.000-07:00",
//     arrivalDateTime: "2023-03-13T23:54:00.000-04:00",
//     stopoverDurationMinutes: 234,
//     durationMinutes: 625,
//     overnight: false,
//     stopoverDuration: "03h 54m",
//     durationDays: 0,
//     longStopover: false,
//     segments: [
//       {
//         durationMinutes: 252,
//         stopoverDurationMinutes: 234,
//         departureAirportCode: "LAX",
//         arrivalAirportCode: "ATL",
//         airlineCode: "DL",
//         cabin: "economy",
//         designatorCode: "DL834",
//         departureDateTime: "2023-03-13T10:29:00.000-07:00",
//         arrivalDateTime: "2023-03-13T17:41:00.000-04:00"
//       },
//       {
//         durationMinutes: 139,
//         stopoverDurationMinutes: 0,
//         departureAirportCode: "ATL",
//         arrivalAirportCode: "JFK",
//         airlineCode: "DL",
//         cabin: "economy",
//         designatorCode: "DL1528",
//         departureDateTime: "2023-03-13T21:35:00.000-04:00",
//         arrivalDateTime: "2023-03-13T23:54:00.000-04:00"
//       }
//     ],
//     operatingAirlineCodes: [],
//     stopoverCode: "ONE_STOP",
//     shortStopover: false,
//     earlyDeparture: false,
//     lateArrival: true,
//     newAircraft: false,
//     oldAircraft: true,
//     highlyRatedCarrier: false,
//     score: 864.33,
//     legId: "LAX-JFK:DL834~13:DL1528~13:0",
//     code: "DL834~13-DL1528~13",
//     arrivalAirport: {
//       name: "New York John F. Kennedy International Airport",
//       code: "JFK",
//       cityCode: "NYC"
//     },
//     departureAirport: {
//       name: "Los Angeles International Airport",
//       code: "LAX",
//       cityCode: "LAX"
//     },
//     price: 817.38,
//     airline: {
//       name: "Delta Air Lines",
//       code: "DL"
//     },
//     date: "2023-03-13",
//     arrivalCity: "New York City"
//   },
//   {
//     id: "3b92ec4eeee9d070msr:KE638~13",
//     departureTime: "06:15",
//     arrivalTime: "14:29",
//     duration: "05h 14m",
//     departureAirportCode: "LAX",
//     arrivalAirportCode: "JFK",
//     airlineCodes: ["KE"],
//     stopoverAirportCodes: [],
//     allianceCodes: ["sky_team"],
//     stopoversCount: 0,
//     departureTimeMinutes: 375,
//     arrivalTimeMinutes: 869,
//     departureDateTime: "2023-03-13T06:15:00.000-07:00",
//     arrivalDateTime: "2023-03-13T14:29:00.000-04:00",
//     stopoverDurationMinutes: 0,
//     durationMinutes: 314,
//     overnight: false,
//     stopoverDuration: "00h",
//     durationDays: 0,
//     longStopover: false,
//     segments: [
//       {
//         durationMinutes: 314,
//         stopoverDurationMinutes: 0,
//         departureAirportCode: "LAX",
//         arrivalAirportCode: "JFK",
//         airlineCode: "KE",
//         cabin: "economy",
//         designatorCode: "KE638",
//         departureDateTime: "2023-03-13T06:15:00.000-07:00",
//         arrivalDateTime: "2023-03-13T14:29:00.000-04:00"
//       }
//     ],
//     operatingAirlineCodes: [],
//     stopoverCode: "DIRECT",
//     shortStopover: true,
//     earlyDeparture: false,
//     lateArrival: false,
//     newAircraft: false,
//     oldAircraft: true,
//     highlyRatedCarrier: false,
//     score: 995.07,
//     legId: "LAX-JFK:KE638~13:0",
//     code: "KE638~13",
//     arrivalAirport: {
//       name: "New York John F. Kennedy International Airport",
//       code: "JFK",
//       cityCode: "NYC"
//     },
//     departureAirport: {
//       name: "Los Angeles International Airport",
//       code: "LAX",
//       cityCode: "LAX"
//     },
//     price: 359.9914,
//     airline: {
//       name: "Korean Air",
//       code: "KE"
//     },
//     date: "2023-03-13",
//     arrivalCity: "New York City"
//   },
//   {
//     id: "3b92ec4eeee9d070msr:AS1055~13-AS16~14",
//     departureTime: "16:55",
//     arrivalTime: "22:15",
//     duration: "26h 20m",
//     departureAirportCode: "LAX",
//     arrivalAirportCode: "JFK",
//     airlineCodes: ["AS"],
//     stopoverAirportCodes: ["SEA"],
//     allianceCodes: [""],
//     stopoversCount: 1,
//     departureTimeMinutes: 1015,
//     arrivalTimeMinutes: 1335,
//     departureDateTime: "2023-03-13T16:55:00.000-07:00",
//     arrivalDateTime: "2023-03-14T22:15:00.000-04:00",
//     stopoverDurationMinutes: 1095,
//     durationMinutes: 1580,
//     overnight: true,
//     stopoverDuration: "18h 15m",
//     durationDays: 1,
//     longStopover: true,
//     segments: [
//       {
//         durationMinutes: 175,
//         stopoverDurationMinutes: 1095,
//         departureAirportCode: "LAX",
//         arrivalAirportCode: "SEA",
//         airlineCode: "AS",
//         cabin: "economy",
//         designatorCode: "AS1055",
//         departureDateTime: "2023-03-13T16:55:00.000-07:00",
//         arrivalDateTime: "2023-03-13T19:50:00.000-07:00"
//       },
//       {
//         durationMinutes: 310,
//         stopoverDurationMinutes: 0,
//         departureAirportCode: "SEA",
//         arrivalAirportCode: "JFK",
//         airlineCode: "AS",
//         cabin: "economy",
//         designatorCode: "AS16",
//         departureDateTime: "2023-03-14T14:05:00.000-07:00",
//         arrivalDateTime: "2023-03-14T22:15:00.000-04:00"
//       }
//     ],
//     operatingAirlineCodes: [],
//     stopoverCode: "ONE_STOP",
//     shortStopover: false,
//     earlyDeparture: false,
//     lateArrival: false,
//     newAircraft: false,
//     oldAircraft: true,
//     highlyRatedCarrier: false,
//     score: 658.17,
//     legId: "LAX-JFK:AS1055~13:AS16~14:0",
//     code: "AS1055~13-AS16~14",
//     arrivalAirport: {
//       name: "New York John F. Kennedy International Airport",
//       code: "JFK",
//       cityCode: "NYC"
//     },
//     departureAirport: {
//       name: "Los Angeles International Airport",
//       code: "LAX",
//       cityCode: "LAX"
//     },
//     price: 435.81,
//     airline: {
//       name: "Alaska Airlines",
//       code: "AS"
//     },
//     date: "2023-03-13",
//     arrivalCity: "New York City"
//   },
//   {
//     id: "3b92ec4eeee9d070msr:AA4034~13",
//     departureTime: "15:10",
//     arrivalTime: "23:32",
//     duration: "05h 22m",
//     departureAirportCode: "LAX",
//     arrivalAirportCode: "JFK",
//     airlineCodes: ["AA"],
//     stopoverAirportCodes: [],
//     allianceCodes: ["oneworld"],
//     stopoversCount: 0,
//     departureTimeMinutes: 910,
//     arrivalTimeMinutes: 1412,
//     departureDateTime: "2023-03-13T15:10:00.000-07:00",
//     arrivalDateTime: "2023-03-13T23:32:00.000-04:00",
//     stopoverDurationMinutes: 0,
//     durationMinutes: 322,
//     overnight: false,
//     stopoverDuration: "00h",
//     durationDays: 0,
//     longStopover: false,
//     segments: [
//       {
//         durationMinutes: 322,
//         stopoverDurationMinutes: 0,
//         departureAirportCode: "LAX",
//         arrivalAirportCode: "JFK",
//         airlineCode: "AA",
//         cabin: "economy",
//         designatorCode: "AA4034",
//         departureDateTime: "2023-03-13T15:10:00.000-07:00",
//         arrivalDateTime: "2023-03-13T23:32:00.000-04:00"
//       }
//     ],
//     operatingAirlineCodes: [],
//     stopoverCode: "DIRECT",
//     shortStopover: true,
//     earlyDeparture: false,
//     lateArrival: true,
//     newAircraft: false,
//     oldAircraft: true,
//     highlyRatedCarrier: false,
//     score: 984.53,
//     legId: "LAX-JFK:AA4034~13:0",
//     code: "AA4034~13",
//     arrivalAirport: {
//       name: "New York John F. Kennedy International Airport",
//       code: "JFK",
//       cityCode: "NYC"
//     },
//     departureAirport: {
//       name: "Los Angeles International Airport",
//       code: "LAX",
//       cityCode: "LAX"
//     },
//     price: 547.9,
//     airline: {
//       name: "American Airlines",
//       code: "AA"
//     },
//     date: "2023-03-13",
//     arrivalCity: "New York City"
//   },
//   {
//     id: "3b92ec4eeee9d070msr:AS1179~13-AS925~13-AS18~13",
//     departureTime: "08:30",
//     arrivalTime: "22:54",
//     duration: "11h 24m",
//     departureAirportCode: "LAX",
//     arrivalAirportCode: "JFK",
//     airlineCodes: ["AS"],
//     stopoverAirportCodes: ["PDX", "SEA"],
//     allianceCodes: [""],
//     stopoversCount: 2,
//     departureTimeMinutes: 510,
//     arrivalTimeMinutes: 1374,
//     departureDateTime: "2023-03-13T08:30:00.000-07:00",
//     arrivalDateTime: "2023-03-13T22:54:00.000-04:00",
//     stopoverDurationMinutes: 140,
//     durationMinutes: 684,
//     overnight: false,
//     stopoverDuration: "02h 20m",
//     durationDays: 0,
//     longStopover: false,
//     segments: [
//       {
//         durationMinutes: 180,
//         stopoverDurationMinutes: 75,
//         departureAirportCode: "LAX",
//         arrivalAirportCode: "SEA",
//         airlineCode: "AS",
//         cabin: "economy",
//         designatorCode: "AS1179",
//         departureDateTime: "2023-03-13T08:30:00.000-07:00",
//         arrivalDateTime: "2023-03-13T11:30:00.000-07:00"
//       },
//       {
//         durationMinutes: 55,
//         stopoverDurationMinutes: 65,
//         departureAirportCode: "SEA",
//         arrivalAirportCode: "PDX",
//         airlineCode: "AS",
//         cabin: "economy",
//         designatorCode: "AS925",
//         departureDateTime: "2023-03-13T12:45:00.000-07:00",
//         arrivalDateTime: "2023-03-13T13:40:00.000-07:00"
//       },
//       {
//         durationMinutes: 309,
//         stopoverDurationMinutes: 0,
//         departureAirportCode: "PDX",
//         arrivalAirportCode: "JFK",
//         airlineCode: "AS",
//         cabin: "economy",
//         designatorCode: "AS18",
//         departureDateTime: "2023-03-13T14:45:00.000-07:00",
//         arrivalDateTime: "2023-03-13T22:54:00.000-04:00"
//       }
//     ],
//     operatingAirlineCodes: [],
//     stopoverCode: "MORE_THAN_ONE_STOP",
//     shortStopover: false,
//     earlyDeparture: false,
//     lateArrival: false,
//     newAircraft: false,
//     oldAircraft: true,
//     highlyRatedCarrier: false,
//     score: 751.23,
//     legId: "LAX-JFK:AS1179~13:AS925~13:AS18~13:0",
//     code: "AS1179~13-AS925~13-AS18~13",
//     arrivalAirport: {
//       name: "New York John F. Kennedy International Airport",
//       code: "JFK",
//       cityCode: "NYC"
//     },
//     departureAirport: {
//       name: "Los Angeles International Airport",
//       code: "LAX",
//       cityCode: "LAX"
//     },
//     price: 509,
//     airline: {
//       name: "Alaska Airlines",
//       code: "AS"
//     },
//     date: "2023-03-13",
//     arrivalCity: "New York City"
//   },
//   {
//     id: "29e6005ad2e06949msr:AC553~13-AC124~13",
//     departureTime: "12:25",
//     arrivalTime: "01:24",
//     duration: "09h 59m",
//     departureAirportCode: "LAX",
//     arrivalAirportCode: "YYZ",
//     airlineCodes: ["AC"],
//     stopoverAirportCodes: ["YVR"],
//     allianceCodes: ["star_alliance"],
//     stopoversCount: 1,
//     departureTimeMinutes: 745,
//     arrivalTimeMinutes: 84,
//     departureDateTime: "2023-03-13T12:25:00.000-07:00",
//     arrivalDateTime: "2023-03-14T01:24:00.000-04:00",
//     stopoverDurationMinutes: 140,
//     durationMinutes: 599,
//     overnight: true,
//     stopoverDuration: "02h 20m",
//     durationDays: 1,
//     longStopover: false,
//     segments: [
//       {
//         durationMinutes: 185,
//         stopoverDurationMinutes: 140,
//         departureAirportCode: "LAX",
//         arrivalAirportCode: "YVR",
//         airlineCode: "AC",
//         cabin: "economy",
//         designatorCode: "AC553",
//         departureDateTime: "2023-03-13T12:25:00.000-07:00",
//         arrivalDateTime: "2023-03-13T15:30:00.000-07:00"
//       },
//       {
//         durationMinutes: 274,
//         stopoverDurationMinutes: 0,
//         departureAirportCode: "YVR",
//         arrivalAirportCode: "YYZ",
//         airlineCode: "AC",
//         cabin: "economy",
//         designatorCode: "AC124",
//         departureDateTime: "2023-03-13T17:50:00.000-07:00",
//         arrivalDateTime: "2023-03-14T01:24:00.000-04:00"
//       }
//     ],
//     operatingAirlineCodes: [],
//     stopoverCode: "ONE_STOP",
//     shortStopover: false,
//     earlyDeparture: false,
//     lateArrival: false,
//     newAircraft: false,
//     oldAircraft: true,
//     highlyRatedCarrier: false,
//     score: 876.07,
//     legId: "LAX-YYZ:AC553~13:AC124~13:0",
//     code: "AC553~13-AC124~13",
//     arrivalAirport: {
//       name: "Toronto Lester B Pearson Intl Airport",
//       code: "YYZ",
//       cityCode: "YTO"
//     },
//     departureAirport: {
//       name: "Los Angeles International Airport",
//       code: "LAX",
//       cityCode: "LAX"
//     },
//     price: 426.05,
//     airline: {
//       name: "Air Canada",
//       code: "AC"
//     },
//     date: "2023-03-13",
//     arrivalCity: "Toronto"
//   },
//   {
//     id: "29e6005ad2e06949msr:NK1019~13-F8177~15",
//     departureTime: "09:10",
//     arrivalTime: "23:55",
//     duration: "59h 45m",
//     departureAirportCode: "LAX",
//     arrivalAirportCode: "YYZ",
//     airlineCodes: ["F8", "NK"],
//     stopoverAirportCodes: ["LAS"],
//     allianceCodes: ["lcc"],
//     stopoversCount: 1,
//     departureTimeMinutes: 550,
//     arrivalTimeMinutes: 1435,
//     departureDateTime: "2023-03-13T09:10:00.000-07:00",
//     arrivalDateTime: "2023-03-15T23:55:00.000-04:00",
//     stopoverDurationMinutes: 3248,
//     durationMinutes: 3585,
//     overnight: true,
//     stopoverDuration: "54h 08m",
//     durationDays: 2,
//     longStopover: true,
//     segments: [
//       {
//         durationMinutes: 77,
//         stopoverDurationMinutes: 3248,
//         departureAirportCode: "LAX",
//         arrivalAirportCode: "LAS",
//         airlineCode: "NK",
//         cabin: "economy",
//         designatorCode: "NK1019",
//         departureDateTime: "2023-03-13T09:10:00.000-07:00",
//         arrivalDateTime: "2023-03-13T10:27:00.000-07:00"
//       },
//       {
//         durationMinutes: 260,
//         stopoverDurationMinutes: 0,
//         departureAirportCode: "LAS",
//         arrivalAirportCode: "YYZ",
//         airlineCode: "F8",
//         cabin: "economy",
//         designatorCode: "F8177",
//         departureDateTime: "2023-03-15T16:35:00.000-07:00",
//         arrivalDateTime: "2023-03-15T23:55:00.000-04:00"
//       }
//     ],
//     operatingAirlineCodes: [],
//     stopoverCode: "ONE_STOP",
//     shortStopover: false,
//     earlyDeparture: false,
//     lateArrival: true,
//     newAircraft: false,
//     oldAircraft: true,
//     highlyRatedCarrier: false,
//     score: 165.67,
//     legId: "LAX-YYZ:NK1019~13:F8177~15:0",
//     code: "NK1019~13-F8177~15",
//     arrivalAirport: {
//       name: "Toronto Lester B Pearson Intl Airport",
//       code: "YYZ",
//       cityCode: "YTO"
//     },
//     departureAirport: {
//       name: "Los Angeles International Airport",
//       code: "LAX",
//       cityCode: "LAX"
//     },
//     price: 203.4014,
//     airline: {
//       name: "Flair Airlines",
//       code: "F8"
//     },
//     date: "2023-03-13",
//     arrivalCity: "Toronto"
//   },
//   {
//     id: "29e6005ad2e06949msr:NK2699~13-F8177~15",
//     departureTime: "18:59",
//     arrivalTime: "23:55",
//     duration: "49h 56m",
//     departureAirportCode: "LAX",
//     arrivalAirportCode: "YYZ",
//     airlineCodes: ["F8", "NK"],
//     stopoverAirportCodes: ["LAS"],
//     allianceCodes: ["lcc"],
//     stopoversCount: 1,
//     departureTimeMinutes: 1139,
//     arrivalTimeMinutes: 1435,
//     departureDateTime: "2023-03-13T18:59:00.000-07:00",
//     arrivalDateTime: "2023-03-15T23:55:00.000-04:00",
//     stopoverDurationMinutes: 2656,
//     durationMinutes: 2996,
//     overnight: true,
//     stopoverDuration: "44h 16m",
//     durationDays: 2,
//     longStopover: true,
//     segments: [
//       {
//         durationMinutes: 80,
//         stopoverDurationMinutes: 2656,
//         departureAirportCode: "LAX",
//         arrivalAirportCode: "LAS",
//         airlineCode: "NK",
//         cabin: "economy",
//         designatorCode: "NK2699",
//         departureDateTime: "2023-03-13T18:59:00.000-07:00",
//         arrivalDateTime: "2023-03-13T20:19:00.000-07:00"
//       },
//       {
//         durationMinutes: 260,
//         stopoverDurationMinutes: 0,
//         departureAirportCode: "LAS",
//         arrivalAirportCode: "YYZ",
//         airlineCode: "F8",
//         cabin: "economy",
//         designatorCode: "F8177",
//         departureDateTime: "2023-03-15T16:35:00.000-07:00",
//         arrivalDateTime: "2023-03-15T23:55:00.000-04:00"
//       }
//     ],
//     operatingAirlineCodes: [],
//     stopoverCode: "ONE_STOP",
//     shortStopover: false,
//     earlyDeparture: false,
//     lateArrival: true,
//     newAircraft: false,
//     oldAircraft: true,
//     highlyRatedCarrier: false,
//     score: 303.6,
//     legId: "LAX-YYZ:NK2699~13:F8177~15:0",
//     code: "NK2699~13-F8177~15",
//     arrivalAirport: {
//       name: "Toronto Lester B Pearson Intl Airport",
//       code: "YYZ",
//       cityCode: "YTO"
//     },
//     departureAirport: {
//       name: "Los Angeles International Airport",
//       code: "LAX",
//       cityCode: "LAX"
//     },
//     price: 203.4014,
//     airline: {
//       name: "Flair Airlines",
//       code: "F8"
//     },
//     date: "2023-03-13",
//     arrivalCity: "Toronto"
//   },
//   {
//     id: "29e6005ad2e06949msr:AA2811~13-AA2804~13",
//     departureTime: "06:00",
//     arrivalTime: "22:46",
//     duration: "13h 46m",
//     departureAirportCode: "LAX",
//     arrivalAirportCode: "YYZ",
//     airlineCodes: ["AA"],
//     stopoverAirportCodes: ["DFW"],
//     allianceCodes: ["oneworld"],
//     stopoversCount: 1,
//     departureTimeMinutes: 360,
//     arrivalTimeMinutes: 1366,
//     departureDateTime: "2023-03-13T06:00:00.000-07:00",
//     arrivalDateTime: "2023-03-13T22:46:00.000-04:00",
//     stopoverDurationMinutes: 468,
//     durationMinutes: 826,
//     overnight: false,
//     stopoverDuration: "07h 48m",
//     durationDays: 0,
//     longStopover: true,
//     segments: [
//       {
//         durationMinutes: 182,
//         stopoverDurationMinutes: 468,
//         departureAirportCode: "LAX",
//         arrivalAirportCode: "DFW",
//         airlineCode: "AA",
//         cabin: "economy",
//         designatorCode: "AA2811",
//         departureDateTime: "2023-03-13T06:00:00.000-07:00",
//         arrivalDateTime: "2023-03-13T11:02:00.000-05:00"
//       },
//       {
//         durationMinutes: 176,
//         stopoverDurationMinutes: 0,
//         departureAirportCode: "DFW",
//         arrivalAirportCode: "YYZ",
//         airlineCode: "AA",
//         cabin: "economy",
//         designatorCode: "AA2804",
//         departureDateTime: "2023-03-13T18:50:00.000-05:00",
//         arrivalDateTime: "2023-03-13T22:46:00.000-04:00"
//       }
//     ],
//     operatingAirlineCodes: [],
//     stopoverCode: "ONE_STOP",
//     shortStopover: false,
//     earlyDeparture: false,
//     lateArrival: false,
//     newAircraft: false,
//     oldAircraft: true,
//     highlyRatedCarrier: false,
//     score: 812.93,
//     legId: "LAX-YYZ:AA2811~13:AA2804~13:0",
//     code: "AA2811~13-AA2804~13",
//     arrivalAirport: {
//       name: "Toronto Lester B Pearson Intl Airport",
//       code: "YYZ",
//       cityCode: "YTO"
//     },
//     departureAirport: {
//       name: "Los Angeles International Airport",
//       code: "LAX",
//       cityCode: "LAX"
//     },
//     price: 231.16,
//     airline: {
//       name: "American Airlines",
//       code: "AA"
//     },
//     date: "2023-03-13",
//     arrivalCity: "Toronto"
//   },
//   {
//     id: "29e6005ad2e06949msr:NK648~13-UA1437~13-UA3553~14",
//     departureTime: "17:00",
//     arrivalTime: "09:16",
//     duration: "13h 16m",
//     departureAirportCode: "LAX",
//     arrivalAirportCode: "YYZ",
//     airlineCodes: ["UA", "NK"],
//     stopoverAirportCodes: ["EWR", "LAS"],
//     allianceCodes: ["star_alliance", "lcc"],
//     stopoversCount: 2,
//     departureTimeMinutes: 1020,
//     arrivalTimeMinutes: 556,
//     departureDateTime: "2023-03-13T17:00:00.000-07:00",
//     arrivalDateTime: "2023-03-14T09:16:00.000-04:00",
//     stopoverDurationMinutes: 329,
//     durationMinutes: 796,
//     overnight: true,
//     stopoverDuration: "05h 29m",
//     durationDays: 1,
//     longStopover: true,
//     segments: [
//       {
//         durationMinutes: 79,
//         stopoverDurationMinutes: 161,
//         departureAirportCode: "LAX",
//         arrivalAirportCode: "LAS",
//         airlineCode: "NK",
//         cabin: "economy",
//         designatorCode: "NK648",
//         departureDateTime: "2023-03-13T17:00:00.000-07:00",
//         arrivalDateTime: "2023-03-13T18:19:00.000-07:00"
//       },
//       {
//         durationMinutes: 283,
//         stopoverDurationMinutes: 168,
//         departureAirportCode: "LAS",
//         arrivalAirportCode: "EWR",
//         airlineCode: "UA",
//         cabin: "economy",
//         designatorCode: "UA1437",
//         departureDateTime: "2023-03-13T21:00:00.000-07:00",
//         arrivalDateTime: "2023-03-14T04:43:00.000-04:00"
//       },
//       {
//         durationMinutes: 105,
//         stopoverDurationMinutes: 0,
//         departureAirportCode: "EWR",
//         arrivalAirportCode: "YYZ",
//         airlineCode: "UA",
//         operatingAirlineCode: "RE",
//         cabin: "economy",
//         designatorCode: "UA3553",
//         departureDateTime: "2023-03-14T07:31:00.000-04:00",
//         arrivalDateTime: "2023-03-14T09:16:00.000-04:00"
//       }
//     ],
//     operatingAirlineCodes: ["RE"],
//     stopoverCode: "MORE_THAN_ONE_STOP",
//     shortStopover: false,
//     earlyDeparture: false,
//     lateArrival: false,
//     newAircraft: false,
//     oldAircraft: true,
//     highlyRatedCarrier: false,
//     score: 762.93,
//     legId: "LAX-YYZ:NK648~13:UA1437~13:UA3553~14:0",
//     code: "NK648~13-UA1437~13-UA3553~14",
//     arrivalAirport: {
//       name: "Toronto Lester B Pearson Intl Airport",
//       code: "YYZ",
//       cityCode: "YTO"
//     },
//     departureAirport: {
//       name: "Los Angeles International Airport",
//       code: "LAX",
//       cityCode: "LAX"
//     },
//     price: 188,
//     airline: {
//       name: "United Airlines",
//       code: "UA"
//     },
//     date: "2023-03-13",
//     arrivalCity: "Toronto"
//   },
//   {
//     id: "29e6005ad2e06949msr:AA2811~13-AA541~13-AA4438~13",
//     departureTime: "06:00",
//     arrivalTime: "19:04",
//     duration: "10h 04m",
//     departureAirportCode: "LAX",
//     arrivalAirportCode: "YYZ",
//     airlineCodes: ["AA"],
//     stopoverAirportCodes: ["DFW", "LGA"],
//     allianceCodes: ["oneworld"],
//     stopoversCount: 2,
//     departureTimeMinutes: 360,
//     arrivalTimeMinutes: 1144,
//     departureDateTime: "2023-03-13T06:00:00.000-07:00",
//     arrivalDateTime: "2023-03-13T19:04:00.000-04:00",
//     stopoverDurationMinutes: 115,
//     durationMinutes: 604,
//     overnight: false,
//     stopoverDuration: "01h 55m",
//     durationDays: 0,
//     longStopover: false,
//     segments: [
//       {
//         durationMinutes: 182,
//         stopoverDurationMinutes: 69,
//         departureAirportCode: "LAX",
//         arrivalAirportCode: "DFW",
//         airlineCode: "AA",
//         cabin: "economy",
//         designatorCode: "AA2811",
//         departureDateTime: "2023-03-13T06:00:00.000-07:00",
//         arrivalDateTime: "2023-03-13T11:02:00.000-05:00"
//       },
//       {
//         durationMinutes: 198,
//         stopoverDurationMinutes: 46,
//         departureAirportCode: "DFW",
//         arrivalAirportCode: "LGA",
//         airlineCode: "AA",
//         cabin: "economy",
//         designatorCode: "AA541",
//         departureDateTime: "2023-03-13T12:11:00.000-05:00",
//         arrivalDateTime: "2023-03-13T16:29:00.000-04:00"
//       },
//       {
//         durationMinutes: 109,
//         stopoverDurationMinutes: 0,
//         departureAirportCode: "LGA",
//         arrivalAirportCode: "YYZ",
//         airlineCode: "AA",
//         cabin: "economy",
//         designatorCode: "AA4438",
//         departureDateTime: "2023-03-13T17:15:00.000-04:00",
//         arrivalDateTime: "2023-03-13T19:04:00.000-04:00"
//       }
//     ],
//     operatingAirlineCodes: [],
//     stopoverCode: "MORE_THAN_ONE_STOP",
//     shortStopover: true,
//     earlyDeparture: false,
//     lateArrival: false,
//     newAircraft: false,
//     oldAircraft: true,
//     highlyRatedCarrier: false,
//     score: 756.4,
//     legId: "LAX-YYZ:AA2811~13:AA541~13:AA4438~13:0",
//     code: "AA2811~13-AA541~13-AA4438~13",
//     arrivalAirport: {
//       name: "Toronto Lester B Pearson Intl Airport",
//       code: "YYZ",
//       cityCode: "YTO"
//     },
//     departureAirport: {
//       name: "Los Angeles International Airport",
//       code: "LAX",
//       cityCode: "LAX"
//     },
//     price: 282.39,
//     airline: {
//       name: "American Airlines",
//       code: "AA"
//     },
//     date: "2023-03-13",
//     arrivalCity: "Toronto"
//   },
//   {
//     id: "29e6005ad2e06949msr:B6880~13-WO745~15",
//     departureTime: "09:12",
//     arrivalTime: "19:35",
//     duration: "55h 23m",
//     departureAirportCode: "LAX",
//     arrivalAirportCode: "YYZ",
//     airlineCodes: ["WO", "B6"],
//     stopoverAirportCodes: ["LAS"],
//     allianceCodes: ["", "lcc"],
//     stopoversCount: 1,
//     departureTimeMinutes: 552,
//     arrivalTimeMinutes: 1175,
//     departureDateTime: "2023-03-13T09:12:00.000-07:00",
//     arrivalDateTime: "2023-03-15T19:35:00.000-04:00",
//     stopoverDurationMinutes: 2998,
//     durationMinutes: 3323,
//     overnight: true,
//     stopoverDuration: "49h 58m",
//     durationDays: 2,
//     longStopover: true,
//     segments: [
//       {
//         durationMinutes: 75,
//         stopoverDurationMinutes: 2998,
//         departureAirportCode: "LAX",
//         arrivalAirportCode: "LAS",
//         airlineCode: "B6",
//         cabin: "economy",
//         designatorCode: "B6880",
//         departureDateTime: "2023-03-13T09:12:00.000-07:00",
//         arrivalDateTime: "2023-03-13T10:27:00.000-07:00"
//       },
//       {
//         durationMinutes: 250,
//         stopoverDurationMinutes: 0,
//         departureAirportCode: "LAS",
//         arrivalAirportCode: "YYZ",
//         airlineCode: "WO",
//         cabin: "economy",
//         designatorCode: "WO745",
//         departureDateTime: "2023-03-15T12:25:00.000-07:00",
//         arrivalDateTime: "2023-03-15T19:35:00.000-04:00"
//       }
//     ],
//     operatingAirlineCodes: [],
//     stopoverCode: "ONE_STOP",
//     shortStopover: false,
//     earlyDeparture: false,
//     lateArrival: false,
//     newAircraft: false,
//     oldAircraft: true,
//     highlyRatedCarrier: false,
//     score: 234.8,
//     legId: "LAX-YYZ:B6880~13:WO745~15:0",
//     code: "B6880~13-WO745~15",
//     arrivalAirport: {
//       name: "Toronto Lester B Pearson Intl Airport",
//       code: "YYZ",
//       cityCode: "YTO"
//     },
//     departureAirport: {
//       name: "Los Angeles International Airport",
//       code: "LAX",
//       cityCode: "LAX"
//     },
//     price: 194.5214,
//     airline: {
//       name: "Swoop",
//       code: "WO"
//     },
//     date: "2023-03-13",
//     arrivalCity: "Toronto"
//   },
//   {
//     id: "29e6005ad2e06949msr:AA1339~13-AA2302~13-AA4438~13",
//     departureTime: "06:00",
//     arrivalTime: "19:04",
//     duration: "10h 04m",
//     departureAirportCode: "LAX",
//     arrivalAirportCode: "YYZ",
//     airlineCodes: ["AA"],
//     stopoverAirportCodes: ["ORD", "LGA"],
//     allianceCodes: ["oneworld"],
//     stopoversCount: 2,
//     departureTimeMinutes: 360,
//     arrivalTimeMinutes: 1144,
//     departureDateTime: "2023-03-13T06:00:00.000-07:00",
//     arrivalDateTime: "2023-03-13T19:04:00.000-04:00",
//     stopoverDurationMinutes: 118,
//     durationMinutes: 604,
//     overnight: false,
//     stopoverDuration: "01h 58m",
//     durationDays: 0,
//     longStopover: false,
//     segments: [
//       {
//         durationMinutes: 242,
//         stopoverDurationMinutes: 88,
//         departureAirportCode: "LAX",
//         arrivalAirportCode: "ORD",
//         airlineCode: "AA",
//         cabin: "economy",
//         designatorCode: "AA1339",
//         departureDateTime: "2023-03-13T06:00:00.000-07:00",
//         arrivalDateTime: "2023-03-13T12:02:00.000-05:00"
//       },
//       {
//         durationMinutes: 135,
//         stopoverDurationMinutes: 30,
//         departureAirportCode: "ORD",
//         arrivalAirportCode: "LGA",
//         airlineCode: "AA",
//         cabin: "economy",
//         designatorCode: "AA2302",
//         departureDateTime: "2023-03-13T13:30:00.000-05:00",
//         arrivalDateTime: "2023-03-13T16:45:00.000-04:00"
//       },
//       {
//         durationMinutes: 109,
//         stopoverDurationMinutes: 0,
//         departureAirportCode: "LGA",
//         arrivalAirportCode: "YYZ",
//         airlineCode: "AA",
//         cabin: "economy",
//         designatorCode: "AA4438",
//         departureDateTime: "2023-03-13T17:15:00.000-04:00",
//         arrivalDateTime: "2023-03-13T19:04:00.000-04:00"
//       }
//     ],
//     operatingAirlineCodes: [],
//     stopoverCode: "MORE_THAN_ONE_STOP",
//     shortStopover: true,
//     earlyDeparture: false,
//     lateArrival: false,
//     newAircraft: false,
//     oldAircraft: true,
//     highlyRatedCarrier: false,
//     score: 745.73,
//     legId: "LAX-YYZ:AA1339~13:AA2302~13:AA4438~13:0",
//     code: "AA1339~13-AA2302~13-AA4438~13",
//     arrivalAirport: {
//       name: "Toronto Lester B Pearson Intl Airport",
//       code: "YYZ",
//       cityCode: "YTO"
//     },
//     departureAirport: {
//       name: "Los Angeles International Airport",
//       code: "LAX",
//       cityCode: "LAX"
//     },
//     price: 283.25,
//     airline: {
//       name: "American Airlines",
//       code: "AA"
//     },
//     date: "2023-03-13",
//     arrivalCity: "Toronto"
//   },
//   {
//     id: "29e6005ad2e06949msr:AA340~13-AA1356~14-AA4423~14",
//     departureTime: "23:42",
//     arrivalTime: "21:51",
//     duration: "19h 09m",
//     departureAirportCode: "LAX",
//     arrivalAirportCode: "YYZ",
//     airlineCodes: ["AA"],
//     stopoverAirportCodes: ["MIA", "LGA"],
//     allianceCodes: ["oneworld"],
//     stopoversCount: 2,
//     departureTimeMinutes: 1422,
//     arrivalTimeMinutes: 1311,
//     departureDateTime: "2023-03-13T23:42:00.000-07:00",
//     arrivalDateTime: "2023-03-14T21:51:00.000-04:00",
//     stopoverDurationMinutes: 547,
//     durationMinutes: 1149,
//     overnight: true,
//     stopoverDuration: "09h 07m",
//     durationDays: 1,
//     longStopover: true,
//     segments: [
//       {
//         durationMinutes: 293,
//         stopoverDurationMinutes: 284,
//         departureAirportCode: "LAX",
//         arrivalAirportCode: "MIA",
//         airlineCode: "AA",
//         cabin: "economy",
//         designatorCode: "AA340",
//         departureDateTime: "2023-03-13T23:42:00.000-07:00",
//         arrivalDateTime: "2023-03-14T07:35:00.000-04:00"
//       },
//       {
//         durationMinutes: 188,
//         stopoverDurationMinutes: 263,
//         departureAirportCode: "MIA",
//         arrivalAirportCode: "LGA",
//         airlineCode: "AA",
//         cabin: "economy",
//         designatorCode: "AA1356",
//         departureDateTime: "2023-03-14T12:19:00.000-04:00",
//         arrivalDateTime: "2023-03-14T15:27:00.000-04:00"
//       },
//       {
//         durationMinutes: 121,
//         stopoverDurationMinutes: 0,
//         departureAirportCode: "LGA",
//         arrivalAirportCode: "YYZ",
//         airlineCode: "AA",
//         cabin: "economy",
//         designatorCode: "AA4423",
//         departureDateTime: "2023-03-14T19:50:00.000-04:00",
//         arrivalDateTime: "2023-03-14T21:51:00.000-04:00"
//       }
//     ],
//     operatingAirlineCodes: [],
//     stopoverCode: "MORE_THAN_ONE_STOP",
//     shortStopover: false,
//     earlyDeparture: false,
//     lateArrival: false,
//     newAircraft: false,
//     oldAircraft: true,
//     highlyRatedCarrier: false,
//     score: 732.07,
//     legId: "LAX-YYZ:AA340~13:AA1356~14:AA4423~14:0",
//     code: "AA340~13-AA1356~14-AA4423~14",
//     arrivalAirport: {
//       name: "Toronto Lester B Pearson Intl Airport",
//       code: "YYZ",
//       cityCode: "YTO"
//     },
//     departureAirport: {
//       name: "Los Angeles International Airport",
//       code: "LAX",
//       cityCode: "LAX"
//     },
//     price: 424.4,
//     airline: {
//       name: "American Airlines",
//       code: "AA"
//     },
//     date: "2023-03-13",
//     arrivalCity: "Toronto"
//   },
//   {
//     id: "29e6005ad2e06949msr:WS1315~13-WS520~14",
//     departureTime: "09:35",
//     arrivalTime: "08:28",
//     duration: "19h 53m",
//     departureAirportCode: "LAX",
//     arrivalAirportCode: "YYZ",
//     airlineCodes: ["WS"],
//     stopoverAirportCodes: ["YWG"],
//     allianceCodes: ["lcc"],
//     stopoversCount: 1,
//     departureTimeMinutes: 575,
//     arrivalTimeMinutes: 508,
//     departureDateTime: "2023-03-13T09:35:00.000-07:00",
//     arrivalDateTime: "2023-03-14T08:28:00.000-04:00",
//     stopoverDurationMinutes: 833,
//     durationMinutes: 1193,
//     overnight: true,
//     stopoverDuration: "13h 53m",
//     durationDays: 1,
//     longStopover: true,
//     segments: [
//       {
//         durationMinutes: 212,
//         stopoverDurationMinutes: 833,
//         departureAirportCode: "LAX",
//         arrivalAirportCode: "YWG",
//         airlineCode: "WS",
//         cabin: "economy",
//         designatorCode: "WS1315",
//         departureDateTime: "2023-03-13T09:35:00.000-07:00",
//         arrivalDateTime: "2023-03-13T15:07:00.000-05:00"
//       },
//       {
//         durationMinutes: 148,
//         stopoverDurationMinutes: 0,
//         departureAirportCode: "YWG",
//         arrivalAirportCode: "YYZ",
//         airlineCode: "WS",
//         cabin: "economy",
//         designatorCode: "WS520",
//         departureDateTime: "2023-03-14T05:00:00.000-05:00",
//         arrivalDateTime: "2023-03-14T08:28:00.000-04:00"
//       }
//     ],
//     operatingAirlineCodes: [],
//     stopoverCode: "ONE_STOP",
//     shortStopover: false,
//     earlyDeparture: false,
//     lateArrival: false,
//     newAircraft: false,
//     oldAircraft: true,
//     highlyRatedCarrier: false,
//     score: 737.63,
//     legId: "LAX-YYZ:WS1315~13:WS520~14:0",
//     code: "WS1315~13-WS520~14",
//     arrivalAirport: {
//       name: "Toronto Lester B Pearson Intl Airport",
//       code: "YYZ",
//       cityCode: "YTO"
//     },
//     departureAirport: {
//       name: "Los Angeles International Airport",
//       code: "LAX",
//       cityCode: "LAX"
//     },
//     price: 1241.38,
//     airline: {
//       name: "WestJet",
//       code: "WS"
//     },
//     date: "2023-03-13",
//     arrivalCity: "Toronto"
//   },
//   {
//     id: "29e6005ad2e06949msr:UA1700~13-UA8505~14",
//     departureTime: "16:30",
//     arrivalTime: "07:40",
//     duration: "12h 10m",
//     departureAirportCode: "LAX",
//     arrivalAirportCode: "YYZ",
//     airlineCodes: ["UA"],
//     stopoverAirportCodes: ["EWR"],
//     allianceCodes: ["star_alliance"],
//     stopoversCount: 1,
//     departureTimeMinutes: 990,
//     arrivalTimeMinutes: 460,
//     departureDateTime: "2023-03-13T16:30:00.000-07:00",
//     arrivalDateTime: "2023-03-14T07:40:00.000-04:00",
//     stopoverDurationMinutes: 321,
//     durationMinutes: 730,
//     overnight: true,
//     stopoverDuration: "05h 21m",
//     durationDays: 1,
//     longStopover: true,
//     segments: [
//       {
//         durationMinutes: 309,
//         stopoverDurationMinutes: 321,
//         departureAirportCode: "LAX",
//         arrivalAirportCode: "EWR",
//         airlineCode: "UA",
//         cabin: "economy",
//         designatorCode: "UA1700",
//         departureDateTime: "2023-03-13T16:30:00.000-07:00",
//         arrivalDateTime: "2023-03-14T00:39:00.000-04:00"
//       },
//       {
//         durationMinutes: 100,
//         stopoverDurationMinutes: 0,
//         departureAirportCode: "EWR",
//         arrivalAirportCode: "YYZ",
//         airlineCode: "UA",
//         operatingAirlineCode: "AC",
//         cabin: "economy",
//         designatorCode: "UA8505",
//         departureDateTime: "2023-03-14T06:00:00.000-04:00",
//         arrivalDateTime: "2023-03-14T07:40:00.000-04:00"
//       }
//     ],
//     operatingAirlineCodes: ["AC"],
//     stopoverCode: "ONE_STOP",
//     shortStopover: false,
//     earlyDeparture: false,
//     lateArrival: false,
//     newAircraft: false,
//     oldAircraft: true,
//     highlyRatedCarrier: false,
//     score: 853.83,
//     legId: "LAX-YYZ:UA1700~13:UA8505~14:0",
//     code: "UA1700~13-UA8505~14",
//     arrivalAirport: {
//       name: "Toronto Lester B Pearson Intl Airport",
//       code: "YYZ",
//       cityCode: "YTO"
//     },
//     departureAirport: {
//       name: "Los Angeles International Airport",
//       code: "LAX",
//       cityCode: "LAX"
//     },
//     price: 387,
//     airline: {
//       name: "United Airlines",
//       code: "UA"
//     },
//     date: "2023-03-13",
//     arrivalCity: "Toronto"
//   },
//   {
//     id: "29e6005ad2e06949msr:UA1082~13-UA8430~14",
//     departureTime: "21:15",
//     arrivalTime: "12:32",
//     duration: "12h 17m",
//     departureAirportCode: "LAX",
//     arrivalAirportCode: "YYZ",
//     airlineCodes: ["UA"],
//     stopoverAirportCodes: ["EWR"],
//     allianceCodes: ["star_alliance"],
//     stopoversCount: 1,
//     departureTimeMinutes: 1275,
//     arrivalTimeMinutes: 752,
//     departureDateTime: "2023-03-13T21:15:00.000-07:00",
//     arrivalDateTime: "2023-03-14T12:32:00.000-04:00",
//     stopoverDurationMinutes: 346,
//     durationMinutes: 737,
//     overnight: true,
//     stopoverDuration: "05h 46m",
//     durationDays: 1,
//     longStopover: true,
//     segments: [
//       {
//         durationMinutes: 294,
//         stopoverDurationMinutes: 346,
//         departureAirportCode: "LAX",
//         arrivalAirportCode: "EWR",
//         airlineCode: "UA",
//         cabin: "economy",
//         designatorCode: "UA1082",
//         departureDateTime: "2023-03-13T21:15:00.000-07:00",
//         arrivalDateTime: "2023-03-14T05:09:00.000-04:00"
//       },
//       {
//         durationMinutes: 97,
//         stopoverDurationMinutes: 0,
//         departureAirportCode: "EWR",
//         arrivalAirportCode: "YYZ",
//         airlineCode: "UA",
//         operatingAirlineCode: "AC",
//         cabin: "economy",
//         designatorCode: "UA8430",
//         departureDateTime: "2023-03-14T10:55:00.000-04:00",
//         arrivalDateTime: "2023-03-14T12:32:00.000-04:00"
//       }
//     ],
//     operatingAirlineCodes: ["AC"],
//     stopoverCode: "ONE_STOP",
//     shortStopover: false,
//     earlyDeparture: false,
//     lateArrival: false,
//     newAircraft: false,
//     oldAircraft: true,
//     highlyRatedCarrier: false,
//     score: 849.2,
//     legId: "LAX-YYZ:UA1082~13:UA8430~14:0",
//     code: "UA1082~13-UA8430~14",
//     arrivalAirport: {
//       name: "Toronto Lester B Pearson Intl Airport",
//       code: "YYZ",
//       cityCode: "YTO"
//     },
//     departureAirport: {
//       name: "Los Angeles International Airport",
//       code: "LAX",
//       cityCode: "LAX"
//     },
//     price: 445.9,
//     airline: {
//       name: "United Airlines",
//       code: "UA"
//     },
//     date: "2023-03-13",
//     arrivalCity: "Toronto"
//   }
// ];
