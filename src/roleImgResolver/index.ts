const roleImagesMapper = {
  Apothecary:
    "https://firebasestorage.googleapis.com/v0/b/moderator-helper.appspot.com/o/role_apothecary.jpg?alt=media",
  Beggar:
    "https://firebasestorage.googleapis.com/v0/b/moderator-helper.appspot.com/o/role_beggar.jpg?alt=media",
  Blacksmith:
    "https://firebasestorage.googleapis.com/v0/b/moderator-helper.appspot.com/o/role_blacksmith.jpg?alt=media",
  ContagiousVillager:
    "https://firebasestorage.googleapis.com/v0/b/moderator-helper.appspot.com/o/role_contagious_villager.jpg?alt=media",
  Crow:
    "https://firebasestorage.googleapis.com/v0/b/moderator-helper.appspot.com/o/role_crow.jpg?alt=media",
  Elder:
    "https://firebasestorage.googleapis.com/v0/b/moderator-helper.appspot.com/o/role_elder.jpg?alt=media",
  FallenAngel:
    "https://firebasestorage.googleapis.com/v0/b/moderator-helper.appspot.com/o/role_fallen_angel.jpg?alt=media",
  Healer:
    "https://firebasestorage.googleapis.com/v0/b/moderator-helper.appspot.com/o/role_healer.jpg?alt=media",
  Huntress:
    "https://firebasestorage.googleapis.com/v0/b/moderator-helper.appspot.com/o/role_huntress.jpg?alt=media",
  PlagueDoctor:
    "https://firebasestorage.googleapis.com/v0/b/moderator-helper.appspot.com/o/role_plague_doctor.jpg?alt=media",
  Priest:
    "https://firebasestorage.googleapis.com/v0/b/moderator-helper.appspot.com/o/role_priest.jpg?alt=media",
  Sentry:
    "https://firebasestorage.googleapis.com/v0/b/moderator-helper.appspot.com/o/role_sentry.jpg?alt=media",
  SinisterVillager:
    "https://firebasestorage.googleapis.com/v0/b/moderator-helper.appspot.com/o/role_sinister_villager.jpg?alt=media",
  Undertaker:
    "https://firebasestorage.googleapis.com/v0/b/moderator-helper.appspot.com/o/role_undertaker.jpg?alt=media",
  Villager:
    "https://firebasestorage.googleapis.com/v0/b/moderator-helper.appspot.com/o/role_villager.jpg?alt=media",
  WeakVillager:
    "https://firebasestorage.googleapis.com/v0/b/moderator-helper.appspot.com/o/role_weak_villager.jpg?alt=media",
};

export type RoleImageName = keyof typeof roleImagesMapper;

function roleImgResolver(roleName: RoleImageName) {
  return roleImagesMapper[roleName];
}

export default roleImgResolver;
