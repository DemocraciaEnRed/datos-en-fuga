export const mapAuthors = (authors: any) => {
    let authorsString = ''
    authors.forEach((author: { name: string }, i: number) => {
        if (authors.length > 1 && i + 2 < authors.length) authorsString = `${authorsString}${author.name}, `
        else if (authors.length > 1 && i + 1 < authors.length) authorsString = `${authorsString}${author.name} `
        else if (authors.length > 1) authorsString = `${authorsString}y ${author.name}`
        else authorsString = `${authorsString}${author.name}`
    })
    return authorsString
}