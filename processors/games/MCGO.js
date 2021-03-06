/* eslint-disable camelcase */
/*
 * Cops and Crims
 */

const {
  getWeeklyStat,
  getMonthlyStat,
  getRatio,
} = require('../../util/utility');

module.exports = ({
  // General
  coins = 0,
  deaths = 0,
  kills = 0,
  cop_kills = 0,
  criminal_kills = 0,
  weekly_kills_a = 0,
  weekly_kills_b = 0,
  monthly_kills_a = 0,
  monthly_kills_b = 0,
  bombs_defused = 0,
  bombs_planted = 0,
  grenade_kills = 0,
  grenadeKills = 0,
  headshot_kills = 0,
  round_wins = 0,
  selected_lobby_prefix,
  shots_fired = 0,
  show_lobby_prefix,

  // Deathmatch
  kills_deathmatch = 0,
  deaths_deathmatch = 0,
  game_wins_deathmatch = 0,
  cop_kills_deathmatch = 0,
  criminal_kills_deathmatch = 0,

  // Wins
  game_wins = 0,
  game_wins_alleyway = 0,
  game_wins_atomic = 0,
  game_wins_carrier = 0,
  'game_wins_melon factory': game_wins_melon_factory = 0,
  game_wins_overgrown = 0,
  game_wins_reserve = 0,
  game_wins_sandstorm = 0,
  game_wins_temple = 0,

  // Perks
  body_armor_cost = 0,
  bounty_hunter = 0,
  carbine_cost_reduction = 0,
  carbine_damage_increase = 0,
  carbine_recoil_reduction = 0,
  carbine_reload_speed_reduction = 0,
  knife_attack_delay = 0,
  knife_damage_increase = 0,
  magnum_cost_reduction = 0,
  magnum_damage_increase = 0,
  magnum_recoil_reduction = 0,
  magnum_reload_speed_reduction = 0,
  pistol_damage_increase = 0,
  pistol_recoil_reduction = 0,
  pistol_reload_speed_reduction = 0,
  pocket_change = 0,
  rifle_cost_reduction = 0,
  rifle_damage_increase = 0,
  rifle_recoil_reduction = 0,
  rifle_reload_speed_reduction = 0,
  shotgun_cost_reduction = 0,
  shotgun_damage_increase = 0,
  shotgun_recoil_reduction = 0,
  shotgun_reload_speed_reduction = 0,
  smg_cost_reduction = 0,
  smg_damage_increase = 0,
  smg_recoil_reduction = 0,
  smg_reload_speed_reduction = 0,
  sniper_charge_bonus = 0,
  sniper_cost_reduction = 0,
  sniper_damage_increase = 0,
  sniper_reload_speed_reduction = 0,
  strength_training = 0,

  // Selected cosmetics
  selectedCarbineDev,
  selectedCreeperChestplateDev,
  selectedCreeperHelmetDev,
  selectedKnifeDev,
  selectedMagnumDev,
  selectedOcelotChestplateDev,
  selectedOcelotHelmetDev,
  selectedPistolDev,
  selectedRifleDev,
  selectedShotgunDev,
  selectedSmgDev,

  packages,
}) => ({
  coins,
  deaths,
  kills,
  kd: getRatio(kills, deaths),
  wins: game_wins,
  cop_kills,
  criminal_kills,
  weekly_kills: getWeeklyStat(weekly_kills_a, weekly_kills_b),
  monthly_kills: getMonthlyStat(monthly_kills_a, monthly_kills_b),
  bombs_planted,
  bombs_defused,
  grenade_kills: grenade_kills + grenadeKills,
  headshot_kills,
  round_wins,
  selected_lobby_prefix,
  shots_fired,
  show_lobby_prefix,
  map_wins: {
    alleyway: game_wins_alleyway,
    atomic: game_wins_atomic,
    carrier: game_wins_carrier,
    melon_factory: game_wins_melon_factory,
    overgrown: game_wins_overgrown,
    reserve: game_wins_reserve,
    sandstorm: game_wins_sandstorm,
    temple: game_wins_temple,
  },
  deathmatch: {
    kills: kills_deathmatch,
    deaths: deaths_deathmatch,
    kd: getRatio(kills_deathmatch, deaths_deathmatch),
    wins: game_wins_deathmatch,
    cop_kills: cop_kills_deathmatch,
    criminal_kills: criminal_kills_deathmatch,
  },
  perks: {
    player: {
      body_armor_cost,
      bounty_hunter,
      pocket_change,
      strength_training,
    },
    carbine: {
      cost_reduction: carbine_cost_reduction,
      damage_increase: carbine_damage_increase,
      recoil_reduction: carbine_recoil_reduction,
      reload_speed_reduction: carbine_reload_speed_reduction,
    },
    knife: {
      attack_delay: knife_attack_delay,
      damage_increase: knife_damage_increase,
    },
    magnum: {
      cost_reduction: magnum_cost_reduction,
      damage_increase: magnum_damage_increase,
      recoil_reduction: magnum_recoil_reduction,
      reload_speed_reduction: magnum_reload_speed_reduction,
    },
    pistol: {
      damage_increase: pistol_damage_increase,
      recoil_reduction: pistol_recoil_reduction,
      reload_speed_reduction: pistol_reload_speed_reduction,
    },
    rifle: {
      cost_reduction: rifle_cost_reduction,
      damage_increase: rifle_damage_increase,
      recoil_reduction: rifle_recoil_reduction,
      reload_speed_reduction: rifle_reload_speed_reduction,
    },
    shotgun: {
      cost_reduction: shotgun_cost_reduction,
      damage_increase: shotgun_damage_increase,
      recoil_reduction: shotgun_recoil_reduction,
      reload_speed_reduction: shotgun_reload_speed_reduction,
    },
    smg: {
      cost_reduction: smg_cost_reduction,
      damage_increase: smg_damage_increase,
      recoil_reduction: smg_recoil_reduction,
      reload_speed_reduction: smg_reload_speed_reduction,
    },
    sniper: {
      charge_bonus: sniper_charge_bonus,
      cost_reduction: sniper_cost_reduction,
      damage_increase: sniper_damage_increase,
      reload_speed_reduction: sniper_reload_speed_reduction,
    },
  },
  selected_cosmetics: {
    carbine: selectedCarbineDev,
    creeper_helmet: selectedCreeperHelmetDev,
    creeper_chestplate: selectedCreeperChestplateDev,
    knife: selectedKnifeDev,
    magnum: selectedMagnumDev,
    ocelot_helmet: selectedOcelotHelmetDev,
    ocelot_chestplate: selectedOcelotChestplateDev,
    pistol: selectedPistolDev,
    rifle: selectedRifleDev,
    shotgun: selectedShotgunDev,
    smg: selectedSmgDev,
  },
  packages,
});
