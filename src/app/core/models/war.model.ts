export interface WarModel {
  state:                string;
  teamSize:             number;
  attacksPerMember:     number;
  battleModifier:       string;
  preparationStartTime: string;
  startTime:            string;
  endTime:              string;
  clan:                 Clan;
  opponent:             Clan;
}

export interface Clan {
  tag:                   string;
  name:                  string;
  badgeUrls:             BadgeUrls;
  clanLevel:             number;
  attacks:               number;
  stars:                 number;
  destructionPercentage: number;
  members:               Member[];
}

export interface BadgeUrls {
  small:  string;
  large:  string;
  medium: string;
}

export interface Member {
  tag:                 string;
  name:                string;
  townhallLevel:       number;
  mapPosition:         number;
  attacks?:            Attack[];
  opponentAttacks:     number;
  bestOpponentAttack?: Attack;
}

export interface Attack {
  attackerTag:           string;
  defenderTag:           string;
  stars:                 number;
  destructionPercentage: number;
  order:                 number;
  duration:              number;
}
