export interface MemberListBaseModel {
  items:  Item[];
  paging: Paging;
}

export interface Item {
  tag:                 string;
  name:                string;
  townHallLevel:       number;
  expLevel:            number;
  league:              League;
  trophies:            number;
  builderBaseTrophies: number;
  clanRank:            number;
  previousClanRank:    number;
  donations:           number;
  donationsReceived:   number;
  playerHouse?:        PlayerHouse;
  builderBaseLeague:   BuilderBaseLeague;
}

export interface BuilderBaseLeague {
  id:   number;
  name: string;
}

export interface League {
  id:       number;
  name:     string;
  iconUrls: IconUrls;
}

export interface IconUrls {
  small:   string;
  tiny:    string;
  medium?: string;
}

export interface PlayerHouse {
  elements: Element[];
}

export interface Element {
  type: Type;
  id:   number;
}

export enum Type {
  Decoration = "decoration",
  Ground = "ground",
  Roof = "roof",
  Walls = "walls",
}

export interface Paging {
  cursors: Cursors;
}

export interface Cursors {
}
