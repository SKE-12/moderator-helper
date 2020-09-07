function roleImgResolver(roleName: string) {
    // tslint:disable
    return require['context']('./img',true,/\.(gif|png|jpe?g|svg)/)(`./role_${roleName}.jpg`)
}

export default roleImgResolver
