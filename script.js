const student = [
    {
        name: "Tiago",
        firstTest: 10,
        secondTest: 6,
    }
    ,
    {
        name: "Isabela",
        firstTest: 8,
        secondTest: 9,
    },
    {
        name: "Gablielly",
        firstTest: 10,
        secondTest: 10,
    }
]

function media() {
    let primeiraNota = (student[0].firstTest + student[0].secondTest) / 2,
        segundaNota = (student[1].firstTest + student[1].secondTest) / 2,
        terceiraNota = (student[0].firstTest + student[0].secondTest) / 2;

    return [primeiraNota, segundaNota, terceiraNota]
}

let allMedia = media()


for (let n = 0; n <= 2; n++) {

    if (allMedia[0] > 7) {
        alert(`A média do(a) aluno(a) ${student[n].name} é: ${allMedia[n]}
Parabéns ${student[n].name}! Você foi aprovado(a) no concurso!`)
    } else {
        alert(`A média do(a) aluno(a) ${student[n].name} é: ${allMedia[n]}
Não foi dessa vez! ${student[n].name}! Tente novamente!`)
    }
}