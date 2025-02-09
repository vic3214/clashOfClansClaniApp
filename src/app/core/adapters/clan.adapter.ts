
import {RoleTranslation} from '@app/core/enums/role-translation.enum';
import {IClanModel, MemberList} from '@app/core/models/clan.model';
import {MemberListResponse, Role} from '@app/core/models/BaseModels/clan-base.model';
import {ClanResponseModel} from '@app/core/models/ResponseModels/clan-response.model';


const roleMapping: { [key in Role]: RoleTranslation } = {
  [Role.Admin]: RoleTranslation.Admin,
  [Role.CoLeader]: RoleTranslation.CoLeader,
  [Role.Leader]: RoleTranslation.Leader,
  [Role.Member]: RoleTranslation.Member,
};

export const ClanAdapter = (clanResponse: ClanResponseModel): IClanModel => {

  const adaptMember = (member: MemberListResponse): MemberList => {
    const adaptedMember: MemberList = {
      tag: member.tag,
      name: member.name,
      role: roleMapping[member.role] || member.role as unknown as RoleTranslation,
      townHallLevel: member.townHallLevel,
      expLevel: member.expLevel,
      league: {
        id: member.league.id,
        name: member.league.name,
        iconUrls: {
          small: member.league.iconUrls.small,
          tiny: member.league.iconUrls.tiny,
          medium: member.league.iconUrls.medium || undefined,
        },
      },
      trophies: member.trophies,
      builderBaseTrophies: member.builderBaseTrophies,
      clanRank: member.clanRank,
      previousClanRank: member.previousClanRank,
      donations: member.donations,
      donationsReceived: member.donationsReceived,
      playerHouse: member.playerHouse ? {
        elements: member.playerHouse.elements.map(element => ({
          type: element.type,
          id: element.id,
        })),
      } : undefined,
      builderBaseLeague: {
        id: member.builderBaseLeague.id,
        name: member.builderBaseLeague.name,
      },
    };
    return adaptedMember;
  };

  const adaptedClan: IClanModel = {
    tag: clanResponse.tag,
    name: clanResponse.name,
    type: clanResponse.type,
    description: clanResponse.description,
    location: {
      id: clanResponse.location.id,
      name: clanResponse.location.name,
      isCountry: clanResponse.location.isCountry,
      countryCode: clanResponse.location.countryCode,
    },
    isFamilyFriendly: clanResponse.isFamilyFriendly,
    badgeUrls: {
      small: clanResponse.badgeUrls.small,
      large: clanResponse.badgeUrls.large,
      medium: clanResponse.badgeUrls.medium,
    },
    clanLevel: clanResponse.clanLevel,
    clanPoints: clanResponse.clanPoints,
    clanBuilderBasePoints: clanResponse.clanBuilderBasePoints,
    clanCapitalPoints: clanResponse.clanCapitalPoints,
    capitalLeague: {
      id: clanResponse.capitalLeague.id,
      name: clanResponse.capitalLeague.name,
    },
    requiredTrophies: clanResponse.requiredTrophies,
    warFrequency: clanResponse.warFrequency,
    warWinStreak: clanResponse.warWinStreak,
    warWins: clanResponse.warWins,
    warTies: clanResponse.warTies,
    warLosses: clanResponse.warLosses,
    isWarLogPublic: clanResponse.isWarLogPublic,
    warLeague: {
      id: clanResponse.warLeague.id,
      name: clanResponse.warLeague.name,
    },
    members: clanResponse.members,
    memberList: clanResponse.memberList.map(adaptMember),
    labels: clanResponse.labels.map(label => ({
      id: label.id,
      name: label.name,
      iconUrls: {
        small: label.iconUrls.small,
        medium: label.iconUrls.medium,
      },
    })),
    requiredBuilderBaseTrophies: clanResponse.requiredBuilderBaseTrophies,
    requiredTownhallLevel: clanResponse.requiredTownhallLevel,
    clanCapital: {
      capitalHallLevel: clanResponse.clanCapital.capitalHallLevel,
      districts: clanResponse.clanCapital.districts.map(district => ({
        id: district.id,
        name: district.name,
        districtHallLevel: district.districtHallLevel,
      })),
    },
    chatLanguage: {
      id: clanResponse.chatLanguage.id,
      name: clanResponse.chatLanguage.name,
      languageCode: clanResponse.chatLanguage.languageCode,
    },
  };

  return adaptedClan;
};
