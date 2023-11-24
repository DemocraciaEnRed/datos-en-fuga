import amparo from "../../../public/shared/amparo.png"

export const subtopics = [
    {
        title: 'sobre la temática',
        details: [{
            q: '¿qué es la ciberseguridad?',
            a: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eligendi.']
        },
        {
            q: '¿qué es la ciberreciliencia?',
            a: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eligendi.']
        },
        {
            q: '¿nuestros datos están seguros?',
            a: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eligendi.']
        }]
    },
    {
        title: 'sobre el proyecto',
        details: [{
            q: '¿qué es una vulnerabilidad informática?',
            a: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eligendi.']
        }]
    },
]
export const resources = [
    {
        title: 'amparo',
        img: amparo,
        description: <>Este amparo pretende la <strong className="font-bold">derogación del decreto DA 410/18052</strong>, por que <strong className="font-bold">atenta contra la ley de datos personales</strong> hoy vigente en la <strong className="font-bold">export constitución</strong>.</>,
        btnLabel: 'descargar amparo',
        url: '#'
    },
    {
        title: 'amparo',
        img: amparo,
        description: 'Gacetilla de prensa sobre la presentación del amparo.',
        btnLabel: 'descargar amparo',
        url: '#'
    }
]
export const items = [{ title: 'item 1' }, { title: 'item 2' }, { title: 'item 3' }, { title: 'item 4' }, { title: 'item 5' }]
export const iframes = [
    {
        key: "FIMkE6u9pqs",
        src: "https://www.youtube.com/embed/FIMkE6u9pqs?enablejsapi=1",
        title: "¿Nuestros datos están seguros?"
    },
    {
        key: "7neHhi_cpsc",
        src: "https://www.youtube.com/embed/7neHhi_cpsc?enablejsapi=1",
        title: "¿Qué es la #CiberSeguridad?"
    },
    {
        key: "c5uOX2G2NGw",
        src: "https://www.youtube.com/embed/c5uOX2G2NGw?enablejsapi=1",
        title: "Vulnerabilidad informática"
    },
    {
        key: "dF2jmBf8Tko",
        src: "https://www.youtube.com/embed/dF2jmBf8Tko",
        title: "¿Qué es la #CiberResiliencia?"
    }
]