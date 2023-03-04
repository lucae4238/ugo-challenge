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
  type: SortingType;
  order: SortingOrder;
}

interface FilterOptions {
  noStops: boolean;
  beforeMidDay: boolean;
  afterMidDay: boolean;
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
