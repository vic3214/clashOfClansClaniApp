export interface ClanBaseModel {
  tag: string;
  name: string;
  type: string;
  description: string;
  location: Location; // Tipo Location definido aquí
  isFamilyFriendly: boolean;
  badgeUrls: BadgeUrls;
  clanLevel: number;
  clanPoints: number;
  clanBuilderBasePoints: number;
  clanCapitalPoints: number;
  capitalLeague: League;
  requiredTrophies: number;
  warFrequency: string;
  warWinStreak: number;
  warWins: number;
  warTies: number;
  warLosses: number;
  isWarLogPublic: boolean;
  warLeague: League;
  members: number;
  labels: Label[];
  requiredBuilderBaseTrophies: number;
  requiredTownhallLevel: number;
  clanCapital: ClanCapital;
  chatLanguage: ChatLanguage;
}

export interface BadgeUrls {
  small: string;
  large: string;
  medium: string;
}

export interface League {
  id: number;
  name: string;
}

export interface ChatLanguage {
  id: number;
  name: string;
  languageCode: string;
}

export interface ClanCapital {
  capitalHallLevel: number;
  districts: District[];
}

export interface District {
  id: number;
  name: string;
  districtHallLevel: number;
}

export interface Label {
  id: number;
  name: string;
  iconUrls: LabelIconUrls;
}

export interface LabelIconUrls {
  small: string;
  medium: string;
}

export interface Location { // Definición de Location
  id: number;
  name: string;
  isCountry: boolean;
  countryCode: string;
}

export interface MemberListResponse {
  tag: string;
  name: string;
  role: Role;
  townHallLevel: number;
  expLevel: number;
  league: LeagueClass;
  trophies: number;
  builderBaseTrophies: number;
  clanRank: number;
  previousClanRank: number;
  donations: number;
  donationsReceived: number;
  playerHouse?: PlayerHouse;
  builderBaseLeague: League;
}

export interface LeagueClass {
  id: number;
  name: string;
  iconUrls: LeagueIconUrls;
}

export interface LeagueIconUrls {
  small: string;
  tiny: string;
  medium?: string;
}

export interface PlayerHouse {
  elements: Element[];
}

export interface Element {
  type: Type;
  id: number;
}

export enum Type {
  Decoration = 'decoration',
  Ground = 'ground',
  Roof = 'roof',
  Walls = 'walls',
}

export enum Role {
  Admin = 'admin',
  CoLeader = 'coLeader',
  Leader = 'leader',
  Member = 'member',
}
