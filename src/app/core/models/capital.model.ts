export interface CapitalModel {
  items:  Item[];
  paging: Paging;
}

export interface Item {
  state:                   State;
  startTime:               string;
  endTime:                 string;
  capitalTotalLoot:        number;
  raidsCompleted:          number;
  totalAttacks:            number;
  enemyDistrictsDestroyed: number;
  offensiveReward:         number;
  defensiveReward:         number;
  members?:                Member[];
  attackLog:               Log[];
  defenseLog:              Log[];
}

export interface Log {
  defender?:          DefenderClass;
  attackCount:        number;
  districtCount:      number;
  districtsDestroyed: number;
  districts:          District[];
  attacker?:          DefenderClass;
}

export interface DefenderClass {
  tag:       string;
  name:      string;
  level:     number;
  badgeUrls: BadgeUrls;
}

export interface BadgeUrls {
  small:  string;
  large:  string;
  medium: string;
}

export interface District {
  id:                 number;
  name:               DistrictName;
  districtHallLevel:  number;
  destructionPercent: number;
  stars:              number;
  attackCount:        number;
  totalLooted:        number;
  attacks?:           Attack[];
}

export interface Attack {
  attacker:           AttackAttacker;
  destructionPercent: number;
  stars:              number;
}

export interface AttackAttacker {
  tag:  string;
  name: AttackerName;
}

export enum AttackerName {
  Hefest = "Hefest",
  JuanAntonio9 = "juan.antonio9",
  NuhaElMejor = "NUHA EL MEJOR",
  PapitoBasuko = "PapitoBasuko",
  Victor = "Victor",
  Yolo = "Yolo",
}

export enum DistrictName {
  BalloonLagoon = "Balloon Lagoon",
  BarbarianCamp = "Barbarian Camp",
  BuilderSWorkshop = "Builder's Workshop",
  CapitalPeak = "Capital Peak",
  DragonCliffs = "Dragon Cliffs",
  GoblinMines = "Goblin Mines",
  GolemQuarry = "Golem Quarry",
  SkeletonPark = "Skeleton Park",
  WizardValley = "Wizard Valley",
}

export interface Member {
  tag:                    string;
  name:                   AttackerName;
  attacks:                number;
  attackLimit:            number;
  bonusAttackLimit:       number;
  capitalResourcesLooted: number;
}

export enum State {
  Ended = "ended",
  Ongoing = "ongoing",
}

export interface Paging {
  cursors: Cursors;
}

export interface Cursors {
}
