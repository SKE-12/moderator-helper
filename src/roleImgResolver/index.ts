function roleImgResolver(roleName: string) {
    return require(`./role_${roleName}.jpg`)
}

export default roleImgResolver
