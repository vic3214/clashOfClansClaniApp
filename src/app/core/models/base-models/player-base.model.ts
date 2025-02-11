export interface PlayerBaseModel {
  tag:                      string;
  name:                     string;
  townHallLevel:            number;
  townHallWeaponLevel:      number;
  expLevel:                 number;
  trophies:                 number;
  bestTrophies:             number;
  warStars:                 number;
  attackWins:               number;
  defenseWins:              number;
  builderHallLevel:         number;
  builderBaseTrophies:      number;
  bestBuilderBaseTrophies:  number;
  role:                     string;
  warPreference:            string;
  donations:                number;
  donationsReceived:        number;
  clanCapitalContributions: number;
  clan:                     Clan;
  league:                   League;
  builderBaseLeague:        BuilderBaseLeague;
  achievements:             Achievement[];
  playerHouse:              PlayerHouse;
  labels:                   Label[];
  troops:                   HeroEquipment[];
  heroes:                   HeroEquipment[];
  heroEquipment:            HeroEquipment[];
  spells:                   HeroEquipment[];
}

export interface Achievement {
  name:           string;
  stars:          number;
  value:          number;
  target:         number;
  info:           string;
  completionInfo: null | string;
  village:        Village;
}

export enum Village {
  BuilderBaseVillage = "builderBase",
  ClanCapitalVillage = "clanCapital",
  HomeVillage = "home",
}

export interface BuilderBaseLeague {
  id:   number;
  name: string;
}

export interface Clan {
  tag:       string;
  name:      string;
  clanLevel: number;
  badgeUrls: BadgeUrls;
}

export interface BadgeUrls {
  small:  string;
  large:  string;
  medium: string;
}

export interface HeroEquipment {
  name:       string;
  level:      number;
  maxLevel:   number;
  village:    Village;
  equipment?: HeroEquipment[];
}

export interface Label {
  id:       number;
  name:     string;
  iconUrls: LabelIconUrls;
}

export interface LabelIconUrls {
  small:  string;
  medium: string;
}

export interface League {
  id:       number;
  name:     string;
  iconUrls: LeagueIconUrls;
}

export interface LeagueIconUrls {
  small:  string;
  tiny:   string;
  medium: string;
}

export interface PlayerHouse {
  elements: Element[];
}

export interface Element {
  type: string;
  id:   number;
}
