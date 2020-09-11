const roleImagesMapper = {
  apothecary: 'https://firebasestorage.googleapis.com/v0/b/moderator-helper.appspot.com/o/role_apothecary.jpg?alt=media',
  beggar: 'https://firebasestorage.googleapis.com/v0/b/moderator-helper.appspot.com/o/role_beggar.jpg?alt=media',
  blacksmith: 'https://firebasestorage.googleapis.com/v0/b/moderator-helper.appspot.com/o/role_blacksmith.jpg?alt=media',
  contagious_villager: 'https://firebasestorage.googleapis.com/v0/b/moderator-helper.appspot.com/o/role_contagious_villager.jpg?alt=media',
  crow: 'https://firebasestorage.googleapis.com/v0/b/moderator-helper.appspot.com/o/role_crow.jpg?alt=media',
  elder: 'https://firebasestorage.googleapis.com/v0/b/moderator-helper.appspot.com/o/role_elder.jpg?alt=media',
  fallen_angel: 'https://firebasestorage.googleapis.com/v0/b/moderator-helper.appspot.com/o/role_fallen_angel.jpg?alt=media',
  healer: 'https://firebasestorage.googleapis.com/v0/b/moderator-helper.appspot.com/o/role_healer.jpg?alt=media',
  huntress: 'https://firebasestorage.googleapis.com/v0/b/moderator-helper.appspot.com/o/role_huntress.jpg?alt=media',
  plague_doctor: 'https://firebasestorage.googleapis.com/v0/b/moderator-helper.appspot.com/o/role_plague_doctor.jpg?alt=media',
  priest: 'https://firebasestorage.googleapis.com/v0/b/moderator-helper.appspot.com/o/role_priest.jpg?alt=media',
  sentry: 'https://firebasestorage.googleapis.com/v0/b/moderator-helper.appspot.com/o/role_sentry.jpg?alt=media',
  sinister_villager: 'https://firebasestorage.googleapis.com/v0/b/moderator-helper.appspot.com/o/role_sinister_villager.jpg?alt=media',
  undertaker: 'https://firebasestorage.googleapis.com/v0/b/moderator-helper.appspot.com/o/role_undertaker.jpg?alt=media',
  villager: 'https://firebasestorage.googleapis.com/v0/b/moderator-helper.appspot.com/o/role_villager.jpg?alt=media',
  weak_villager: 'https://firebasestorage.googleapis.com/v0/b/moderator-helper.appspot.com/o/role_weak_villager.jpg?alt=media',
};

export type RoleImageName = keyof typeof roleImagesMapper;

function roleImgResolver(roleName: RoleImageName) {
  return roleImagesMapper[roleName];
}

export default roleImgResolver;
