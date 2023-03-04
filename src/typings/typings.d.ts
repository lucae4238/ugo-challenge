interface ApiErrorResponse {
  message?: string;
  success?: boolean;
}

interface FunctionError {
  message: any;
  error: true;
}

//#region Search Airport IATA types
interface SearchAirportResponse extends ApiErrorResponse {
  data?: SearchAirportItem[];
}
interface SearchAirportItem {
  iata: string;
  fs: string;
  name: string;
}
//#endregion Search Airport IATA types

interface isLoading {
  selectedAirport: boolean;
  relatedAirports: boolean;
}

type SortingType = "duration" | "stopOverDuration" | "stopOverAmount" | "flightScore" | "price";
type SortingOrder = "ASC" | "DESC";

interface SortingOptions {
  order: SortingOrder;
  type: SortingType;
}
type FilterTypeString =
  | "noStops"
  | "beforeMidDay"
  | "afterMidDay"
  | "longStopover"
  | "shortStopover";
interface FilterOptions {
  noStops: boolean;
  overnight: boolean;
  longStopover: boolean;
  shortStopover: boolean;
}

interface AirportItem {
  iata: string;
  name: string;
}
interface AirportScheduleResponse extends ApiErrorResponse {
  airport?: Airport;
  airlines?: unknown;
  aircraftImages?: null;
}
interface Airport {
  pluginData: PluginData;
}
interface PluginData {
  details: unknown;
  flightdiary: unknown;
  schedule: Schedule;
  weather: unknown;
  aircraftCount: unknown;
  runways?: unknown;
}
interface Code {
  iata: string;
  icao: string;
}
interface Schedule {
  departures: Departures;
}
interface Departures {
  item: Item;
  page: Page;
  timestamp: number;
  data?: DataEntity[] | null;
}
interface Item {
  current: number;
  total: number;
  limit: number;
}
interface Page {
  current: number;
  total: number;
}
interface DataEntity {
  flight: Flight;
}
interface Flight {
  identification: Identification;
  status: Status;
  aircraft: Aircraft;
  owner?: null;
  airline: Airline;
  airport: Airport1;
  time: Time;
}
interface Airport1 {
  origin: Origin;
  destination: Destination;
  real?: null;
}
interface Destination {
  code: Code;
  timezone: Timezone;
  info: Info;
  name: string;
  position: Position1;
  visible: boolean;
}
interface Position1 {
  latitude: number;
  longitude: number;
  country: Country;
  region: Region;
}
interface Time {
  scheduled: Scheduled;
  real: RealOrEstimated;
  estimated: RealOrEstimated;
  other: Other;
}
interface Scheduled {
  departure: number;
  arrival: number;
}
interface RealOrEstimated {
  departure?: null;
  arrival?: null;
}
interface Other {
  eta?: null;
  duration?: null;
}
interface Weather {
  metar: string;
  time: number;
  qnh: number;
  dewpoint: DewpointOrTemp;
  humidity: number;
  pressure: Pressure;
  sky: Sky;
  flight: Flight1;
  wind: Wind;
  temp: DewpointOrTemp;
  elevation: ElevationOrLength;
  cached: number;
}
interface DewpointOrTemp {
  celsius: number;
  fahrenheit: number;
}
interface Pressure {
  hg: number;
  hpa: number;
}
interface Sky {
  condition: Condition;
  visibility: Visibility;
}
interface Condition {
  text: string;
}
interface Visibility {
  km: number;
  mi: number;
  nmi: number;
}
interface Flight1 {
  category?: null;
}
interface Wind {
  direction: Direction;
  speed: Speed;
}
interface Direction {
  degree: number;
  text: string;
}
interface Speed {
  kmh: number;
  kts: number;
  mph: number;
  text: string;
}
interface ElevationOrLength {
  m: number;
  ft: number;
}
interface AircraftCount {
  ground: number;
  onGround: OnGround;
}
interface OnGround {
  visible: number;
  total: number;
}
interface RunwaysEntity {
  name: string;
  length: ElevationOrLength;
  surface: Surface;
}
interface Surface {
  code: string;
  name: string;
}
interface Airlines {
  codeshare: Codeshare;
}
interface Codeshare {
  AA: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  AC: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  AF: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  AM: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  AS: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  AY: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  AZ: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  BA: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  BR: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  CM: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  CX: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  DL: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  EI: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  EY: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  FI: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  HA: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  IB: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  JL: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  KE: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  KL: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  LA: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  MH: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  NZ: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  OZ: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  QF: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  SQ: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  TG: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  TK: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  TN: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  TP: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  UA: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  VA: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  VS: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
  WS: AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS;
}
interface AAOrACOrAFOrAMOrASOrAYOrAZOrBAOrBROrCMOrCXOrDLOrEIOrEYOrFIOrHAOrIBOrJLOrKEOrKLOrLAOrMHOrNZOrOZOrQFOrSQOrTGOrTKOrTNOrTPOrUAOrVAOrVSOrWS {
  name: string;
  code: Code;
}

//#region onewwaytrip
interface OneWayTripResponse extends ApiErrorResponse {
  legs: LegsEntity[];
  tags?: null[] | null;
  search: Search;
  airlines: AirlinesEntityOrCountriesEntity[];
  airports?: DepartureAirportOrArrivalAirportOrAirportsEntity[] | null;
  cities?: CitiesEntity[] | null;
  providers?: ProvidersEntity[] | null;
  countries?: AirlinesEntityOrCountriesEntity[] | null;
  trips: TripsEntity[];
  fares?: FaresEntityOrFareOrFareView[] | null;
  filters: Filters;
  routeSponsors?: RouteSponsorsEntity[] | null;
  scores: ScoresOrFaresCount;
  paymentMethods?: PaymentMethodsEntity[] | null;
  fareConditions?: null[] | null;
  faresCount: ScoresOrFaresCount;
  promosCount: PromosCount;
  count: number;
  sponsors?: SponsorsEntity[] | null;
}
interface LegsEntity {
  id: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  departureAirportCode: string;
  arrivalAirportCode: string;
  airlineCodes: string[];
  stopoverAirportCodes?: (string | null)[] | null;
  allianceCodes?: string[] | null;
  stopoversCount: number;
  departureTimeMinutes: number;
  arrivalTimeMinutes: number;
  departureDateTime: string;
  arrivalDateTime: string;
  stopoverDurationMinutes: number;
  durationMinutes: number;
  overnight: boolean;
  stopoverDuration: string;
  durationDays: number;
  longStopover: boolean;
  segments?: SegmentsEntity[] | null;
  operatingAirlineCodes?: (string | null)[] | null;
  stopoverCode: string;
  shortStopover: boolean;
  earlyDeparture: boolean;
  lateArrival: boolean;
  newAircraft: boolean;
  oldAircraft: boolean;
  highlyRatedCarrier: boolean;
  score: number;
}
interface SegmentsEntity {
  durationMinutes: number;
  stopoverDurationMinutes: number;
  departureAirportCode: string;
  arrivalAirportCode: string;
  airlineCode: string;
  operatingAirlineCode?: string | null;
  cabin: string;
  designatorCode: string;
  departureDateTime: string;
  arrivalDateTime: string;
}
interface Search {
  id: string;
  cabin: string;
  adultsCount: number;
  childrenCount: number;
  infantsCount: number;
  siteCode: string;
  currencyCode: string;
  locale: string;
  deviceType: string;
  appType: string;
  createdAt: string;
  key: string;
  userCountryCode: string;
  legs: LegsEntity1[];
}
interface LegsEntity1 {
  id: string;
  outboundDate: string;
  departureAirportCode: string;
  arrivalAirportCode: string;
  departureCity: DepartureCityOrArrivalCity;
  arrivalCity: DepartureCityOrArrivalCity;
  departureAirport: DepartureAirportOrArrivalAirportOrAirportsEntity;
  arrivalAirport: DepartureAirportOrArrivalAirportOrAirportsEntity;
}
interface DepartureCityOrArrivalCity {
  code: string;
  name: string;
  enName: string;
  countryCode: string;
  countryName: string;
  countryEnName: string;
  worldRegionCode: string;
  worldRegionName: string;
  worldRegionEnName: string;
}
interface DepartureAirportOrArrivalAirportOrAirportsEntity {
  name: string;
  code: string;
  cityCode: string;
}
interface AirlinesEntityOrCountriesEntity {
  name: string;
  code: string;
}
interface CitiesEntity {
  code: string;
  name: string;
  countryCode: string;
}
interface ProvidersEntity {
  code: string;
  name: string;
  type: string;
  instant: boolean;
  facilitatedBooking: boolean;
  wegoFare: boolean;
}
interface TripsEntity {
  id: string;
  code: string;
  legIds: string[];
}
interface FaresEntityOrFareOrFareView {
  paymentFees?: PaymentFeesEntity[] | null;
  id: string;
  price: PriceOrMinPriceOrMaxPrice;
  providerCode: string;
  handoffUrl: string;
  ecpc: number;
  remainingSeatsCount: number;
  conditionIds?: null[] | null;
  legConditionIds?: null[] | null;
  refundable: boolean;
  exchangeable: boolean;
  tags?: null[] | null;
  tripId: string;
}
interface PaymentFeesEntity {
  paymentMethodId: number;
  currencyCode: string;
  amount: number;
  amountUsd: number;
}
interface PriceOrMinPriceOrMaxPrice {
  totalAmount: number;
  totalAmountUsd: number;
  amount: number;
  amountUsd: number;
  originalAmount: number;
  originalAmountUsd: number;
  amountPerAdult: number;
  amountPerChild: number;
  amountPerInfant: number;
  taxAmount: number;
  taxAmountUsd: number;
  totalTaxAmount: number;
  totalTaxAmountUsd: number;
  currencyCode: string;
  paymentFeeAmountUsd: number;
  bookingFee: number;
  bookingFeeUsd: number;
  totalBookingFee: number;
  totalBookingFeeUsd: number;
}
interface Filters {
  minPrice: PriceOrMinPriceOrMaxPrice;
  maxPrice: PriceOrMinPriceOrMaxPrice;
  stops?:
    | StopsEntityOrAirlinesEntityOrProvidersEntityOrStopoverAirportsEntityOrOriginAirportsEntityOrDestinationAirportsEntityOrAlliancesEntity[]
    | null;
  airlines?:
    | StopsEntityOrAirlinesEntityOrProvidersEntityOrStopoverAirportsEntityOrOriginAirportsEntityOrDestinationAirportsEntityOrAlliancesEntity[]
    | null;
  providers?:
    | StopsEntityOrAirlinesEntityOrProvidersEntityOrStopoverAirportsEntityOrOriginAirportsEntityOrDestinationAirportsEntityOrAlliancesEntity[]
    | null;
  stopoverAirports?:
    | StopsEntityOrAirlinesEntityOrProvidersEntityOrStopoverAirportsEntityOrOriginAirportsEntityOrDestinationAirportsEntityOrAlliancesEntity[]
    | null;
  stopoverDurations: DepartureTimesOrArrivalTimesOrDurationsOrStopoverDurationsOrTripDurations;
  originAirports?:
    | StopsEntityOrAirlinesEntityOrProvidersEntityOrStopoverAirportsEntityOrOriginAirportsEntityOrDestinationAirportsEntityOrAlliancesEntity[]
    | null;
  destinationAirports?:
    | StopsEntityOrAirlinesEntityOrProvidersEntityOrStopoverAirportsEntityOrOriginAirportsEntityOrDestinationAirportsEntityOrAlliancesEntity[]
    | null;
  tripDurations: DepartureTimesOrArrivalTimesOrDurationsOrStopoverDurationsOrTripDurations;
  legs?: LegsEntity2[] | null;
  alliances?:
    | StopsEntityOrAirlinesEntityOrProvidersEntityOrStopoverAirportsEntityOrOriginAirportsEntityOrDestinationAirportsEntityOrAlliancesEntity[]
    | null;
  fareConditions?: null[] | null;
}
interface StopsEntityOrAirlinesEntityOrProvidersEntityOrStopoverAirportsEntityOrOriginAirportsEntityOrDestinationAirportsEntityOrAlliancesEntity {
  code: string;
  price: PriceOrMinPriceOrMaxPrice;
}
interface DepartureTimesOrArrivalTimesOrDurationsOrStopoverDurationsOrTripDurations {
  min: number;
  max: number;
}
interface LegsEntity2 {
  departureAirportCode: string;
  arrivalAirportCode: string;
  departureCityCode: string;
  arrivalCityCode: string;
  index: number;
  departureTimes: DepartureTimesOrArrivalTimesOrDurationsOrStopoverDurationsOrTripDurations;
  arrivalTimes: DepartureTimesOrArrivalTimesOrDurationsOrStopoverDurationsOrTripDurations;
  durations: DepartureTimesOrArrivalTimesOrDurationsOrStopoverDurationsOrTripDurations;
  stops?:
    | StopsEntityOrAirlinesEntityOrProvidersEntityOrStopoverAirportsEntityOrOriginAirportsEntityOrDestinationAirportsEntityOrAlliancesEntity[]
    | null;
  stopoverDurations: DepartureTimesOrArrivalTimesOrDurationsOrStopoverDurationsOrTripDurations;
  stopoverAirports?:
    | StopsEntityOrAirlinesEntityOrProvidersEntityOrStopoverAirportsEntityOrOriginAirportsEntityOrDestinationAirportsEntityOrAlliancesEntity[]
    | null;
  airlines?:
    | StopsEntityOrAirlinesEntityOrProvidersEntityOrStopoverAirportsEntityOrOriginAirportsEntityOrDestinationAirportsEntityOrAlliancesEntity[]
    | null;
}
interface RouteSponsorsEntity {
  priority: number;
  fare: FaresEntityOrFareOrFareView;
}
interface ScoresOrFaresCount {
  test: true;
}
interface PaymentMethodsEntity {
  id: number;
  name: string;
}
interface PromosCount {
  test: true;
}
interface SponsorsEntity {
  fareView: FaresEntityOrFareOrFareView;
  brandingColor: string;
  partnerLogoUrl: string;
  brandingHeader: string;
  brandingDescription: string;
}

//#endregion onewwaytrip

interface FormatedFlight {
  id: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  departureAirportCode: string;
  arrivalAirportCode: string;
  airlineCodes?: string[] | null;
  stopoverAirportCodes?: string[] | null;
  allianceCodes?: string[] | null;
  stopoversCount: number;
  departureTimeMinutes: number;
  arrivalTimeMinutes: number;
  departureDateTime: string;
  arrivalDateTime: string;
  stopoverDurationMinutes: number;
  durationMinutes: number;
  overnight: boolean;
  stopoverDuration: string;
  durationDays: number;
  longStopover: boolean;
  segments?: SegmentsEntity[] | null;
  operatingAirlineCodes?: string[] | null;
  stopoverCode: string;
  shortStopover: boolean;
  earlyDeparture: boolean;
  lateArrival: boolean;
  newAircraft: boolean;
  oldAircraft: boolean;
  highlyRatedCarrier: boolean;
  score: number;
  legId: string;
  code: string;
  arrivalAirport: ArrivalAirportOrDepartureAirport;
  departureAirport: ArrivalAirportOrDepartureAirport;
  airline: Airline;
  price: number;
  date: string;
  arrivalCity: string;
}
interface SegmentsEntity {
  durationMinutes: number;
  stopoverDurationMinutes: number;
  departureAirportCode: string;
  arrivalAirportCode: string;
  airlineCode: string;
  cabin: string;
  designatorCode: string;
  departureDateTime: string;
  arrivalDateTime: string;
}
interface ArrivalAirportOrDepartureAirport {
  name: string;
  code: string;
  cityCode: string;
}
interface Airline {
  name: string;
  code: string;
}

interface FlightFormatterAdditionalInfo {
  selectedDate: string;
  arrivalAirport: ArrivalAirportOrDepartureAirport;
  departureAirport: ArrivalAirportOrDepartureAirport;
  arrivalCity: CitiesEntity;
}
