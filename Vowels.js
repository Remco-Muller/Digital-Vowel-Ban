function digitalVowelBan(n, ban) {
    strArray = [["e", "o"],["o", "e"],["o"],["e"],["o", "u"],["i", "e"],["i"],["e"],["e", "i"],["e", "i"]]
    let count = [...`${n}`].filter((i)=> strArray[Number(i)].every((o)=> o != ban)).join().replace(/,/g, "")
    return count.length == 0 ? "Banned Number":Number(count)
}